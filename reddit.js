const path = require("path");
const fs = require("fs");
const request = require("request-promise");
const redditArr = [];

request("https://reddit.com/r/popular.json", function (error, response, body) {
    if(error) {
        console.log(error);
    }

    JSON.parse(body).data.children.forEach(item => {
        let obj = {
            title: item.data.title,
            url: item.data.url,
            author: item.data.author
        };
        redditArr.push(obj);
    });
    
    fs.writeFileSync("./popular-articles.json", JSON.stringify(redditArr), (err) => console.log(err)); 
});



