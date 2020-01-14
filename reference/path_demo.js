const path = require('path');

//Base file name
console.log("basenamet :",path.basename(__filename));

//Directory name
console.log("dirname :",path.dirname(__filename));

//File extension
console.log("extname :",path.extname(__filename));

//Create path object
console.log("parse :",path.parse(__filename));
console.log("parse.base :",path.parse(__filename).base);

//Concatenate paths
console.log("join :",path.join(__dirname,'test','hello.html'));