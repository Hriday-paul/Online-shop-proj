const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@firstcluster.68frnfz.mongodb.net/?retryWrites=true&w=majority&appName=firstCluster`);
    console.log(`Db Running On ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`${error}`);
  }
};

module.exports = connectDb;
