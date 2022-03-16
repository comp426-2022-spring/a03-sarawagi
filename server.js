const express = require('express')
const app = express()
const args = require("minimist")(process.argv.slice(2))
args["port"] 
const port = args.port || 5000

app.use(function(req,res){
    res.status(404).send('404 NOT FOUND') });

app.get('/app/', (req, res) => {
// Respond with status 200
    res.statusCode = 200;
// Respond with status message "OK"
    res.statusMessage = 'OK';
    res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
    res.end(res.statusCode+ ' ' +res.statusMessage)});

import{coinFlip, coinFlips, countFlips, flipACoin} from './modules/coin.mjs'
app.get('/app/flip/', (req, res) => {
    const meJson = {"flip" :  coinFlip()}
    const me = JSON.stringify(meJson);
    console.log(me);
    res.end()
});

app.get('/app/flips/:number', (req, res) => {
    const flips = manyflips(req.params.number)
    const result_flips = countFlips(flips);
    const meJson = {"raw" : result_flips,"summary": countFlips(result_flips)}
    const me = JSON.stringify(meJson);
    console.log(me);
    res.end()
});

app.get('/app/flip/call/heads', (req, res) => {
   const meJson = flipACoin("heads");
   const me = JSON.stringify(meJson);
   console.log(me);
    res.end()
});

app.get('/app/flip/call/tails', (req, res) => {
    const meJson = flipACoin("tails");
    const me = JSON.stringify(meJson);
    console.log(me);
     res.end()
 });

const server = app.listen(port, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%', port))});

