const { default: userEvent } = require('@testing-library/user-event');
const express=require('express');

const router=express.Router();

const Room=require('../models/room')




router.get('/getallrooms',async(req,res)=>{
    // res.header('Access-Control-Allow-Origin', "*");
    // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    // res.header('Access-Control-Allow-Headers', 'Content-Type');
   
   try{
    const rooms=await Room.find({});
    res.send(rooms)
   }catch(error){
    return res.status(400).json({message:error});
   }




});



router.post('/getallrooms',async(req,res)=>{
    // const newroom=new Room({name:req.body.name, username:req.body.username,date:req.body.date,location:req.body.location})
    // await newroom.save()
    // try{
    //     res.send("New room added successfully")
    // } catch(error){
    //     return res.status(400).json({error})
    // }
    try{
    // const newroom=new Room({name:req.body.name, username:req.body.username,date:req.body.date,location:req.body.location})
    
    const roomtemp=await Room.findOne({_id:req.body.id})

    console.log(req.body)

    var c=req.body.username;

    var d=req.body.date;

    var e=req.body.comments;
    roomtemp.username.push(c);
    roomtemp.date.push(d);
    roomtemp.comments=e;





    // rooomtemp.date.push(req.body.date)

    // roomtemp.location.push(req.body.location)

    


    await roomtemp.save();

    console.log(roomtemp)

    res.send(roomtemp)
    }
    catch(error){
        console.log({error})
        res.status(400).json({error})
    }
})


router.post('/getallcomments',async(req,res)=>{
    // const newroom=new Room({name:req.body.name, username:req.body.username,date:req.body.date,location:req.body.location})
    // await newroom.save()
    // try{
    //     res.send("New room added successfully")
    // } catch(error){
    //     return res.status(400).json({error})
    // }
    try{    
    const roomtemp=await Room.findOne({_id:req.body.id})
    var e=req.body.comments;
    roomtemp.comments=e;
    await roomtemp.save();
    console.log(roomtemp)
    res.send(roomtemp)
    }
    catch(error){
        console.log({error})
        res.status(400).json({error})
    }
})

module.exports=router;