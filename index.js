const fs = require('fs')

fs.readFile('./files/test.txt', 'utf8', (err,data)=>{
    if(err) throw err
    console.log(data)
})

// error handling
process.on('uncaughtException', err=>{
    console.error(`THERE WAS AN ERROR: ${err}`)
    process.exit(1)
})