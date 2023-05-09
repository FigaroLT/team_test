require("dotenv").config();
//some changes here

module.exports = {
  port: process.env.PORT || 8080,
  dbConfig: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
};
