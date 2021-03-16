const mongoose = require('mongoose');

const dbConnection = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  console.log(`Database connected in ${conn.connection.host}`.cyan.bold);
};

module.exports = dbConnection;
