exports.dbConfig = {
    url:            process.env.HOSTPROD || process.env.HOSTDEV,
    db:             process.env.DBPROD   || process.env.DBDEV,
    dbName:         process.env.DBPROD   || process.env.DBDEV,
    MongoPort:      process.env.MONGOPORTDEV,
    options:{
         poolsizer:15
     }
};