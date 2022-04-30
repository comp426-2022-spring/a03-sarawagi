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
    if (flips < 1 || typeof flips == 'undefined') {
      flips = 1;
    }
    for (var i = 0; i < flips; i++) {  
      flipList.push(coinFlip());
    }
    return flipList;
}
   
    
    function countFlips(array) {
    let nt = 0;
    let nh = 0;
    let length = array.length;
    for(let i = 0; i < length; i++){
      if(array[i] == "heads"){
        nh++;
      }
      if(array[i] == "tails"){
        nt++;
      }
    }
     return {heads: h, tails: t};
    }
   
    
    function flipACoin(call) {
    let flip = coinFlip()
    let result = '';
    if (flip == call) {
      result = 'win';
    } else {
      result = 'lose';
    }
    return {call: call, flip: flip, result: result}}

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
    var flips = coinFlips(req.params.number)
    res.status(200).json({ "raw" : flips, "summary" : countFlips(flips)})});

app.get('/app/flip/call/heads', (req, res) => {
    res.status(200).json(flipACoin("heads"))
})


app.get('/app/flip/call/tails', (req, res) => {
    res.status(200).json(flipACoin("tails"))
})

app.use(function(req, res){
  res.status(404).send('404 NOT FOUND')
});
