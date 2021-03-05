const path = require("path");
const fs = require("fs");
const request = require("request-promise");
const extensionArr = [];

request("https://reddit.com/r/popular.json", function (error, response, body) {
    if(error) {
        console.log(error);
    }

    JSON.parse(body).data.children.forEach(item => {
        let extObj = {
            title: item.data.title,
            thumbnail: item.data.thumbnail
        }

        // path.extname

        // if(extObj.thumbnail === ".jpg" || extObj.thumbnail === ".png" || extObj.thumbnail === ".gif") {
           if(path.extname(extObj.thumbnail) === ".png" || path.extname(extObj.thumbnail) === ".jpg" || path.extname(extObj.thumbnail) === ".gif") {
        // if((path.c() === ".jpg") || 
            // (path.extname() === ".gif") || 
        //     (path.extname() === ".png")) {
        // if((path.extname() === ".jpg") || 
        //     (path.extname() === ".gif") || 
        //     (path.extname() === ".png")) {
        //     console.log(item.data.thumbnail)
            extensionArr.push(extObj);
           
        // } else {
        //     extensionArr.push(item.data.thumbnail);
        }
    });
    
    fs.writeFileSync("./downloads/popular-downloader.json", JSON.stringify(extensionArr), (err) => console.log(err)); 
});



