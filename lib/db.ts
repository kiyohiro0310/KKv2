import { MongoClient, ObjectId } from "mongodb";
import { categoryType } from "../dev";

export async function connectToDatabase() {
  const client = await MongoClient.connect(process.env.MONGODB_URI!);
  return client;
}

export const getAllRecords = async (client: MongoClient) => {
  const db = client.db();
  const allMessages = db
    .collection("records")
    .find()
    .sort({ date: -1 })
    .toArray();
  return allMessages;
};

export const getPaginatedRecords = async (client: MongoClient, page: number) => {
  const limit = 5;
  const skip = (page - 1) * limit;
  const db = client.db();
  const allMessages = db
    .collection("records")
    .find()
    .sort({ date: -1 })
    .skip(skip)
    .limit(limit)
    .toArray();
  return allMessages;
};


export const getAllRecordsByCategory = async (
  client: MongoClient,
  category: string,
) => {
  const db = client.db();
  const limit = 5;
  const allMessages = db
    .collection("records")
    .find({ category: { $in: [category] } })
    .sort({ date: -1 })
    .toArray();
  return allMessages;
};

export const getPaginatedRecordsByCategory = async (
  client: MongoClient,
  category: string,
  page: number
) => {
  const db = client.db();
  const limit = 5;
  const skip = (page - 1) * limit;
  const allMessages = db
    .collection("records")
    .find({ category: { $in: [category] } })
    .sort({ date: -1 })
    .skip(skip)
    .limit(limit)
    .toArray();
  return allMessages;
};
export const getAllRecordsByDate = async (
  client: MongoClient,
  year: number,
  month: number,
) => {
  const db = client.db();

  // Format the start and end dates as strings
  const startDate = `${year}-${String(month).padStart(2, "0")}-01`;
  const endDate = `${year}-${String(month + 1).padStart(2, "0")}-01`;

  const allMessages = await db
    .collection("records")
    .find({
      date: {
        $gte: startDate, // Greater than or equal to the start of the month
        $lt: endDate,    // Less than the start of the next month
      },
    })
    .sort({ date: -1 })
    .toArray();

  return allMessages;
};

export const getRecordById = async (client: MongoClient, id: string) => {
  const db = client.db();
  const nid = new ObjectId(id);
  const allMessages = db.collection("records").findOne({ _id: nid });
  return allMessages;
};

export const getThreeLatestRecordsByKind = async (
  client: MongoClient,
  kind: "learning" | "daily"
) => {
  const db = client.db();
  const allMessages = db
    .collection("records")
    .find({ kind })
    .limit(3)
    .sort({ date: -1 })
    .toArray();
  return allMessages;
};

export const getPaginatedRecordsByDate = async (
  client: MongoClient,
  year: number,
  month: number,
  page: number,
) => {
  const db = client.db();
  const limit = 5;
  const skip = (page - 1) * limit;
  // Format the start and end dates as strings
  const startDate = `${year}-${String(month).padStart(2, "0")}-01`;
  const endDate = `${year}-${String(month + 1).padStart(2, "0")}-01`;

  const allMessages = await db
    .collection("records")
    .find({
      date: {
        $gte: startDate, // Greater than or equal to the start of the month
        $lt: endDate,    // Less than the start of the next month
      },
    })
    .sort({ date: -1 })
    .skip(skip)
    .limit(limit)
    .toArray();

  return allMessages;
};