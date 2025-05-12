import mongoose from "mongoose";

global.mongoose = {
  conn: null,
  promise: null,
};

export async function connectDb() {
  console.log("Attempting to connect to the database...");
  if (global.mongoose && global.mongoose.conn) {
    console.log("Already connected from previous");
    return global.mongoose.conn;
  } else {
    const connString = process.env.MONGO_URL;
    const promise = mongoose.connect(connString, { dbName: "healthx" });
    global.mongoose = {
      conn: await promise,
      promise,
    };
    console.log("Newly connected");
    return await promise;
  }
}
