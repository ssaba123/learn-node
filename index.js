const fs = require('fs')

fs.readFile('./files/test.txt', (err,data)=>{
    if(err) throw err
    console.log(data.toString())
})