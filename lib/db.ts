import { MongoClient, ObjectId } from "mongodb";
import { categoryType } from "../dev";

// Global variable to store the cached client
let cachedClient: MongoClient | null = null;

// Cache for storing query results
const queryCache = new Map<string, { data: any; timestamp: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes in milliseconds

// Utility function to serialize MongoDB documents
function serializeDocument(doc: any) {
  if (!doc) return null;
  return {
    ...doc,
    _id: doc._id.toString(),
  };
}

function serializeDocuments(docs: any[]) {
  return docs.map(doc => serializeDocument(doc));
}

export async function connectToDatabase() {
  try {
    if (cachedClient) {
      // Check if the connection is still alive
      try {
        await cachedClient.db().command({ ping: 1 });
        return cachedClient;
      } catch (error) {
        // If connection is dead, clear the cache and create new connection
        cachedClient = null;
      }
    }

    const client = await MongoClient.connect(process.env.MONGODB_URI!, {
      maxPoolSize: 10,
      minPoolSize: 5,
      serverSelectionTimeoutMS: 5000, // 5 seconds timeout
      connectTimeoutMS: 10000, // 10 seconds timeout
    });
    
    // Verify the connection
    await client.db().command({ ping: 1 });
    
    cachedClient = client;
    return client;
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw new Error('Database connection failed');
  }
}

function getCachedData(key: string) {
  const cached = queryCache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }
  return null;
}

function setCachedData(key: string, data: any) {
  queryCache.set(key, { data, timestamp: Date.now() });
}

async function ensureConnection(client: MongoClient) {
  try {
    await client.db().command({ ping: 1 });
  } catch (error) {
    // If connection is dead, try to reconnect
    cachedClient = null;
    return await connectToDatabase();
  }
  return client;
}

export const getAllRecords = async (client: MongoClient) => {
  const connectedClient = await ensureConnection(client);
  const db = connectedClient.db();
  const records = await db
    .collection("records")
    .find()
    .sort({ date: -1 })
    .toArray();
  return serializeDocuments(records);
};

export const getPaginatedRecords = async (client: MongoClient, page: number) => {
  const cacheKey = `paginated_records_${page}`;
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  const connectedClient = await ensureConnection(client);
  const limit = 5;
  const skip = (page - 1) * limit;
  
  try {
    const db = connectedClient.db();
    const records = await db
      .collection("records")
      .find()
      .sort({ date: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();
    
    const serializedRecords = serializeDocuments(records);
    setCachedData(cacheKey, serializedRecords);
    return serializedRecords;
  } catch (error) {
    console.error('Error fetching paginated records:', error);
    throw new Error('Failed to fetch records');
  }
};

export const getAllRecordsByCategory = async (
  client: MongoClient,
  category: string,
) => {
  const cacheKey = `category_${category}`;
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  const connectedClient = await ensureConnection(client);
  
  try {
    const db = connectedClient.db();
    const records = await db
      .collection("records")
      .find({ category: { $in: [category] } })
      .sort({ date: -1 })
      .toArray();
    
    const serializedRecords = serializeDocuments(records);
    setCachedData(cacheKey, serializedRecords);
    return serializedRecords;
  } catch (error) {
    console.error('Error fetching records by category:', error);
    throw new Error('Failed to fetch records by category');
  }
};

export const getPaginatedRecordsByCategory = async (
  client: MongoClient,
  category: string,
  page: number
) => {
  const cacheKey = `category_${category}_page_${page}`;
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  const connectedClient = await ensureConnection(client);
  const limit = 5;
  const skip = (page - 1) * limit;
  
  try {
    const db = connectedClient.db();
    const records = await db
      .collection("records")
      .find({ category: { $in: [category] } })
      .sort({ date: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();
    
    const serializedRecords = serializeDocuments(records);
    setCachedData(cacheKey, serializedRecords);
    return serializedRecords;
  } catch (error) {
    console.error('Error fetching paginated records by category:', error);
    throw new Error('Failed to fetch paginated records by category');
  }
};

export const getAllRecordsByDate = async (
  client: MongoClient,
  year: number,
  month: number,
) => {
  const cacheKey = `date_${year}_${month}`;
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  const connectedClient = await ensureConnection(client);
  const db = connectedClient.db();
  const startDate = `${year}-${String(month).padStart(2, "0")}-01`;
  const endDate = `${year}-${String(month + 1).padStart(2, "0")}-01`;

  const records = await db
    .collection("records")
    .find({
      date: {
        $gte: startDate,
        $lt: endDate,
      },
    })
    .sort({ date: -1 })
    .toArray();

  const serializedRecords = serializeDocuments(records);
  setCachedData(cacheKey, serializedRecords);
  return serializedRecords;
};

export const getRecordById = async (client: MongoClient, id: string) => {
  const cacheKey = `record_${id}`;
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  const connectedClient = await ensureConnection(client);
  
  try {
    const db = connectedClient.db();
    const nid = new ObjectId(id);
    const record = await db.collection("records").findOne({ _id: nid });
    
    const serializedRecord = serializeDocument(record);
    setCachedData(cacheKey, serializedRecord);
    return serializedRecord;
  } catch (error) {
    console.error('Error fetching record by id:', error);
    throw new Error('Failed to fetch record');
  }
};

export const getThreeLatestRecordsByKind = async (
  client: MongoClient,
  kind: "learning" | "daily"
) => {
  const cacheKey = `latest_${kind}`;
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  const connectedClient = await ensureConnection(client);
  
  try {
    const db = connectedClient.db();
    const records = await db
      .collection("records")
      .find({ kind })
      .limit(3)
      .sort({ date: -1 })
      .toArray();
    
    const serializedRecords = serializeDocuments(records);
    setCachedData(cacheKey, serializedRecords);
    return serializedRecords;
  } catch (error) {
    console.error('Error fetching latest records by kind:', error);
    throw new Error('Failed to fetch latest records');
  }
};

export const getPaginatedRecordsByDate = async (
  client: MongoClient,
  year: number,
  month: number,
  page: number,
) => {
  const cacheKey = `date_${year}_${month}_page_${page}`;
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  const connectedClient = await ensureConnection(client);
  const db = connectedClient.db();
  const limit = 5;
  const skip = (page - 1) * limit;
  const startDate = `${year}-${String(month).padStart(2, "0")}-01`;
  const endDate = `${year}-${String(month + 1).padStart(2, "0")}-01`;

  const records = await db
    .collection("records")
    .find({
      date: {
        $gte: startDate,
        $lt: endDate,
      },
    })
    .sort({ date: -1 })
    .skip(skip)
    .limit(limit)
    .toArray();

  const serializedRecords = serializeDocuments(records);
  setCachedData(cacheKey, serializedRecords);
  return serializedRecords;
};