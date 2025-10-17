const express = require('express') ; 

// const { PORT } =  require('./config') ;
const { ServerConfig  , Logger } =  require('./config') ;
//It will not require to mention the index.js it will automatically take it from index.js under config 

const apiRoutes = require('./routes') ; 

const app = express() ; 

app.use('/api',apiRoutes) ; 

app.listen(ServerConfig.PORT , ()=>{
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`)
    // Logger.info("Successfully started server " , "root" , {})
}) ; 
// If someone gives localhost 3000 /api/v1/info