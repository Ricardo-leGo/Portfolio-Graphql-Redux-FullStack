const   path                     = require('path');
const  resolvers                 = require('./resolvers/ResolverMap');
const { makeExecutableSchema }   = require('graphql-tools');
const { loadFilesSync }          = require('@graphql-tools/load-files');
const { mergeTypeDefs }          = require('@graphql-tools/merge');

const typeDefs = mergeTypeDefs(
    loadFilesSync(path.join(__dirname, './**/*.graphql'))
    );

 module.exports = makeExecutableSchema({
    typeDefs,
    resolvers
});
