const path = require("path");
const fs = require("fs");
const request = require("request-promise");
const extensionArr = [];

request("https://reddit.com/r/popular.json", function (error, response, body) {
    if(error) {
        console.log(error);
    }

    JSON.parse(body).data.children.forEach(item => {
        let obj = {
            title: item.data.title,
            thumbnail: item.data.thumbnail
        };
        extensionArr.push(obj);
    });
    
    fs.writeFileSync("./popular-downloader.json", JSON.stringify(extensionArr), (err) => console.log(err)); 
});



