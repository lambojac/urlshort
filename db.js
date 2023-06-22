require('dotenv').config()
const mongoose = require('mongoose')
const logger = require("./logger/logger")
const MONGODB = process.env.MONGODB

function  connectionMongoDB(){
    mongoose.connect(MONGODB ,{
        useNewUrlParser: true, useUnifiedTopology: true })

    mongoose.connection.on('connected', () =>{
        logger.info('connection to mongodb successful')
    })

    mongoose.connection.on('err', (err) =>{
        logger.error(err)
        
    })

}


module.exports =   {connectionMongoDB}