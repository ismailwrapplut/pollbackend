import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connected = await mongoose.connect(
      process.env.MONGO_URL ||
        "mongodb+srv://smilewebdeveloper:Ismail$321@cluster0.ar8vert.mongodb.net/"
    );
    console.log(`Mongodb connected ${connected.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default dbConnect;
