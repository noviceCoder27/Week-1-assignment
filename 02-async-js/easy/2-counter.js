// Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


function counter(timer) {
    
    setTimeout(() => {
        timer +=1;
        counter(timer);
    },1000)
}

counter(0);





































































// (Hint: setTimeout)