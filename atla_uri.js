const dev_db_url =
  "mongodb+srv://electro600:_Sweetgirl70@express.cdgewwj.mongodb.net/?retryWrites=true&w=majority";

module.exports = uri = process.env.MONGODB_URI || dev_db_url;
