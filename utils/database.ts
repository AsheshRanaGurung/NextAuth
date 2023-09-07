import mongoose from "mongoose";
let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("mogoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI as string, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
  } catch (err) {
    console.log(err);
  }
};
