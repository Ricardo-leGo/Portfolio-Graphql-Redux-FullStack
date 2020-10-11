const { MongoClient     }     =require('mongodb');
const {  dbConfig       }     =require('./../config/dbConfig');

module.exports = class connectionDB{
    dbURL;
    mongoPORT;
    dbName;
    constructor(){
        this.dbURL      = dbConfig.url;
        this.mongoPORT  = dbConfig.MongoPort;
        this.dbName     = dbConfig.dbName;
    };

    test = () => { console.log("testing done!") }

    dbConnection = async ( ) => {
        const client = await new MongoClient.connect(`${this.dbURL}:${this.mongoPORT}}`,
        {
            useUnifiedTopology: true,
            useNewUrlParser:    true
        });
        const db = await client.db(`${this.dbName}`);
        console.log( ` Conectado a ${db.databaseName}` );
        return await db;
    }
}