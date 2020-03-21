// Demo how to import in the worker
import _ from 'lodash'

// Function to simulate a long work
// and demo the use of async / await in a worker
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

addEventListener("message", async event => {
    let sleepTime = event.data.message.sleep
    let arrayToReverse = event.data.message.array
    // Sleep
    await sleep(sleepTime);
    // Reverse
    let reversedArray = _.reverse(arrayToReverse)
    // Send the reversed array
    postMessage(reversedArray)
});