const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;
const dbName = "nodejs-Task-3"
const url =`mongodb+srv://root:root123@cluster0.spnfw8e.mongodb.net/${dbName}`

module.exports={url,mongodb,MongoClient}