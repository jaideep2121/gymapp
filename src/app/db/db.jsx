import mongoose from "mongoose";

const db= async () => {
  const url =
    "mongodb+srv://sachdevahritik:jaideep2121@cluster0.otjoegg.mongodb.net/gymapp";

  mongoose
    .connect(url)
    .then(() => console.log("Database connection is successful"))
    .catch((e) => console.log(e));
};

export default db;
db();