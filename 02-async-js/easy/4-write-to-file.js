// Write to a file
/** Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks. */

const fs = require('fs');

fs.appendFile('a.txt',',nice to meet you','utf-8',(err) => {
    if(err) {
        console.log(err);
        return;
    }
})

//Differnce between writeFile and appendFile

/** The main difference between fs.writeFile() and fs.appendFile() is that fs.writeFile() replaces the specified file and its content if it exists, while fs.appendFile() appends the specified content to the end of the specified file .

In other words, if you use fs.writeFile() on an existing file, its content will be replaced with the new data. If you use fs.appendFile() on an existing file, the new data will be added to the end of the file without removing its existing content . */