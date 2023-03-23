
const express = require('express')
const {spawn} = require('child_process');
const Room=require('./models/room')
const router=express.Router();
const { default: userEvent } = require('@testing-library/user-event');
const app = express()
const port = 35000
console.log('ljnlnlnj')

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
var i=0;
console.log("reques nummber ",i+1)
let person={
    output:[['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...']]
}

var c;
 
 var dataToSend;

 function hasWhiteSpace(s) 
{
    var reWhiteSpace = new RegExp("/^\s+$/");

    // Check for white space
    if (reWhiteSpace.test(s)) {
        //alert("Please Check Your Fields For Spaces");
        return false;
    }

    return true;
}


function data(){
    // sleep(1000).then(() => {
        var python = spawn('python3', ['ali1.py','argo']);
        python.stdout.on('data', function (data) {
         console.log('Pipe data from python script ...');
         dataToSend = data.toString();
         console.log(dataToSend)
         let split1 = dataToSend.split(/\s+/);
         name = split1[14]
         var i=14;
         if(name!=="running")
         {
             while(person.output[0].length!=0)
               {
                 person.output[0].pop();
               }
            while(i<split1.length-1)
            {
                 
                 person.output[0].push(split1[i]);
                 i=i+11;
            }
         }
            if(split1.length==5)
             {
              person.output[0].push("No users")
             }
             if(split1.length==12)
             {
              person.output[0].push("Please try again")
             }
             if(split1.length==4)
             {
              person.output[0].push("Please try again")
             }
         console.log(split1)
        
        
        })
    // });
    

        sleep(3000).then(() => {
            var python = spawn('python3', ['ali1.py', 'bgllr-mx480-a']);
        python.stdout.on('data', function (data) {
            console.log('Pipe data from python script ...');
            dataToSend = data.toString();
            console.log(dataToSend)
            let split1 = dataToSend.split(/\s+/);
            name = split1[14]
            var i=14;
            if(name!=="running")
            {
                while(person.output[1].length!=0)
                  {
                    person.output[1].pop();
                  }
               while(i<split1.length-1)
               {
                    
                    person.output[1].push(split1[i]);
                    i=i+11;
               }
            }
            if(split1.length==5)
             {
              person.output[1].push("No users")
             }
             if(split1.length==12)
             {
              person.output[1].push("Please try again")
             }
             if(split1.length==4)
             {
              person.output[1].push("Please try again")
             }
            console.log(split1)

            
        })
        });
     
        sleep(6000).then(() => {
            var python = spawn('python3', ['ali1.py', 'chromia']);
        python.stdout.on('data', function (data) {
            console.log('Pipe data from python script ...');
            dataToSend = data.toString();
            console.log(dataToSend)
            let split1 = dataToSend.split(/\s+/);
            name = split1[14]
            var i=14;
            if(name!=="running")
            {
                while(person.output[2].length!=0)
                  {
                    person.output[2].pop();
                  }
               while(i<split1.length-1)
               {
                    
                    person.output[2].push(split1[i]);
                    i=i+11;
               }
            }
            if(split1.length==5)
             {
              person.output[2].push("No users")
             }
             if(split1.length==12)
             {
              person.output[2].push("Please try again")
             }
             if(split1.length==4)
             {
              person.output[2].push("Please try again")
             }
            console.log(split1)
            
        })
        });

        sleep(9000).then(() => {
            var python = spawn('python3', ['ali1.py', 'cliff']);
        python.stdout.on('data', function (data) {
            console.log('Pipe data from python script ...');
            dataToSend = data.toString();
            console.log(dataToSend)
            let split1 = dataToSend.split(/\s+/);
            name = split1[14]
            var i=14;
            if(name!=="running")
            {
                while(person.output[3].length!=0)
                  {
                    person.output[3].pop();
                  }
               while(i<split1.length-1)
               {
                    
                    person.output[3].push(split1[i]);
                    i=i+11;
               }
            }
            if(split1.length==5)
             {
              person.output[3].push("No users")
             }
             if(split1.length==12)
             {
              person.output[3].push("Please try again")
             }
             if(split1.length==4)
             {
              person.output[3].push("Please try again")
             }
            console.log(split1)
        })
        });

        sleep(12000).then(() => {
            var python = spawn('python3', ['ali1.py', 'cupcake']);
        python.stdout.on('data', function (data) {
            console.log('Pipe data from python script ...');
            dataToSend = data.toString();
            console.log(dataToSend)
            let split1 = dataToSend.split(/\s+/);
            name = split1[14]
            var i=14;
            if(name!=="running")
            {
                while(person.output[4].length!=0)
                  {
                    person.output[4].pop();
                  }
               while(i<split1.length-1)
               {
                    
                    person.output[4].push(split1[i]);
                    i=i+11;
               }
            }
            if(split1.length==5)
             {
              person.output[4].push("No users")
             }
             if(split1.length==12)
             {
              person.output[4].push("Please try again")
             }
             if(split1.length==4)
             {
              person.output[4].push("Please try again")
             }
            console.log(split1)
            
        })
        });

        sleep(15000).then(() => {
            var python = spawn('python3', ['ali1.py', 'defensor']);
        python.stdout.on('data', function (data) {
            console.log('Pipe data from python script ...');
            dataToSend = data.toString();
            console.log(dataToSend)
            let split1 = dataToSend.split(/\s+/);
            name = split1[14]
            var i=14;
            if(name!=="running")
            {
                while(person.output[5].length!=0)
                  {
                    person.output[5].pop();
                  }
               while(i<split1.length-1)
               {
                    
                    person.output[5].push(split1[i]);
                    i=i+11;
               }
            }
            if(split1.length==5)
             {
              person.output[5].push("No users")
             }
             if(split1.length==12)
             {
              person.output[5].push("Please try again")
             }
             if(split1.length==4)
             {
              person.output[5].push("Please try again")
             }
            console.log(split1)
            
        })
        });
    
        sleep(18000).then(() => {
            var python = spawn('python3', ['ali1.py', 'ernibert']);
        python.stdout.on('data', function (data) {
            console.log('Pipe data from python script ...');
            dataToSend = data.toString();
            console.log(dataToSend)
            let split1 = dataToSend.split(/\s+/);
            name = split1[14]
            var i=14;
            if(name!=="running")
            {
                while(person.output[6].length!=0)
                  {
                    person.output[6].pop();
                  }
               while(i<split1.length-1)
               {
                    
                    person.output[6].push(split1[i]);
                    i=i+11;
               }
            }
            if(split1.length==5)
             {
              person.output[6].push("No users")
             }
             if(split1.length==12)
             {
              person.output[6].push("Please try again")
             }
             if(split1.length==4)
             {
              person.output[6].push("Please try again")
             }
            console.log(split1)
            
        })
        });
    
        sleep(21000).then(() => {
            var python = spawn('python3', ['ali1.py', 'freestyle']);
        python.stdout.on('data', function (data) {
            console.log('Pipe data from python script ...');
            dataToSend = data.toString();
            console.log(dataToSend)
            let split1 = dataToSend.split(/\s+/);
            name = split1[14]
            var i=14;
            if(name!=="running")
            {
                while(person.output[7].length!=0)
                  {
                    person.output[7].pop();
                  }
               while(i<split1.length-1)
               {
                    
                    person.output[7].push(split1[i]);
                    i=i+11;
               }
            }
            if(split1.length==5)
             {
              person.output[7].push("No users")
             }
             if(split1.length==12)
             {
              person.output[7].push("Please try again")
             }
             if(split1.length==4)
             {
              person.output[7].push("Please try again")
             }
            console.log(split1)
            
        })
        });
    
        sleep(24000).then(() => {
            var python = spawn('python3', ['ali1.py', 'ft-srx4600-02']);
        python.stdout.on('data', function (data) {
            console.log('Pipe data from python script ...');
            dataToSend = data.toString();
            // console.log(dataToSend)
            let split1 = dataToSend.split(/\s+/);
            name = split1[14]
            var i=14;
            if(name!=="running")
            {
                while(person.output[8].length!=0)
                  {
                    person.output[8].pop();
                  }
               while(i<split1.length-1)
               {
                    
                    person.output[8].push(split1[i]);
                    i=i+11;
               }
            }
            if(split1.length==5)
             {
              person.output[8].push("No users")
             }
             if(split1.length==12)
             {
              person.output[8].push("Please try again")
             }
             if(split1.length==4)
             {
              person.output[8].push("Please try again")
             }
            // console.log(split1)
            
        })
        });
    
        sleep(27000).then(() => {
            var python = spawn('python3', ['ali1.py', 'flake']);
        python.stdout.on('data', function (data) {
            console.log('Pipe data from python script ...');
            dataToSend = data.toString();
            // console.log(dataToSend)
            let split1 = dataToSend.split(/\s+/);
            name = split1[14]
            var i=14;
            if(name!=="running")
            {
                while(person.output[9].length!=0)
                  {
                    person.output[9].pop();
                  }
               while(i<split1.length-1)
               {
                    
                    person.output[9].push(split1[i]);
                    i=i+11;
               }
            }
            if(split1.length==5)
             {
              person.output[9].push("No users")
             }
             if(split1.length==12)
             {
              person.output[9].push("Please try again")
             }
             if(split1.length==4)
             {
              person.output[9].push("Please try again")
             }
            // console.log(split1)
            
        })
        });
    
        sleep(30000).then(() => {
            var python = spawn('python3', ['ali1.py', 'hotrod']);
        python.stdout.on('data', function (data) {
            console.log('Pipe data from python script ...');
            dataToSend = data.toString();
            // console.log(dataToSend)
            let split1 = dataToSend.split(/\s+/);
            name = split1[14]
            var i=14;
            if(name!=="running")
            {
                while(person.output[10].length!=0)
                  {
                    person.output[10].pop();
                  }
               while(i<split1.length-1)
               {
                    
                    person.output[10].push(split1[i]);
                    i=i+11;
               }
            }
            if(split1.length==5)
             {
              person.output[10].push("No users")
             }
             if(split1.length==12)
             {
              person.output[10].push("Please try again")
             }
             if(split1.length==4)
             {
              person.output[10].push("Please try again")
             }
            // console.log(split1)
            
        })
        });
    
        sleep(33000).then(() => {
            var python = spawn('python3', ['ali1.py', 'hound']);
        python.stdout.on('data', function (data) {
            console.log('Pipe data from python script ...');
            dataToSend = data.toString();
            // console.log(dataToSend)
            let split1 = dataToSend.split(/\s+/);
            name = split1[14]
            var i=14;
            if(name!=="running")
            {
                while(person.output[11].length!=0)
                  {
                    person.output[11].pop();
                  }
               while(i<split1.length-1)
               {
                    
                    person.output[11].push(split1[i]);
                    i=i+11;
               }
            }
            if(split1.length==5)
             {
              person.output[11].push("No users")
             }
             if(split1.length==12)
             {
              person.output[11].push("Please try again")
             }
             if(split1.length==4)
             {
              person.output[11].push("Please try again")
             }
            // console.log(split1)
            
        })
        });
    
        sleep(36000).then(() => {
            var python = spawn('python3', ['ali1.py', 'huffer']);
        python.stdout.on('data', function (data) {
            console.log('Pipe data from python script ...');
            dataToSend = data.toString();
            // console.log(dataToSend)
            let split1 = dataToSend.split(/\s+/);
            name = split1[14]
            var i=14;
            if(name!=="running")
            {
                while(person.output[12].length!=0)
                  {
                    person.output[12].pop();
                  }
               while(i<split1.length-1)
               {
                    
                    person.output[12].push(split1[i]);
                    i=i+11;
               }
            }
            if(split1.length==5)
             {
              person.output[12].push("No users")
             }
             if(split1.length==12)
             {
              person.output[12].push("Please try again")
             }
             if(split1.length==4)
             {
              person.output[12].push("Please try again")
             }
            // console.log(split1)
            
        })
        });
    
        sleep(39000).then(() => {
            var python = spawn('python3', ['ali1.py', 'intrepid']);
        python.stdout.on('data', function (data) {
            console.log('Pipe data from python script ...');
            dataToSend = data.toString();
            // console.log(dataToSend)
            let split1 = dataToSend.split(/\s+/);
            name = split1[14]
            var i=14;
            if(name!=="running")
            {
                while(person.output[13].length!=0)
                  {
                    person.output[13].pop();
                  }
               while(i<split1.length-1)
               {
                    
                    person.output[13].push(split1[i]);
                    i=i+11;
               }
            }
            if(split1.length==5)
             {
              person.output[13].push("No users")
             }
             if(split1.length==12)
             {
              person.output[13].push("Please try again")
             }
             if(split1.length==4)
             {
              person.output[13].push("Please try again")
             }
            // console.log(split1)
            
        })
        });
    
        sleep(42000).then(() => {
            var python = spawn('python3', ['ali1.py', 'motoroi']);
        python.stdout.on('data', function (data) {
            console.log('Pipe data from python script ...');
            dataToSend = data.toString();
            // console.log(dataToSend)
            let split1 = dataToSend.split(/\s+/);
            name = split1[14]
            var i=14;
            if(name!=="running")
            {
                while(person.output[14].length!=0)
                  {
                    person.output[14].pop();
                  }
               while(i<split1.length-1)
               {
                    
                    person.output[14].push(split1[i]);
                    i=i+11;
               }
            }
            if(split1.length==5)
             {
              person.output[14].push("No users")
             }
             if(split1.length==12)
             {
              person.output[14].push("Please try again")
             }
             if(split1.length==4)
             {
              person.output[14].push("Please try again")
             }
            // console.log(split1)
            
        })
        });
    
        sleep(45000).then(() => {
            var python = spawn('python3', ['ali1.py', 'omnia']);
        python.stdout.on('data', function (data) {
            console.log('Pipe data from python script ...');
            dataToSend = data.toString();
            // console.log(dataToSend)
            let split1 = dataToSend.split(/\s+/);
            name = split1[14]
            var i=14;
            if(name!=="running")
            {
                while(person.output[15].length!=0)
                  {
                    person.output[15].pop();
                  }
               while(i<split1.length-1)
               {
                    
                    person.output[15].push(split1[i]);
                    i=i+11;
               }
            }
            if(split1.length==5)
             {
              person.output[15].push("No users")
             }
             if(split1.length==12)
             {
              person.output[15].push("Please try again")
             }
             if(split1.length==4)
             {
              person.output[15].push("Please try again")
             }
            // console.log(split1)
            
        })
        });
    
        sleep(48000).then(() => {
            var python = spawn('python3', ['ali1.py', 'rambler']);
        python.stdout.on('data', function (data) {
            console.log('Pipe data from python script ...');
            dataToSend = data.toString();
            // console.log(dataToSend)
            let split1 = dataToSend.split(/\s+/);
            name = split1[14]
            var i=14;
            if(name!=="running")
            {
                while(person.output[16].length!=0)
                  {
                    person.output[16].pop();
                  }
               while(i<split1.length-1)
               {
                    
                    person.output[16].push(split1[i]);
                    i=i+11;
               }
            }
            if(split1.length==5)
             {
              person.output[16].push("No users")
             }
             if(split1.length==12)
             {
              person.output[16].push("Please try again")
             }
             if(split1.length==4)
             {
              person.output[16].push("Please try again")
             }
            // console.log(split1)
            
        })
        });
    
        sleep(51000).then(() => {
            var python = spawn('python3', ['ali1.py', 'skylynx']);
        python.stdout.on('data', function (data) {
            console.log('Pipe data from python script ...');
            dataToSend = data.toString();
            // console.log(dataToSend)
            let split1 = dataToSend.split(/\s+/);
            name = split1[14]
            var i=14;
            if(name!=="running")
            {
                while(person.output[17].length!=0)
                  {
                    person.output[17].pop();
                  }
               while(i<split1.length-1)
               {
                    
                    person.output[17].push(split1[i]);
                    i=i+11;
               }
            }
            console.log(split1)
            if(split1.length==5)
             {
              person.output[17].push("No users")
             }
             if(split1.length==12)
             {
              person.output[17].push("Please try again")
             }
             if(split1.length==4)
             {
              person.output[17].push("Please try again")
             }
            
        })
        });
    
        sleep(54000).then(() => {
            var python = spawn('python3', ['ali1.py', 'toddy']);
        python.stdout.on('data', function (data) {
            console.log('Pipe data from python script ...');
            dataToSend = data.toString();
            // console.log(dataToSend)
            let split1 = dataToSend.split(/\s+/);
            name = split1[14]
            var i=14;
            if(name!=="running")
            {
                while(person.output[18].length!=0)
                  {
                    person.output[18].pop();
                  }
               while(i<split1.length-1)
               {
                    
                    person.output[18].push(split1[i]);
                    i=i+11;
               }
            }
            if(split1.length==5)
             {
              person.output[18].push("No users")
             }
             if(split1.length==12)
             {
              person.output[18].push("Please try again")
             }
             if(split1.length==4)
             {
              person.output[18].push("Please try again")
             }
            // console.log(split1)
            
        })
        });
    
        sleep(57000).then(() => {
            var python = spawn('python3', ['ali1.py', 'vakai']);
        python.stdout.on('data', function (data) {
            console.log('Pipe data from python script ...');
            dataToSend = data.toString();
            console.log(dataToSend)
            let split1 = dataToSend.split(/\s+/);
            name = split1[14]
            var i=14;
            if(name!=="running")
            {
                while(person.output[19].length!=0)
                  {
                    person.output[19].pop();
                  }
               while(i<split1.length-1)
               {
                    
                    person.output[19].push(split1[i]);
                    i=i+11;
               }
            }
            if(split1.length==5)
             {
              person.output[19].push("No users")
             }
             if(split1.length==12)
             {
              person.output[19].push("Please try again")
             }
             if(split1.length==4)
             {
              person.output[19].push("Please try again")
             }
            // console.log(split1)
            
        })
        });

        sleep(60000).then(() => {
          var python = spawn('python3', ['ali1.py', 'viserion']);
      python.stdout.on('data', function (data) {
          console.log('Pipe data from python script ...');
          dataToSend = data.toString();
          console.log(dataToSend)
          let split1 = dataToSend.split(/\s+/);
          name = split1[14]
          var i=14;
          if(name!=="running")
          {
              while(person.output[20].length!=0)
                {
                  person.output[20].pop();
                }
             while(i<split1.length-1)
             {
                  
                  person.output[20].push(split1[i]);
                  i=i+11;
             }
             if(split1.length==5)
             {
              person.output[20].push("No users")
             }
             if(split1.length==12)
             {
              person.output[20].push("Please try again")
             }
             if(split1.length==4)
             {
              person.output[20].push("Please try again")
             }
             
          }
          // console.log(split1)
          
      })
      });
}


  
    
   
        
        

        
    // setTimeout(() => {
    //     var python = spawn('python3', ['ali1.py','hotrod']);
    //     python.stdout.on('data', function (data) {
    //      console.log('Pipe data from python script ...');
    //      dataToSend = data.toString();
    //      console.log(dataToSend)
    //     let split1 = dataToSend.split(/\s+/);
    //     name=split1[14]
    //     person.output[2]=name;
    
        
    //     })
    // }, 5000);
    // setTimeout(() => {
    //     var python = spawn('python3', ['ali1.py','toddy']);
    //     python.stdout.on('data', function (data) {
    //      console.log('Pipe data from python script ...');
    //      dataToSend = data.toString();
    //      console.log(dataToSend)
    //     let split1 = dataToSend.split(/\s+/);
    //     name=split1[14]
    //     person.output[3]=name;
    
        
    //     })
    // }, 7000);
    // setTimeout(() => {
    //     var python = spawn('python3', ['ali1.py','cliff']);
    //     python.stdout.on('data', function (data) {
    //      console.log('Pipe data from python script ...');
    //      dataToSend = data.toString();
    //      console.log(dataToSend)
    //     let split1 = dataToSend.split(/\s+/);
    //     name=split1[14]
    //     person.output[4]=name;
    
        
    //     })
    // }, 9000);
    // setTimeout(() => {
    //     var python = spawn('python3', ['ali1.py','skylynx']);
    //     python.stdout.on('data', function (data) {
    //      console.log('Pipe data from python script ...');
    //      dataToSend = data.toString();
    //      console.log(dataToSend)
    //     let split1 = dataToSend.split(/\s+/);
    //     name=split1[14]
    //     person.output[5]=name;
    
        
    //     })
    // }, 11000);
    // setTimeout(() => {
    //     var python = spawn('python3', ['ali1.py','defensor']);
    //     python.stdout.on('data', function (data) {
    //      console.log('Pipe data from python script ...');
    //      dataToSend = data.toString();
    //      console.log(dataToSend)
    //     let split1 = dataToSend.split(/\s+/);
    //     name=split1[14]
    //     person.output[6]=name;
    
        
    //     })
    // }, 13000);
    // setTimeout(() => {
    //     var python = spawn('python3', ['ali1.py','Hound']);
    //     python.stdout.on('data', function (data) {
    //      console.log('Pipe data from python script ...');
    //      dataToSend = data.toString();
    //      console.log(dataToSend)
    //     let split1 = dataToSend.split(/\s+/);
    //     name=split1[14]
    //     person.output[7]=name;
    
        
    //     })
    // }, 15000);
    // setTimeout(() => {
    //     var python = spawn('python3', ['ali1.py','bglr-mx480-a']);
    //     python.stdout.on('data', function (data) {
    //      console.log('Pipe data from python script ...');
    //      dataToSend = data.toString();
    //      console.log(dataToSend)
    //     let split1 = dataToSend.split(/\s+/);
    //     name=split1[14]
    //     person.output[8]=name;
    
        
    //     })
    // }, 16000);
    // setTimeout(() => {
    //     var python = spawn('python3', ['ali1.py','huffer']);
    //     python.stdout.on('data', function (data) {
    //      console.log('Pipe data from python script ...');
    //      dataToSend = data.toString();
    //      console.log(dataToSend)
    //     let split1 = dataToSend.split(/\s+/);
    //     name=split1[14]
    //     person.output[9]=name;
    
        
    //     })
    // }, 18000);
    // setTimeout(() => {
    //     var python = spawn('python3', ['ali1.py','omnia']);
    //     python.stdout.on('data', function (data) {
    //      console.log('Pipe data from python script ...');
    //      dataToSend = data.toString();
    //      console.log(dataToSend)
    //     let split1 = dataToSend.split(/\s+/);
    //     name=split1[14]
    //     person.output[10]=name;
    
        
    //     })
    // }, 20000);
    // setTimeout(() => {
    //     var python = spawn('python3', ['ali1.py','argo']);
    //     python.stdout.on('data', function (data) {
    //      console.log('Pipe data from python script ...');
    //      dataToSend = data.toString();
    //      console.log(dataToSend)
    //     let split1 = dataToSend.split(/\s+/);
    //     name=split1[14]
    //     person.output[11]=name;
    
        
    //     })
    // }, 22000);
    // setTimeout(() => {
    //     var python = spawn('python3', ['ali1.py','rambler']);
    //     python.stdout.on('data', function (data) {
    //      console.log('Pipe data from python script ...');
    //      dataToSend = data.toString();
    //      console.log(dataToSend)
    //     let split1 = dataToSend.split(/\s+/);
    //     name=split1[14]
    //     person.output[12]=name;
    
        
    //     })
    // }, 24000);
    // setTimeout(() => {
    //     var python = spawn('python3', ['ali1.py','viserion']);
    //     python.stdout.on('data', function (data) {
    //      console.log('Pipe data from python script ...');
    //      dataToSend = data.toString();
    //      console.log(dataToSend)
    //     let split1 = dataToSend.split(/\s+/);
    //     name=split1[14]
    //     person.output[13]=name;
    
        
    //     })
    // }, 26000);
    // setTimeout(() => {
    //     var python = spawn('python3', ['ali1.py','intrepid']);
    //     python.stdout.on('data', function (data) {
    //      console.log('Pipe data from python script ...');
    //      dataToSend = data.toString();
    //      console.log(dataToSend)
    //     let split1 = dataToSend.split(/\s+/);
    //     name=split1[14]
    //     person.output[14]=name;
    
        
    //     })
    // }, 28000);
    // setTimeout(() => {
    //     var python = spawn('python3', ['ali1.py','motoroi']);
    //     python.stdout.on('data', function (data) {
    //      console.log('Pipe data from python script ...');
    //      dataToSend = data.toString();
    //      console.log(dataToSend)
    //     let split1 = dataToSend.split(/\s+/);
    //     name=split1[14]
    //     person.output[15]=name;
    
        
    //     })
    // }, 30000);
    // setTimeout(() => {
    //     var python = spawn('python3', ['ali1.py','freestyle']);
    //     python.stdout.on('data', function (data) {
    //      console.log('Pipe data from python script ...');
    //      dataToSend = data.toString();
    //      console.log(dataToSend)
    //     let split1 = dataToSend.split(/\s+/);
    //     name=split1[14]
    //     person.output[16]=name;
    
        
    //     })
    // }, 32000);
    // setTimeout(() => {
    //     var python = spawn('python3', ['ali1.py','ft-srx4600-02']);
    //     python.stdout.on('data', function (data) {
    //      console.log('Pipe data from python script ...');
    //      dataToSend = data.toString();
    //      console.log(dataToSend)
    //     let split1 = dataToSend.split(/\s+/);
    //     name=split1[14]
    //     person.output[17]=name;
    
        
    //     })
    // }, 36000);
    // setTimeout(() => {
    //     var python = spawn('python3', ['ali1.py','flake']);
    //     python.stdout.on('data', function (data) {
    //      console.log('Pipe data from python script ...');
    //      dataToSend = data.toString();
    //      console.log(dataToSend)
    //     let split1 = dataToSend.split(/\s+/);
    //     name=split1[14]
    //     person.output[18]=name;
    
        
    //     })
    // }, 38000);
    // setTimeout(() => {
    //     var python = spawn('python3', ['ali1.py','cupcake']);
    //     python.stdout.on('data', function (data) {
    //      console.log('Pipe data from python script ...');
    //      dataToSend = data.toString();
    //      console.log(dataToSend)
    //     let split1 = dataToSend.split(/\s+/);
    //     name=split1[14]
    //     person.output[19]=name;
    
        
    //     })
    // }, 40000);
    
        
    


    
       

    
    
    
    
    // setTimeout(() => {
    //     var python = spawn('python3', ['ali1.py','chromia']);
    // python.stdout.on('data', function (data) {
    //  console.log('Pipe data from python script ...');
    //  dataToSend = data.toString();
    //  console.log(dataToSend)

    // let split1 = dataToSend.split(/\s+/);
    // name=split1[14]
    // person.output[1]=name;
    // })
    // }, 3000);;
    
    

  
  
//    python.on('close', (code) => {
//    console.log(`child process close all stdio with code ${code}`);
//    });
  
  
   
  
  
      // router.get('/getallroom',async(req,res)=>{
          // res.header('Access-Control-Allow-Origin', "*");
          // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
          // res.header('Access-Control-Allow-Headers', 'Content-Type');
       
          router.get('/getallname',async(req,res)=>{
          data()
          console.log(person.output)
         try{
          const rooms=await Room.find({});
          for(var i=0;i<rooms.length;i++)
          {
              rooms[i].oname=person.output[i]
              if(person.output[i]=="Wait..."||person.output[i]=="")
              {
                rooms[i].oname="Please try again"
              }
              if(person.output[i]!="No users")
              {
                     if(hasWhiteSpace(person.output[i]))
                     {
                      rooms[i].oname="Please try again"
                     }
              }
              await rooms[i].save();
          }
          // await rooms.save()
          res.send(rooms)
         }catch(error){
          return res.status(400).json({message:error});
         }
      });
  
  
      
   
  
   
  
  app.listen(port, () => console.log(`Example app listening on port 
  ${port}!`))
//  }, 20000);

let ob={
    router,
    person
}


module.exports=ob

