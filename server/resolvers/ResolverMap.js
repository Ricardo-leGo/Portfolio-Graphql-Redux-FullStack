const   Mutation           =require( '../mutations/Mutations' );
const   Query              =require( '../Querys/Querys' );

module.exports =  {
    ...Query,
    ...Mutation
}
