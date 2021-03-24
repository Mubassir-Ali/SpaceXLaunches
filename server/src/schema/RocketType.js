const graphql =require('graphql')

const {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean,GraphQLList, GraphQLSchema}=graphql;

// Rocket Type
const RocketType=new GraphQLObjectType({
    name:"Rocket",
    fields:()=>({
        rocket_id: { type: GraphQLString },
        rocket_name: { type: GraphQLString },
        rocket_type: { type: GraphQLString }
    })
})

module.exports=RocketType