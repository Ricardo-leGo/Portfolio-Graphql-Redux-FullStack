const { gql }       = require('apollo-server');

module.exports = gql`
type Query {

  hello: String
  funcion:String
  
}

type Mutation{ 

  adios:String

}
`;

