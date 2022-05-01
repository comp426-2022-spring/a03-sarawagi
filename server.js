const express = require('express')
const app = express()

const args = require('minimist')(process.argv.slice(2))

args['port']
 
const port = args.port || process.nextTick.PORT || 5000
//create a server
const server = app.listen(port, () => {
  console.log("App is running on port %PORT%".replace("%PORT%", port))
});

//coin code
function coinFlip() {
    return Math.random() > .5 ? ("heads") : ("tails")
    }
 
    //console.log(coinFlip())
 
    function coinFlips(flips) {
      var flipList = [];
      for (let i = 0; i < flips; i++) {
        flipList[i] = coinFlip();
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
     return {heads: nh, tails: nt};
    }
   
    
    function flipACoin(call) {
    let flip = coinFlip()
    if (flip == call) {
      result = 'win';
    } else {
      result = 'lose';
    }
    return {"call": call, "flip": flip, "result": result}}

app.get('/app/', (req, res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.writeHead(res.statusCode, {'Content-Type' : 'text/plain'});
  res.end(res.statusCode+ ' ' +res.statusMessage)
});

app.get('/app/flip/', (req, res) => {
 const ans = coinFlip();
 res.status(200).json({'flip' : flip})
});

app.get('/app/flips/:number/', (req, res) => {
    var flips = coinFlips(req.params.number)
    const num = countFlips(flips)
    res.status(200).json({ "raw" : flips, "summary" : num})});

app.get('/app/flip/call/heads', (req, res) => {
    res.status(200).json(flipACoin("heads"))
})

app.get('/app/flip/call/tails', (req, res) => {
    res.status(200).json(flipACoin("tails"))
})

app.use(function(req, res){
  res.status(404).send('404 NOT FOUND')
  res.type("text/plain");
});
