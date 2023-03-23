const express = require('express')
const { spawn } = require('child_process');
personn=require('./index2')

const Room = require('./models/room')
const router = express.Router();
const { default: userEvent } = require('@testing-library/user-event');
const app = express()
const port = 33000
console.log('ljnlnlnj');
var output = new Array(23);
for (var i = 0; i < output.length; i++) {
    output[i] = new Array(20);
}
// let person={
//     output:['wait...','wait...','wait...','wait...','wait...','wait...','wait...','wait...','wait...','wait...','wait...','wait...','wait...','wait...','wait...','wait...','wait...','wait...','wait...','wait...','wait...']
// }


personn.person.output=[['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...'],['Wait...']]



var c;

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

var dataToSend;
router.get('/getallroom', async (req, res) => {
    // console.log(output)
    
    var python = spawn('python3', ['ali.py', 'Argo']);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        console.log(dataToSend)
        dataToSend = dataToSend.split('\n')
        while (output[0].length != 0) {
            output[0].pop();
        }
        for (var i = 0; i < dataToSend.length; i++) {
            output[0].push(dataToSend[i])
        }
    })

    var python = spawn('python3', ['ali.py', 'bglr-mx480-a']);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        dataToSend = dataToSend.split('\n')
        while (output[1].length != 0) {
            output[1].pop();
        }
        for (var i = 0; i < dataToSend.length; i++) {
            output[1].push(dataToSend[i])
        }
    })

    var python = spawn('python3', ['ali.py', 'chromia']);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        dataToSend = dataToSend.split('\n')
        while (output[2].length != 0) {
            output[2].pop();
        }
        for (var i = 0; i < dataToSend.length; i++) {
            output[2].push(dataToSend[i])
        }
        console.log(dataToSend)
    })
    var python = spawn('python3', ['ali.py', 'cliff']);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        dataToSend = dataToSend.split('\n')
        while (output[3].length != 0) {
            output[3].pop();
        }
        for (var i = 0; i < dataToSend.length; i++) {
            output[3].push(dataToSend[i])
        }
        console.log(dataToSend)
    })
    var python = spawn('python3', ['ali.py', 'cupcake']);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        dataToSend = dataToSend.split('\n')
        while (output[4].length != 0) {
            output[4].pop();
        }
        for (var i = 0; i < dataToSend.length; i++) {
            output[4].push(dataToSend[i])
        }
        console.log(dataToSend)
    })
    var python = spawn('python3', ['ali.py', 'defensor']);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        dataToSend = dataToSend.split('\n')
        while (output[5].length != 0) {
            output[5].pop();
        }
        for (var i = 0; i < dataToSend.length; i++) {
            output[5].push(dataToSend[i])
        }
        console.log(dataToSend)
    })
    var python = spawn('python3', ['ali.py', 'ernibert']);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        dataToSend = dataToSend.split('\n')
        while (output[6].length != 0) {
            output[6].pop();
        }
        for (var i = 0; i < dataToSend.length; i++) {
            output[6].push(dataToSend[i])
        }
        console.log(dataToSend)
    })
    var python = spawn('python3', ['ali.py', 'freestyle']);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        dataToSend = dataToSend.split('\n')
        while (output[7].length != 0) {
            output[7].pop();
        }
        for (var i = 0; i < dataToSend.length; i++) {
            output[7].push(dataToSend[i])
        }
        console.log(dataToSend)
    })
    var python = spawn('python3', ['ali.py', 'ft-srx4600-02']);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        dataToSend = dataToSend.split('\n')
        while (output[8].length != 0) {
            output[8].pop();
        }
        for (var i = 0; i < dataToSend.length; i++) {
            output[8].push(dataToSend[i])
        }
        console.log(dataToSend)
    })
    var python = spawn('python3', ['ali.py', 'flake']);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        dataToSend = dataToSend.split('\n')
        while (output[9].length != 0) {
            output[9].pop();
        }
        for (var i = 0; i < dataToSend.length; i++) {
            output[9].push(dataToSend[i])
        }
        console.log(dataToSend)
    })
    var python = spawn('python3', ['ali.py', 'hotrod']);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        dataToSend = dataToSend.split('\n')
        while (output[10].length != 0) {
            output[10].pop();
        }
        for (var i = 0; i < dataToSend.length; i++) {
            output[10].push(dataToSend[i])
        }
        console.log(dataToSend)
    })
    var python = spawn('python3', ['ali.py', 'hound']);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        dataToSend = dataToSend.split('\n')
        while (output[11].length != 0) {
            output[11].pop();
        }
        for (var i = 0; i < dataToSend.length; i++) {
            output[11].push(dataToSend[i])
        }
        console.log(dataToSend)
    })
    var python = spawn('python3', ['ali.py', 'huffer']);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        dataToSend = dataToSend.split('\n')
        while (output[12].length != 0) {
            output[12].pop();
        }
        for (var i = 0; i < dataToSend.length; i++) {
            output[12].push(dataToSend[i])
        }
        console.log(dataToSend)
    })
    var python = spawn('python3', ['ali.py', 'intrepid']);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        dataToSend = dataToSend.split('\n')
        while (output[13].length != 0) {
            output[13].pop();
        }
        for (var i = 0; i < dataToSend.length; i++) {
            output[13].push(dataToSend[i])
        }
        console.log(dataToSend)
    })
    var python = spawn('python3', ['ali.py', 'motoroi']);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        dataToSend = dataToSend.split('\n')
        while (output[14].length != 0) {
            output[14].pop();
        }
        for (var i = 0; i < dataToSend.length; i++) {
            output[14].push(dataToSend[i])
        }
        console.log(dataToSend)
    })
    var python = spawn('python3', ['ali.py', 'omnia']);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        dataToSend = dataToSend.split('\n')
        while (output[15].length != 0) {
            output[15].pop();
        }
        for (var i = 0; i < dataToSend.length; i++) {
            output[15].push(dataToSend[i])
        }
        console.log(dataToSend)
    })
    var python = spawn('python3', ['ali.py', 'rambler']);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        dataToSend = dataToSend.split('\n')
        while (output[16].length != 0) {
            output[16].pop();
        }
        for (var i = 0; i < dataToSend.length; i++) {
            output[16].push(dataToSend[i])
        }
        console.log(dataToSend)
    })
    var python = spawn('python3', ['ali.py', 'skylynx']);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        dataToSend = dataToSend.split('\n')
        while (output[17].length != 0) {
            output[17].pop();
        }
        for (var i = 0; i < dataToSend.length; i++) {
            output[17].push(dataToSend[i])
        }
        console.log(dataToSend)
    })
    var python = spawn('python3', ['ali.py', 'toddy']);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        dataToSend = dataToSend.split('\n')
        while (output[18].length != 0) {
            output[18].pop();
        }
        for (var i = 0; i < dataToSend.length; i++) {
            output[18].push(dataToSend[i])
        }
        console.log(dataToSend)
    })
    var python = spawn('python3', ['ali.py', 'vakai']);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        dataToSend = dataToSend.split('\n')
        while (output[19].length != 0) {
            output[19].pop();
        }
        for (var i = 0; i < dataToSend.length; i++) {
            output[19].push(dataToSend[i])
        }
        console.log(dataToSend)
    })
    var python = spawn('python3', ['ali.py', 'viserion']);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        dataToSend = dataToSend.split('\n')
        while (output[20].length != 0) {
            output[20].pop();
        }
        for (var i = 0; i < dataToSend.length; i++) {
            output[20].push(dataToSend[i])
        }
        console.log(dataToSend)
    })



    

    // var python = spawn('python3', ['ali.py', 'bglr-mx480-a']);
    // python.stdout.on('data', function (data) {
    //     console.log('Pipe data from python script ...');
    //     dataToSend = data.toString();
    //     dataToSend = dataToSend.split('\n')
    //     while (output[1].length != 0) {
    //         output[1].pop();
    //     }
    //     for (var i = 0; i < dataToSend.length; i++) {
    //         output[1].push(dataToSend[i])
    //     }
    // });
    // var python = spawn('python3', ['ali.py', 'chromia']);
    // python.stdout.on('data', function (data) {
    //     console.log('Pipe data from python script ...');
    //     dataToSend = data.toString();
    //     dataToSend = dataToSend.split('\n')
    //     while (output[2].length != 0) {
    //         output[2].pop();
    //     }
    //     for (var i = 0; i < dataToSend.length; i++) {
    //         output[2].push(dataToSend[i])
    //     }
    // });
    // var python = spawn('python3', ['ali.py', 'cliff']);
    // python.stdout.on('data', function (data) {
    //     console.log('Pipe data from python script ...');
    //     dataToSend = data.toString();
    //     dataToSend = dataToSend.split('\n')
    //     while (output[3].length != 0) {
    //         output[3].pop();
    //     }
    //     for (var i = 0; i < dataToSend.length; i++) {
    //         output[3].push(dataToSend[i])
    //     }
    // });
    // var python = spawn('python3', ['ali.py', 'cupcake']);
    // python.stdout.on('data', function (data) {
    //     console.log('Pipe data from python script ...');
    //     dataToSend = data.toString();
    //     dataToSend = dataToSend.split('\n')
    //     while (output[4].length != 0) {
    //         output[4].pop();
    //     }
    //     for (var i = 0; i < dataToSend.length; i++) {
    //         output[4].push(dataToSend[i])
    //     }
    // });
    // var python = spawn('python3', ['ali.py', 'defensor']);
    // python.stdout.on('data', function (data) {
    //     console.log('Pipe data from python script ...');
    //     dataToSend = data.toString();
    //     dataToSend = dataToSend.split('\n')
    //     while (output[5].length != 0) {
    //         output[5].pop();
    //     }
    //     for (var i = 0; i < dataToSend.length; i++) {
    //         output[5].push(dataToSend[i])
    //     }
    // });
    // var python = spawn('python3', ['ali.py', 'ernibert']);
    // python.stdout.on('data', function (data) {
    //     console.log('Pipe data from python script ...');
    //     dataToSend = data.toString();
    //     dataToSend = dataToSend.split('\n')
    //     while (output[6].length != 0) {
    //         output[6].pop();
    //     }
    //     for (var i = 0; i < dataToSend.length; i++) {
    //         output[6].push(dataToSend[i])
    //     }
    // });
    // var python = spawn('python3', ['ali.py', 'freestyle']);
    // python.stdout.on('data', function (data) {
    //     console.log('Pipe data from python script ...');
    //     dataToSend = data.toString();
    //     dataToSend = dataToSend.split('\n')
    //     while (output[7].length != 0) {
    //         output[7].pop();
    //     }

    //     for (var i = 0; i < dataToSend.length; i++) {
    //         output[7].push(dataToSend[i])
    //     }
    // });
    // var python = spawn('python3', ['ali.py', 'ft-srx4600-02']);
    // python.stdout.on('data', function (data) {
    //     console.log('Pipe data from python script ...');
    //     dataToSend = data.toString();
    //     dataToSend = dataToSend.split('\n')
    //     while (output[8].length != 0) {
    //         output[8].pop();
    //     }

    //     for (var i = 0; i < dataToSend.length; i++) {
    //         output[8].push(dataToSend[i])
    //     }
    // });
    // var python = spawn('python3', ['ali.py', 'flake']);
    // python.stdout.on('data', function (data) {
    //     console.log('Pipe data from python script ...');
    //     dataToSend = data.toString();
    //     dataToSend = dataToSend.split('\n')
    //     while (output[9].length != 0) {
    //         output[9].pop();
    //     }

    //     for (var i = 0; i < dataToSend.length; i++) {
    //         output[9].push(dataToSend[i])
    //     }
    // });
    // var python = spawn('python3', ['ali.py', 'hotrod']);
    // python.stdout.on('data', function (data) {
    //     console.log('Pipe data from python script ...');
    //     dataToSend = data.toString();
    //     dataToSend = dataToSend.split('\n')
    //     while (output[9].length != 0) {
    //         output[10].pop();
    //     }

    //     for (var i = 0; i < dataToSend.length; i++) {
    //         output[10].push(dataToSend[i])
    //     }
    // });
    // var python = spawn('python3', ['ali.py', 'hound']);
    // python.stdout.on('data', function (data) {
    //     console.log('Pipe data from python script ...');
    //     dataToSend = data.toString();
    //     dataToSend = dataToSend.split('\n')
    //     while (output[11].length != 0) {
    //         output[11].pop();
    //     }
    //     for (var i = 0; i < dataToSend.length; i++) {
    //         output[11].push(dataToSend[i])
    //     }
    // });
    // var python = spawn('python3', ['ali.py', 'huffer']);
    // python.stdout.on('data', function (data) {
    //     console.log('Pipe data from python script ...');
    //     dataToSend = data.toString();
    //     dataToSend = dataToSend.split('\n')
    //     while (output[12].length != 0) {
    //         output[12].pop();
    //     }
    //     for (var i = 0; i < dataToSend.length; i++) {
    //         output[12].push(dataToSend[i])
    //     }
    // });
    // var python = spawn('python3', ['ali.py', 'intrepid']);
    // python.stdout.on('data', function (data) {
    //     console.log('Pipe data from python script ...');
    //     dataToSend = data.toString();
    //     dataToSend = dataToSend.split('\n')
    //     while (output[13].length != 0) {
    //         output[13].pop();
    //     }
    //     for (var i = 0; i < dataToSend.length; i++) {
    //         output[13].push(dataToSend[i])
    //     }
    // });
    // var python = spawn('python3', ['ali.py', 'motoroi']);
    // python.stdout.on('data', function (data) {
    //     console.log('Pipe data from python script ...');
    //     dataToSend = data.toString();
    //     dataToSend = dataToSend.split('\n')
    //     while (output[14].length != 0) {
    //         output[14].pop();
    //     }
    //     for (var i = 0; i < dataToSend.length; i++) {
    //         output[14].push(dataToSend[i])
    //     }
    // });
    // var python = spawn('python3', ['ali.py', 'omnia']);
    // python.stdout.on('data', function (data) {
    //     console.log('Pipe data from python script ...');
    //     dataToSend = data.toString();
    //     dataToSend = dataToSend.split('\n')
    //     while (output[15].length != 0) {
    //         output[15].pop();
    //     }
    //     for (var i = 0; i < dataToSend.length; i++) {
    //         output[15].push(dataToSend[i])
    //     }
    // });
    // var python = spawn('python3', ['ali.py', 'rambler']);
    // python.stdout.on('data', function (data) {
    //     console.log('Pipe data from python script ...');
    //     dataToSend = data.toString();
    //     dataToSend = dataToSend.split('\n')
    //     while (output[16].length != 0) {
    //         output[16].pop();
    //     }
    //     for (var i = 0; i < dataToSend.length; i++) {
    //         output[16].push(dataToSend[i])
    //     }
    // });
    // var python = spawn('python3', ['ali.py', 'skylynx']);
    // python.stdout.on('data', function (data) {
    //     console.log('Pipe data from python script ...');
    //     dataToSend = data.toString();
    //     dataToSend = dataToSend.split('\n')
    //     while (output[17].length != 0) {
    //         output[17].pop();
    //     }
    //     for (var i = 0; i < dataToSend.length; i++) {
    //         output[17].push(dataToSend[i])
    //     }
    // });
    // var python = spawn('python3', ['ali.py', 'toddy']);
    // python.stdout.on('data', function (data) {
    //     console.log('Pipe data from python script ...');
    //     dataToSend = data.toString();
    //     dataToSend = dataToSend.split('\n')
    //     while (output[18].length != 0) {
    //         output[18].pop();
    //     }
    //     for (var i = 0; i < dataToSend.length; i++) {
    //         output[18].push(dataToSend[i])
    //     }
    // });
    // var python = spawn('python3', ['ali.py', 'vakai']);
    // python.stdout.on('data', function (data) {
    //     console.log('Pipe data from python script ...');
    //     dataToSend = data.toString();
    //     dataToSend = dataToSend.split('\n')
    //     while (output[19].length != 0) {
    //         output[19].pop();
    //     }
    //     for (var i = 0; i < dataToSend.length; i++) {
    //         output[19].push(dataToSend[i])
    //     }
    // });
    // var python = spawn('python3', ['ali.py', 'viserion']);
    // python.stdout.on('data', function (data) {
    //     console.log('Pipe data from python script ...');
    //     dataToSend = data.toString();
    //     dataToSend = dataToSend.split('\n')
    //     while (output[20].length != 0) {
    //         output[20].pop();
    //     }
    //     for (var i = 0; i < dataToSend.length; i++) {
    //         output[20].push(dataToSend[i])
    //     }
    // });

    // var python = spawn('python3', ['ali.py', 'chromia']);
    // python.stdout.on('data', function (data) {
    //     console.log('Pipe data from python script ...');
    //     dataToSend = data.toString();
    //     dataToSend = dataToSend.split('\n')
    //     while (output[21].length != 0) {
    //         output[21].pop();
    //     }
    //     for (var i = 0; i < dataToSend.length; i++) {
    //         output[21].push(dataToSend[i])
    //     }
    // });




    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
    });




    // console.log(output)


    try {
        const rooms = await Room.find({});
        for (var i = 0; i < rooms.length; i++) {
            while(rooms[i].oname.length!=0)
            {
                rooms[i].oname.pop();
            }
            for( var j=0;j<personn.person.output[i].length;j++)
            {
            rooms[i].oname.push(personn.person.output[i][j]);
            }
            while (rooms[i].topology.length != 0) {
                rooms[i].topology.pop()
            }

            for (var j = 0; j < output[i].length; j++) {

                rooms[i].topology.push(output[i][j])
            }
            await rooms[i].save()

        }
        // await rooms.save()
        res.send(rooms)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});







app.listen(port, () => console.log(`Example app listening on port 
${port}!`))
module.exports = router





