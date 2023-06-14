// File cleaner
//Read a file, remove all the extra spaces and write it back to the same file.

/** 
For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman

```
*/

const fs = require('fs');

function removeSpaces(str) {
    const stringArr = str.trim("").split(" ");
    const newStrArr = [];
    for(let i = '0'; i< stringArr.length;i++) {
        if(stringArr[i] === "") {
            if(i > 0 && stringArr[i-1] !== "") {
                newStrArr.push(" ");
            }
        } else {
            newStrArr.push(stringArr[i]);
        }
        
    }
    return newStrArr.join("");
}




fs.readFile('a.txt','utf-8', (err,data) => {
    if(err) {
        console.log(err);
    }
    if(data) {
        const reqdStr = removeSpaces(data);
        console.log(reqdStr)
    }
    
})