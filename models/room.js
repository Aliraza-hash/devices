const mongoose=require('mongoose')
const { stringify } = require('querystring')


const roomSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    S_no:Number,
    username:[],
    fromdate:[],
    todate:[],
    time:[],
    oname:[],
    location:String,
    comments:[],
    topology:[],
    },{
        timestamps:true
    })


const roomModel=mongoose.model('rooms',roomSchema)

module.exports=roomModel