// // import logo from './logo.svg';
// // import './App.css';
// // import { useState} from 'react';
// // import { useEffect } from 'react';
// // import Readmore from './Readmore';
// // import { Route } from 'react-router-dom';
// // import axios from 'axios'
// // function App() {
// //   const [rooms, setrooms] = useState([]);
// //   const [location, setlocation]= useState();
// //   const [username, setusername]= useState();
// //   const [date, setdate]= useState();
// //   const [name, setname]=useState();
// //   const [id,setid]=useState();
// //   const [i,seti]=useState(0);
// //   const [comments,setcomments]=useState();
// //   useEffect(() => {

// //     // if(!localStorage.getItem('currentUser'))
// //     // {
// //     //  window.location.href="/login"
// //     // }


// //     fetch('https://device-reservation.onrender.com/api/rooms/getallrooms', {
// //       method: 'get',
// //       headers: { 'Content-Type': 'application/json' }
// //     }).then(response => response.json()).then(data => {
// //       setrooms(data)
// //       console.log(data)
// //     })
// //   }, [])
// //   //dlasld


// //   async function final(){
// //     // setrouter(router)
// //     const details={
// //       id,
// //       name,
// //       username,
// //       date,
// //       comments
// //     }
// //     try{
// //       const result=(await axios.post('https://device-reservation.onrender.com/api/rooms/getallrooms',details)).data;
// //           window.location.href="/"
// //     }
// //     catch(error)
// //     {
// //       console.log(error)

// //     }

// //   }

// //   function final1(){
// //      <Readmore></Readmore>
// //   }




// //   return (
// //     <div>


// //       <table width="100%">
// //         <tr>
// //           <th width="5%">S.No:</th>
// //           <th width="5%">Device Name</th>
// //           <th width="10%">Juniper username</th>
// //           <th width="10%">Dates</th>
// //           <th width="10%">Location</th>
// //           <th width="30%">Topology</th>
// //           <th width="30%">Comments</th>
// //         </tr>
// //       </table>

// //         {
// //           rooms.map(room => {
// //             return <table width="100%">
// //               <tr>

// //                 <td className='t' width="5%">{room.S_no}<br/>
// //                 </td>
// //                 <td className='t' width="5%">{room.name}<br/>
// //                 </td>
// //               <td width="10%" className='t' align='centre'>
// //               {room.username.map(user=>{
// //               return <div>{user}</div>
// //             })}
// //               <input type="text" className='in'  placeholder="enter your juniper username" onChange={(e)=>{setid(room._id);setname(room.name);setusername(e.target.value)}}></input>
// //               </td>
// //               <td width="10%" align='centre' className='t'>
// //               {room.date.map(user=>{
// //               return <div>{user}</div>
// //             })}
// //               <input type="text" className='in' placeholder="enter the date for device reservation" onChange={(e)=>{setid(room._id);setname(room.name);setdate(e.target.value)}}></input>
// //               </td>
// //               <td width="10%" align='centre' className='t'>
// //               {room.location.map(user=>{
// //               return <div>{user}</div>
// //             })}
// //               </td>
// //               <td width="30%" align='centre' className='tt'>
// //               {room.topology.map(user=>{
// //               return <div>{user}</div>
// //             })}
// //                             </td>
// //               <td><input type="text" className='in' placeholder='enter comments' onChange={(e)=>{setid(room._id);setname(room.name);setcomments(e.target.value)}}></input>
// //               <button onClick={final}>submit</button>
// //               </td>

// //               </tr>

// //             </table>
// //           })
// //         }
// //     </div>
// //   );
// // }

// // export default App;


// import logo from './logo.svg';
// import './App.css';
// import { useState} from 'react';
// import {BrowserRouter, Link, Switch, Route}  from 'react-router-dom'
// import { useEffect } from 'react';
// import axios from 'axios'

// function Home() {

//     const [rooms, setrooms] = useState([]);
//     const [location, setlocation]= useState();
//     const [username, setusername]= useState();
//     const [date, setdate]= useState();
//     const [name, setname]=useState();
//     const [id,setid]=useState();
//     const [i,seti]=useState(0);
//     const [comments,setcomments]=useState();
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);


//     useEffect(() => {

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



//    async function final(){
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
//       window.location.href="/"
//     }
//     catch(error)
//     {
//       console.log(error)

//     }

//   }

//     return (
//         <div>


//     <table width="100%">
//             <tr>
//               <th width="5%">S.No:</th>
//               <th width="5%">Device Name</th>
//               <th width="10%">Juniper username</th>
//               <th width="10%">Dates</th>
//               <th width="10%">Location</th>
//               <th width="30%">Topology</th>
//               <th width="30%">Comments</th>
//             </tr>
//           </table>

