// const fs = require("fs")

// fs.writeFile ("messsage.txt", "Hello from node.js!", (err) => {
//     if(err) throw err;
//     console.log("The file has been saved")
// })
const fs = require("fs")

fs.readFile ("./messsage.txt",'utf8', (err,data)=>{
    if(err) throw err;
    console.log(data);
});
   

