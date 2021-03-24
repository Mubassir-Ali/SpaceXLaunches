const express = require('express')
const {graphqlHTTP}=require('express-graphql')
const schema=require('./schema/schema')
const cors =require('cors')

const app =express()

// Allow cross-origin
app.use(cors())


app.use(`/graphql`, graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(4000, ()=>{
    console.log(`
    Server is Running...
    listen on port 4000
    `);
})