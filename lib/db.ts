import { MongoClient, ObjectId } from "mongodb";
import { categoryType } from "../dev";

export async function connectToDatabase() {
    const client = await MongoClient.connect(process.env.MONGODB_URI!);
    return client;
}

export const getAllRecordsByKind = async (client: MongoClient, kind: "learning" | "daily") => {
    const db = client.db();
    const allMessages = db.collection("records").find({kind}).sort( {date : -1}).toArray();
    return allMessages;
}

export const getAllRecordsByKindAndCategory = async (client: MongoClient, kind: "learning" | "daily", category: categoryType) => {
    const db = client.db();
    const allMessages = db.collection("records").find({kind, category: [category]}).sort( {date : -1}).toArray();
    return allMessages;
}

export const getAllRecordsByCategory = async (client: MongoClient, category: string) => {
    const db = client.db();
    const allMessages = db.collection("records").find({category: {$all:[category]}}).sort( {date : -1}).toArray();
    return allMessages;
}

export const getRecordById = async (client: MongoClient, id: string) => {
    const db = client.db();
    const nid = new ObjectId(id);
    const allMessages = db.collection("records").findOne({_id: nid});
    return allMessages;
}

export const getThreeLatestRecordsByKind = async (client: MongoClient, kind: "learning" | "daily") => {
    const db = client.db();
    const allMessages = db.collection("records").find({kind}).limit(3).sort( {date : -1}).toArray();
    return allMessages;
}