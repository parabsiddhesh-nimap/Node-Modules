const path = require("path");
const os = require("os");
const fs = require("fs");


//Path Modules practice
let pathObj = path.parse(__filename);
let pathDrive = pathObj.root;
let pathName = pathObj.name;
let pathDirectory = pathObj.dir;
let fileExtension = pathObj.ext;
let ParentFolder = pathDirectory.split(path.sep);
ParentFolder = ParentFolder[ParentFolder.length-1]

// console.log(pathObj)
console.log(`{
    "File Path Details" 
    Drive : ${pathDrive}
    PathName : ${pathName},
    pathDirectory : ${pathDirectory},
    fileExtension : ${fileExtension},
    ParentFolder : ${ParentFolder}
}`)



//OS Module Practice
// let userPlatform = os.platform();
// let totalMemory = os.totalmem();
// let FreeMemory = os.freemem();
// let couInfo = os.cpus();
// let homedir = os.homedir();
// let hostName = os.hostname();
// let machine = os.machine()
// let tmpdir = os.tmpdir()
// let networkInterfaces = os.networkInterfaces()

console.log(`{
    "OS MODULE" 
    userPlatform : ${os.platform()},
    totalMemory : ${os.totalmem()},
    FreeMemory : ${os.freemem()},
    UsedMemory : ${os.totalmem()-os.freemem()},
    Homedir : ${os.homedir()},
    HostName : ${os.hostname()},
    machine : ${os.machine()}, 
    tmpdir : ${os.tmpdir()}, 
    type : ${os.type()},
    version : ${os.version()}   
}`)


//FS Module
fs.readdir('./node_modules',(err,file) => {
    if(err) console.log(err);
    console.log(file)
});