//             {
//               rooms.map(room => {
//                 return <table width="100%">
//                   <tr>

//                     <td className='t' width="5%">{room.S_no}<br/>
//                     </td>
//                     <td className='t' width="5%">{room.name}<br/>
//                     </td>
//                   <td width="10%" className='t' align='centre'>
//                   {room.username.map(user=>{
//                   return <div>{user}</div>
//                 })}
//                   <input type="text" className='in'  placeholder="enter your juniper username" onChange={(e)=>{setid(room._id);setname(room.name);setusername(e.target.value)}}></input>
//                   </td>
//                   <td width="10%" align='centre' className='t'>
//                   {room.date.map(user=>{
//                   return <div>{user}</div>
//                 })}
//                   <input type="text" className='in' placeholder="enter the date for device reservation" onChange={(e)=>{setid(room._id);setname(room.name);setdate(e.target.value)}}></input>
//                   </td>
//                   <td width="10%" align='centre' className='t'>
//                   <div>{room.location}</div>
//                   </td>
//                   <td width="30%" align='centre' className='tt'>
//                   {room.topology.map(user=>{
//                   return <div>{user}</div>
//                 })}



//                   </td>
//                   <td width="30%">
//                     <div>{room.comments}</div>
//                     <input type="text" className='in' placeholder='enter comments' onChange={(e)=>{setid(room._id);setname(room.name);setcomments(e.target.value)}}></input>
//                   <button onClick={final}>submit</button>
//                   </td>

//                   </tr>

//                 </table>
//               })
//             }
//         </div>
//       );
// }

// export default Home





import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios'

