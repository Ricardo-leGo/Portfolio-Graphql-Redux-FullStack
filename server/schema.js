const   path                     = require('path');
const  resolvers                 = require('./resolvers/ResolverMap');
// const   typeDefs                 = require('./typedefs')
const { makeExecutableSchema }   = require('graphql-tools');
const { loadFilesSync }          = require('@graphql-tools/load-files');
const { mergeTypeDefs }          = require('@graphql-tools/merge');

const typeDefs = mergeTypeDefs(
    loadFilesSync(path.join(__dirname, './**/*.graphql'))
    );

const schema  = makeExecutableSchema({
    typeDefs,
    resolvers
});

module.exports = schema;
