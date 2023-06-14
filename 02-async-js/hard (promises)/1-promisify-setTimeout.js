/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/



function wait(n) {
    let myPromise = new Promise(myResolve,myReject => {
        setTimeout(() => myResolve('My promise has resolved'),n);
    });
    
    myPromise.then((value)=> console.log(value));
}

/**
 
If myResolve was passed directly as the first argument to setTimeout, like this:

setTimeout(myResolve("I love JavaScript!"), 3000);

Then myResolve would be called immediately, without waiting for the specified delay. This is because when a function is passed as an argument to another function without being wrapped in another function, it is called immediately and its return value is passed as the argument instead.

By wrapping myResolve inside another function, we ensure that it is not called immediately, but rather after the specified delay. The outer function is passed as the first argument to setTimeout, and it will be called after the delay. When it is called, it will in turn call myResolve with the specified value.

 */