import { connectToDatabase, getRecordById } from "@/lib/db";

export async function GET(req: Request) {
  const id = req.url.split("/")[-1];
  console.log(id);
  const client = await connectToDatabase();
  const post = await getRecordById(client, id as string);
  client.close();
  return Response.json(post);
  
}