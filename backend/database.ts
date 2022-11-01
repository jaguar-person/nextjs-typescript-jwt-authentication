import mongoose, { ConnectionOptions } from "mongoose";

(async () => {
  try {
    const mongooseOptions: ConnectionOptions = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    };

    const db = await mongoose.connect(process.env.MONGO_URI!, mongooseOptions);
    console.log("> Database is connected to: ", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
