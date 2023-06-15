/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    const promise = new Promise(resolve => {
        setTimeout(() => resolve('Promise1'),1000);
    })
    return promise.then(value => value);
}

function waitTwoSecond() {
    const promise = new Promise(resolve => {
        setTimeout(() => resolve('Promise2'),2000);
    })
   return promise.then(value => value);
}

function waitThreeSecond() {
    const promise = new Promise(resolve => {
        setTimeout(() => resolve('Promise3'),3000);
    })
    return promise.then(value => value);
}

async function callInOrder(startTime) {
    await waitOneSecond();
    await waitTwoSecond();
    await waitThreeSecond();
    const endTime = new Date().getSeconds();
    console.log(endTime - startTime);
}

function calculateTime() {
    const startTime = new Date().getSeconds();
    callInOrder(startTime);
   
}

calculateTime();