/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads|tails
 * 
 */

function coinFlip() {
//return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
return Math.random() > .5 ? ("heads") : ("tails")
}

export{ coinFlip }
//console.log(coinFlip())
/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

function coinFlips(flips) {
  const result = []
  for(let i = 0; i < flips; i++){
    result[i] = coinFlip();
  }
return result;
}
//.log(coinFlips())
export { coinFlips }
/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

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
//console.log(countFlips());
export{ countFlips }
/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

function flipACoin(call) {
let flipresult = coinFlip();
if(flipresult == call){
  return "{ call: '"+call+"', flip: '"+flipresult+"', result: 'win' }"
}
else if( flipresult != call){
  return "{ call: '"+call+"', flip: '"+flipresult+"', result: 'lose' }"
}
}
//console.log(flipACoin());
export{ flipACoin }
/** Export 
 * 
 * Export all of your named functions
*/
