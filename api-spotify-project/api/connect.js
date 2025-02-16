import { MongoClient } from "mongodb";

const URI = "mongodb+srv://sidney:sidneya2015@cluster0.ma9ou.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
//const songCollection = await db.collection('songs').find({}).toArray();



