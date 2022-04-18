
const express = require('express');
const minimist = require('minimist');
const app = express();


const args = minimist(process.argv.slice(2));
args['port'];
const port = args.port || 5000;

app.use(function(req,res){
    res.status(404).send('404 NOT FOUND') });

const server = app.listen(port, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%', port))
});

function coinFlip() {
    return Math.random() < 0.5 ? 'heads' : 'tails'
    }

function coinFlips(flips) {
    const result = []
    for(let i = 0; i < flips; i++){
        result[i] = coinFlip();
    }
    return result;}

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
    }}
    

app.use(function (req, res) {
    res.status(404).end('Endpoint does not exist');
    res.type("text/plain")});

app.get('/app/', (req, res) => {
    res.statusCode=200;
    res.statusMessage='OK';
    res.writeHead(res.statusCode, { 'Content-Type': 'text/plain' });
    res.end(res.statusCode + ' ' + res.statusMessage)});

app.get('/app/flips/:number',(req, res) => {
    res.status(200).json({'raw': coinFlips(req.params.number), 'summary': countFlips(coinFlips(req.params.number))});  
    res.type("text/plain")
});

app.get('/app/flip/call/heads', (req, res) => {
    res.status(200).json(flipACoin("heads"));
});

app.get('/app/flip/call/tails', (req, res) => {
    res.status(200).json(flipACoin("tails"));
});

app.get('/app/flip', (req, res) => {
    res.status(200).json({'flip':coinFlip()});
});