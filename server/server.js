const path = require("path");
const fs = require("fs");
const requestPromise = require("request-promise");

let chirpArr = [
    {
        "id": 1,
        "description": "This is JSON.",
        "author": "Mr. Json"
    },
    {
        "id": 2,
        "description": "This is React.",
        "author": "Mr. React"
    },
    {
        "id": 3,
        "description": "This is CSS.",
        "author": "Mr. CSS"
    },
    {
        "id": 4,
        "description": "This is JavaScript.",
        "author": "Mr. JavaScript"
    },
    {
        "id": 5,
        "description": "This is Node.",
        "author": "Mr. Node"
    }
]

fs.writeFileSync("./chirps.json", JSON.stringify(chirpArr), (err) => console.log(err)); 
// (file to read, character in coding(usually utf-8))

