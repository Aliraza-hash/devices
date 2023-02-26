const express=require('express');

const app=express();
const cors=require('cors');
const dbconfig=require('./db')
app.use(cors());
const roomsRoute=require('./routes/roomsroutes')

const { collection } = require('./models/room');



app.use(express.json())

app.use(cors());





app.use('/api/rooms',roomsRoute)





app.listen((2002),()=>console.log("node server started"));
