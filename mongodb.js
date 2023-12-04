const { MongoClient } = require("mongodb");

const uri = require("./atla_uri");

console.log(uri);

const client = new MongoClient(uri);
const dbname = "Express";

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log(`Connected to the database ${dbname}`);
  } catch (err) {
    console.log(`Error connecting to the database: ${err}`);
  }
};

const main = async () => {
  try {
    await connectToDatabase();
  } catch (err) {
    console.error(`Error connecting to the database: ${err}`);
  } finally {
    await client.close();
  }
};

main();
