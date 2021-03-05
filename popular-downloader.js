const path = require("path");
const fs = require("fs");
const request = require("request-promise");
const extensionArr = [];
const extName = path.extname;

request("https://reddit.com/r/popular.json", function (error, response, body) {
    if (error) {
        console.log(error);
    }

    JSON.parse(body).data.children.forEach(article => {
        let extObj = {
            id: article.data.id,
            title: article.data.title,
            url: article.data.url
        }

        if (extName(article.data.url) == ".png" || 
            extName(article.data.url) == ".jpg" || 
            extName(article.data.url) == ".gif" ||
            extName(article.data.url) == ".gifv") {
            extensionArr.push(extObj);
        }
    });

    fs.writeFileSync("./downloads/popular-downloader.json", JSON.stringify(extensionArr), (err) => console.log(err));
});