function Home() {

  const [rooms, setrooms] = useState([]);
  const [location, setlocation] = useState();
  const [username, setusername] = useState();
  const [fromdate, setfromdate] = useState();
  const [todate, settodate] = useState();
  const [time, settime] = useState();
  var [count, setcount] = useState(0);
  const [name, setname] = useState();
  const [id, setid] = useState();
  const [i, seti] = useState(0);
  const [comments, setcomments] = useState();
  const [show, setShow] = useState(false);
  const [searchKey, setsearchkey] = useState('')
  const [duplicaterooms, setduplicaterooms] = useState([])


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  useEffect(() => {

    // if(!localStorage.getItem('currentUser'))
    // {
    //  window.location.href="/login"
    // }


    fetch('http://localhost:2000/api/rooms/getallrooms', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json()).then(data => {
      setrooms(data)
      setduplicaterooms(data)
      console.log(data)
    })


    fetch('http://localhost:2000/api/rooms/getallname', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json()).then(data => {

      setrooms(data)
      setduplicaterooms(data);

    })

    

    // fetch('http://localhost:2000/api/rooms/getallroom', {
    //     method: 'get',
    //     headers: { 'Content-Type': 'application/json' }
    //   }).then(response => response.json()).then(data => {

    //     setrooms(data)
    //     setduplicaterooms(data);

    //   })


    // fetch('http://localhost:4003/api/rooms/getallroom', {
    //     method: 'get',
    //     headers: { 'Content-Type': 'application/json' }
    //   }).then(response => response.json()).then(data => {

    //     setrooms(data)
    //     setduplicaterooms(data);

    //   })

    // setTimeout(() => {
    //   fetch('http://localhost:4003/api/rooms/getallroom', {
    //     method: 'get',
    //     headers: { 'Content-Type': 'application/json' }
    //   }).then(response => response.json()).then(data => {

    //     setrooms(data)
    //     setduplicaterooms(data);

    //   })
    // }, 3000);

    //   setTimeout(() => {
    //   fetch('http://localhost:4004/api/rooms/getallname', {
    //     method: 'get',
    //     headers: { 'Content-Type': 'application/json' }
    //   }).then(response => response.json()).then(data => {

    //     setrooms(data)
    //     setduplicaterooms(data);

    //   })
    // }, 3000);


  }, [])


  var j=0;


  useEffect(() => {

    
    setTimeout(() => {
      fetch('http://localhost:2000/api/rooms/getallroom', {
        method: 'get',
        headers: { 'Content-Type': 'application/json' }
      }).then(response => response.json()).then(data => {

        setrooms(data)
        setduplicaterooms(data);

      })
    }, 70000);
    

  }, [])

 





  //   setTimeout(() => {
  //     fetch('http://localhost:4000/api/rooms/getallroom', {
  //   method: 'get',
  //   headers: { 'Content-Type': 'application/json' }
  // }).then(response => response.json()).then(data => {
  //   setrooms(data)
  //   setduplicaterooms(data)

  // })
  //   }, 15000);











  //   setTimeout(() => {
  //     fetch('http://localhost:5000/api/rooms/getallname', {
  //   method: 'get',
  //   headers: { 'Content-Type': 'application/json' }
  // }).then(response => response.json()).then(data => {
  //   setrooms(data)
  //   setduplicaterooms(data)
  //   console.log(data)
  // })
  //   }, 11000);





    // sleep(100000)


  async function final() {
    // setrouter(router)
    const details = {
      id,
      name,
      username,
      fromdate,
      todate,
      time,
      comments
    }
    try {
      const result = (await axios.post('http://localhost:2000/api/rooms/getallrooms', details)).data;
      window.location.href = "/"
    }
    catch (error) {
      console.log(error)

    }

  }

  async function final1() {
    const details = {
      id,
      comments
    }
    try {
      const result = (await axios.post('http://localhost:2000/api/rooms/getallcomments', details)).data;
      window.location.href = "/"
    }
    catch (error) {
      console.log(error)
    }
  }

  function filterBySearch() {

    const temprooms = duplicaterooms.filter(room => room.name.toLowerCase().includes(searchKey.toLowerCase()))
    setrooms(temprooms)

  }
  

 

  return (
    <div>

      <div className='col-md-4 mt-4.7'>
        <input type="text" width="100%" className='form-control' placeholder='search routers' value={searchKey} onChange={(e) => { setsearchkey(e.target.value) }} onKeyUp={filterBySearch} />
      </div>
      <table width="100%">
        <tr>
          <th width="3%">S.No:</th>
          <th width="5%">Device Name</th>
          <th width="10%">Juniper username</th>
          <th width="10%">Fromdate</th>
          <th width="10%">Todate</th>
          <th width="10%">Time</th>
          <th width="10%">Location</th>
          <th width="10%">Device owner</th>
          <th width="50%">Topology</th>
        </tr>
      </table>

      {
        rooms.map(room => {
          return <table width="100%">
            <tr>

              <td className='t' width="3%">{room.S_no}<br />
              </td>
              <td className='t' width="5%">{room.name}<br />
              </td>
              <td width="10%" className='t' align='centre'>
                <div id='onne'>
                  {room.username.map(user => {
                    return <div>{user}</div>
                  })}
                  <input type="text" className='in' placeholder="enter your juniper username" onChange={(e) => { setid(room._id); setname(room.name); setusername(e.target.value) }}></input>
                </div>
              </td>

              <td width="10%" align='centre' className='t'>
                <div id='onne'>
                  {room.fromdate.map(user => {
                    return <div className='t' className='ttt'>{user}</div>
                  })}
                  <input type="text" className='in' placeholder="enter from date" onChange={(e) => { setid(room._id); setname(room.name); setfromdate(e.target.value) }}></input>
                </div>
              </td>


              <td width="10%" align='centre' className='t'>
                <div>
                  {room.todate.map(user => {
                    return <div className='t' className='ttt'>{user}</div>
                  })}
                  <input type="text" className='in' placeholder="enter to date" onChange={(e) => { setid(room._id); setname(room.name); settodate(e.target.value) }}></input>
                </div>
                <div id='one'>
                  <button onClick={final}>submit</button>
                </div>
              </td>



              <td width="10%" align='centre' className='t'>
                <div>
                  {room.comments.map(user => {
                    return <div className='t'>{user}</div>
                  })}
                  <input type="text" className='in' placeholder="enter comments" onChange={(e) => { setid(room._id); setname(room.name); setcomments(e.target.value) }}></input>
                </div>
                <div id='one'>
                  <button onClick={final1}>submit</button>
                </div>
              </td>
              <td width="10%" align='centre' className='t'>
                <div>{room.location}</div>
              </td>
              <td width="10%" align='centre' className='t'>
                <div id='one'>
                  {room.oname.map(user => {
                    return <div className='t'>{user}<br></br></div>
                  })}
                </div>
              </td>
              <td width="50%" align='centre' className='tt'>
                {room.topology.map(user => {
                  return <div>{user}</div>
                })}



              </td>
              {/* <td width="30%">
                    <div>{room.comments}</div>
                    <input type="text" className='in' placeholder='enter comments' onChange={(e)=>{setid(room._id);setname(room.name);setcomments(e.target.value)}}></input>
                    <div>
                  <button onClick={final1}>submit</button>
                  </div>
                  </td> */}

            </tr>

          </table>
        })
      }
    </div>
  );
}

export default Home