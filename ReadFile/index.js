'use strict'

var fs = require("fs")

var data = fs.readFileSync('index.txt')
console.log(data.toString())
console.log("Program Ended")

fs.readFile("input.txt", "utf8", function(err, data){
    if(err) return console.error(err)
    console.log(data.toString())
})

// Process 

const process = require("process")
console.log(process.argv)

let msg = " Hello world from process "
process.stdout.write(msg + '\n')

process.on('beforeExit', (code) => {
    console.log('Process beforeExit event with code: ', code);
  });
  
  process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
  });
  
  console.log('This message is displayed first.');