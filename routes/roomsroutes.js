const { default: userEvent } = require('@testing-library/user-event');
const express = require('express');

const router = express.Router();

const Room = require('../models/room')



function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


function final(a, b) {
    var strtDt = new Date();
    var endDt = new Date("1942-07-01");
    var flag = 0; // false

    if (endDt <= strtDt) {
        flag = 1; // true
        return true;
    }
    return false;
}

router.get('/getallrooms', async (req, res) => {
    // res.header('Access-Control-Allow-Origin', "*");
    // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    // res.header('Access-Control-Allow-Headers', 'Content-Type');



    try {


        const rooms = await Room.find({});


        for (var i = 0; i < rooms.length; i++) {
            for (var j = 0; j < rooms[i].todate.length;) {
                var utc = new Date().toJSON().slice(0,10).replace(/-/g,'-');
                var strtDt = new Date(utc);
                var endDt = new Date(rooms[i].todate[j]);
                var flag = 0; // false
                if (endDt <= strtDt) {
                    rooms[i].username.splice(j,1);
                    rooms[i].fromdate.splice(j,1);
                    rooms[i].todate.splice(j,1);
                    
                    // rooms[i].todate.splice(j,1);
                    await rooms[i].save()

                }
                else
                {
                    j++;
                }

                     
            }
        }

        

        // for(var i=0;i<rooms.length;i++)
        // {
        //     var utc = new Date().toJSON().slice(0,10).replace(/-/g,'-');
        //     for(var j=0;j<rooms[i].todate.length;)
        //     {
        //         if(final(utc,rooms[i].todate[j]))
        //         {
        //             rooms[i].todate[j].splice(j,1);
        //             rooms[i].fromdate[j].splice(j,1);
        //             rooms[i].username[j].splice(j,1);
        //         }
        //         else
        //         {
        //             j++;
        //         }
        //     }

        // }    


        // for( var i=0;i<rooms.length;i++)
        // {
        //     var utc = new Date().toJSON().slice(0,10).replace(/-/g,'-');
        //     for(var j=0;j<rooms[i].todate.length;)
        //     {
        //         console.log(rooms[i][j])
        //         if(final(utc,rooms[i].todate[j]))
        //         {
        //             rooms[i].todate[j].splice(j,1);
        //             rooms[i].fromdate[j].splice(j,1);
        //             rooms[i].username[j].splice(j,1);
        //         }
        //         else
        //         {
        //             j++;
        //         }
        //     }
        // }
        res.send(rooms)

    } catch (error) {
        return res.status(400).json({ message: error });
    }




});

router.post('/getallcomments',async(req,res)=>{
    try {
        // const newroom=new Room({name:req.body.name, username:req.body.username,date:req.body.date,location:req.body.location})

        const roomtemp = await Room.findOne({ _id: req.body.id })

        

        var c = req.body.comments;
        console.log(req)
        roomtemp.comments.push(c);





        // rooomtemp.date.push(req.body.date)

        // roomtemp.location.push(req.body.location)




        await roomtemp.save();

        console.log(roomtemp)

        res.send(roomtemp)
    }
    catch (error) {
        console.log({ error })
        res.status(400).json({ error })
    }
})

router.post('/getallrooms', async (req, res) => {
    // const newroom=new Room({name:req.body.name, username:req.body.username,date:req.body.date,location:req.body.location})
    // await newroom.save()
    // try{
    //     res.send("New room added successfully")
    // } catch(error){
    //     return res.status(400).json({error})
    // }
    try {
        // const newroom=new Room({name:req.body.name, username:req.body.username,date:req.body.date,location:req.body.location})

        const roomtemp = await Room.findOne({ _id: req.body.id })

        

        var c = req.body.username;


        roomtemp.username.push(c);
        roomtemp.fromdate.push(req.body.fromdate);
        roomtemp.todate.push(req.body.todate);
        roomtemp.time.push(req.body.time);






        // rooomtemp.date.push(req.body.date)

        // roomtemp.location.push(req.body.location)




        await roomtemp.save();

        console.log(roomtemp)

        res.send(roomtemp)
    }
    catch (error) {
        console.log({ error })
        res.status(400).json({ error })
    }
})

module.exports = router;