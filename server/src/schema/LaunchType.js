const graphql =require('graphql')
const RocketType =require('./RocketType')

const {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean,GraphQLList, GraphQLSchema}=graphql;

// Launch Type

const LaunchType = new GraphQLObjectType({
    name:'Launch',
    fields:()=>({
        flight_number:{type:GraphQLInt},
        mission_name:{type:GraphQLString},
        launch_year:{type:GraphQLString},
        launch_date_local:{type:GraphQLString},
        launch_success:{type:GraphQLBoolean},
        rocket: { type: RocketType }        
    })
});

module.exports =LaunchType;