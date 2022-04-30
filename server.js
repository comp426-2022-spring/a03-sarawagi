const express = require('express')
const app = express()

const args = require('minimist')(process.argv.slice(2))

args['port']

const port = args['port'] || 5000

const server = app.listen(port, () => {
  console.log("App is running on port %PORT%".replace("%PORT%", port))
});

//coin code
function coinFlip() {
    //return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
    return Math.random() > .5 ? ("heads") : ("tails")
    }
 
    //console.log(coinFlip())
 
    function coinFlips(flips) {
      const result = []
      for(let i = 0; i < flips; i++){
        result[i] = coinFlip();
      }
    return result;
    }
   
    
    function countFlips(array) {
    let nt = 0;
    let nh = 0;
    let length = array.length;
    for(let i = 0; i < length; i++){
      if(array[i] == "heads"){
        nh++;
      }
      else if(array[i] == "tails"){
        nt++;
      }
    }
    return "{ tails: "+ nt +", heads: "+ nh + " }"
    }
   
    
    function flipACoin(call) {
    let flipresult = coinFlip();
    if(flipresult == call){
      return "{ call: '"+call+"', flip: '"+flipresult+"', result: 'win' }"
    }
    else if( flipresult != call){
      return "{ call: '"+call+"', flip: '"+flipresult+"', result: 'lose' }"
    }
    }

app.get('/app/', (req, res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.writeHead(res.statusCode, {'Content-Type' : 'text/plain'});
  res.end(res.statusCode+ ' ' +res.statusMessage)
});

app.get('/app/flip/', (req, res) => {
  res.status(200);
  const ans = coinFlip();
  const flipResult = {"flip" : ans};
  res.json(flipResult);
});

app.get('/app/flips/:number/', (req, res) => {
  res.status(200);
  const flips = req.params.number || 1;
  const values = coinFlips(flips);
  const rawjson = {
      "raw" : values,
      "summary": countFlips(values)
  };
  res.json(rawjson)
});

app.get('/app/flip/call/heads', (req, res) => {
    res.status(200).json(flipACoin("heads"))
})


app.get('/app/flip/call/tails', (req, res) => {
    res.status(200).json(flipACoin("tails"))
})

app.use(function(req, res){
  res.status(404).send('404 NOT FOUND')
});
