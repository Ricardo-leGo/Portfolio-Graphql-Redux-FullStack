require('dotenv').config();
const { ApolloServer }  = require( 'apollo-server-express' );
const { createServer }  = require( 'http' );
const express           = require( 'express' );
const cors              = require( 'cors' );
const logger            = require( 'morgan' )
const chalk             = require( 'chalk' );
const bodyParser        = require( 'body-parser' );
const compression       = require( 'compression' );
const cookieParser      = require( 'cookie-parser' );
const depthLimit        = require( 'graphql-depth-limit' );
const corsOptions       = require( './config/corsOptions' );
const schema            = require( './schema' );
const connectionDB      = require( './DB/mongoDB' );

servetInit = async data => {
  const instanceDB    = await new connectionDB();
  const db            = instanceDB.dbConnection();
  const PORT          = Number(process.env.PORTDEV);
  const app           = express();

    app.use('*',
            cors( corsOptions ),
            bodyParser.urlencoded({ extended: true }),
            bodyParser.json(),
            cookieParser(),
            compression()
            );

  const context       = async ({req, connection})=>{
    // console.log("hola context", req.headers);
    let token = req ? req.headers.authorization : connection.authorization;
    let User;
    return { db, User, req, token }
  };

  const server = new ApolloServer({
      schema,
      context,
      instrospection:true,
      validationRules: [depthLimit(Number(process.env.DEPTHLIMIT))]
  });


    server.applyMiddleware({ app, path:'/graphql' });

    const httpServer = await createServer( app );

    httpServer.listen( 
    {
      port:PORT
    }, () =>console.log(`Graphql Sever on Port -> ${ PORT }` )
    );

};servetInit();
