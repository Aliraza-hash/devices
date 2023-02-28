// import logo from './logo.svg';
// import './App.css';
// import { useState} from 'react';
// import { useEffect } from 'react';
// import Readmore from './Readmore';
// import { Route } from 'react-router-dom';
// import axios from 'axios'
// function App() {
//   const [rooms, setrooms] = useState([]);
//   const [location, setlocation]= useState();
//   const [username, setusername]= useState();
//   const [date, setdate]= useState();
//   const [name, setname]=useState();
//   const [id,setid]=useState();
//   const [i,seti]=useState(0);
//   const [comments,setcomments]=useState();
//   useEffect(() => {

//     // if(!localStorage.getItem('currentUser'))
//     // {
//     //  window.location.href="/login"
//     // }


//     fetch('https://device-reservation.onrender.com/api/rooms/getallrooms', {
//       method: 'get',
//       headers: { 'Content-Type': 'application/json' }
//     }).then(response => response.json()).then(data => {
//       setrooms(data)
//       console.log(data)
//     })
//   }, [])
//   //dlasld
  

//   async function final(){
//     // setrouter(router)
//     const details={
//       id,
//       name,
//       username,
//       date,
//       comments
//     }
//     try{
//       const result=(await axios.post('https://device-reservation.onrender.com/api/rooms/getallrooms',details)).data;
//           window.location.href="/"
//     }
//     catch(error)
//     {
//       console.log(error)

//     }
    
//   }

//   function final1(){
//      <Readmore></Readmore>
//   }




//   return (
//     <div>


//       <table width="100%">
//         <tr>
//           <th width="5%">S.No:</th>
//           <th width="5%">Device Name</th>
//           <th width="10%">Juniper username</th>
//           <th width="10%">Dates</th>
//           <th width="10%">Location</th>
//           <th width="30%">Topology</th>
//           <th width="30%">Comments</th>
//         </tr>
//       </table>

//         {
//           rooms.map(room => {
//             return <table width="100%">
//               <tr>
                
//                 <td className='t' width="5%">{room.S_no}<br/>
//                 </td>
//                 <td className='t' width="5%">{room.name}<br/>
//                 </td>
//               <td width="10%" className='t' align='centre'>
//               {room.username.map(user=>{
//               return <div>{user}</div>
//             })}
//               <input type="text" className='in'  placeholder="enter your juniper username" onChange={(e)=>{setid(room._id);setname(room.name);setusername(e.target.value)}}></input>
//               </td>
//               <td width="10%" align='centre' className='t'>
//               {room.date.map(user=>{
//               return <div>{user}</div>
//             })}
//               <input type="text" className='in' placeholder="enter the date for device reservation" onChange={(e)=>{setid(room._id);setname(room.name);setdate(e.target.value)}}></input>
//               </td>
//               <td width="10%" align='centre' className='t'>
//               {room.location.map(user=>{
//               return <div>{user}</div>
//             })}
//               </td>
//               <td width="30%" align='centre' className='tt'>
//               {room.topology.map(user=>{
//               return <div>{user}</div>
//             })}
//                             </td>
//               <td><input type="text" className='in' placeholder='enter comments' onChange={(e)=>{setid(room._id);setname(room.name);setcomments(e.target.value)}}></input>
//               <button onClick={final}>submit</button>
//               </td>

//               </tr>
           
//             </table>
//           })
//         }
//     </div>
//   );
// }

// export default App;


import logo from './logo.svg';
import './App.css';
import { useState} from 'react';
import {BrowserRouter, Link, Switch, Route}  from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios'

function Home() {

    const [rooms, setrooms] = useState([]);
    const [location, setlocation]= useState();
    const [username, setusername]= useState();
    const [date, setdate]= useState();
    const [name, setname]=useState();
    const [id,setid]=useState();
    const [i,seti]=useState(0);
    const [comments,setcomments]=useState();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {

    // if(!localStorage.getItem('currentUser'))
    // {
    //  window.location.href="/login"
    // }


    fetch('https://device-reservation.onrender.com/api/rooms/getallrooms', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json()).then(data => {
      setrooms(data)
      console.log(data)
    })
  }, [])



   async function final(){
    // setrouter(router)
    const details={
      id,
      name,
      username,
      date,
      comments
    }
    try{
      const result=(await axios.post('https://device-reservation.onrender.com/api/rooms/getallrooms',details)).data;
      // window.location.href="/"
    }
    catch(error)
    {
      console.log(error)

    }
    
  }

    return (
        <div>
    
    
    <table width="100%">
            <tr>
              <th width="5%">S.No:</th>
              <th width="5%">Device Name</th>
              <th width="10%">Juniper username</th>
              <th width="10%">Dates</th>
              <th width="10%">Location</th>
              <th width="30%">Topology</th>
              <th width="30%">Comments</th>
            </tr>
          </table>
    
            {
              rooms.map(room => {
                return <table width="100%">
                  <tr>
                    
                    <td className='t' width="5%">{room.S_no}<br/>
                    </td>
                    <td className='t' width="5%">{room.name}<br/>
                    </td>
                  <td width="10%" className='t' align='centre'>
                  {room.username.map(user=>{
                  return <div>{user}</div>
                })}
                  <input type="text" className='in'  placeholder="enter your juniper username" onChange={(e)=>{setid(room._id);setname(room.name);setusername(e.target.value)}}></input>
                  </td>
                  <td width="10%" align='centre' className='t'>
                  {room.date.map(user=>{
                  return <div>{user}</div>
                })}
                  <input type="text" className='in' placeholder="enter the date for device reservation" onChange={(e)=>{setid(room._id);setname(room.name);setdate(e.target.value)}}></input>
                  </td>
                  <td width="10%" align='centre' className='t'>
                  <div>{room.location}</div>
                  </td>
                  <td width="30%" align='centre' className='tt'>
                  {room.topology.map(user=>{
                  return <div>{user}</div>
                })}
    
                  
    
                  </td>
                  <td width="30%">
                    <div>{room.comments}</div>
                    <input type="text" className='in' placeholder='enter comments' onChange={(e)=>{setid(room._id);setname(room.name);setcomments(e.target.value)}}></input>
                  <button onClick={final}>submit</button>
                  </td>
    
                  </tr>
               
                </table>
              })
            }
        </div>
      );
}

export default Home