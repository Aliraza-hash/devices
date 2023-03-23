const express=require('express');
const router=express.Router();
const app=express();
const cors=require('cors');
const dbconfig=require('./db')
app.use(cors());
const roomsRoute=require('./routes/roomsroutes')
const path=require('path');
const { collection } = require('./models/room');
const rooom=require('./index')
namee=require('./index2')
// const Room=require('./models/room')


// // for(var i=0;i<rooms.length;i++)
// // {
// //   for(var j=0;j<rooms[i].todate.length;j++)
// //   {
// //     console.log()
// //     rooms[i].todate[j].splice(j,1)
// //   }
// // }

// console.log(rooms)


// console.log(name)
app.use(express.json())
app.use(cors());

app.use('/api/rooms',roomsRoute)
app.use('/api/rooms',rooom)
app.use('/api/rooms',namee.router);
app.use(express.static("client/build"));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
  var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
  
app.listen((2000),()=>console.log("node server started"));