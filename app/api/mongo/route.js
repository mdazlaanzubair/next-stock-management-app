import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

// getting mongodb url to make connection to the database
const db_url = process.env.NEXT_PUBLIC_MONGO_DB_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(db_url);

// async function run() {
//   try {
//     // connecting to the database
//     const database = client.db("inventory_manager");
//     const collection = client.collection("inventory");

//     // query to the database
//     const query = {};

//     console.log("Database successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// next.js api routes
export async function GET(request) {
  return NextResponse.json({ msg: "Hello from NextJS API!" });
}
