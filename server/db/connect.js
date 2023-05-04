const mongoose = require("mongoose");

const connectObj = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const connectDatabase = async () => {
  const { data } = await mongoose.connect(process.env.MONGO_URI, connectObj);
  console.log(`Mongodb connected with server.`);
};

module.exports = connectDatabase;
