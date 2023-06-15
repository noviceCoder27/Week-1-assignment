/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    const myPromise = new Promise((myResolve) => {
        setTimeout(() => myResolve('You may continue now'),seconds);
    })
    
    return myPromise.then(value => value);
    
}

async function halt() {
    const value = await sleep(2000);
    console.log(value);
    console.log('hello');
}

halt();