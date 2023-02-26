
const mongoose=require("mongoose");

// var mongoURL="mongodb+srv://ALI110:Ali110*thapar@cluster0.93uytwc.mongodb.net/test"
var mongoURL="mongodb+srv://Ali110:Ali110thapar@cluster0.zbeo0o7.mongodb.net/routers"
// var mongoURL="mongodb+srv://ALI110:donttrustanyone@cluster0.93uytwc.mongodb.net/test"
mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

var connection=mongoose.connection

connection.on('error',()=>{
    console.log("mongo db connection failed")
})

connection.on('connected',()=>{
    console.log("mongo db connection successful")
})

module.exports=mongoose