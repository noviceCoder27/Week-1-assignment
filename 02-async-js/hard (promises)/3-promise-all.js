/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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

function calculateTime() {
    const startTime = new Date().getSeconds();
    const oneSecond = waitOneSecond();
    const twoSeconds = waitTwoSecond();
    const threeSeconds = waitThreeSecond();
    Promise.all([oneSecond,twoSeconds,threeSeconds]).then((values) => {
        console.log(values);
        const endTime = new Date().getSeconds();
        console.log(endTime - startTime);
    })   
}

calculateTime();


