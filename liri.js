require("dotenv").config();

let keys = require("./keys.js");
let spotify = new Spotify(keys.spotify);
let Spotify = require('node-spotify-api');
let axios = require("axios");
let fs = require("fs");
let moment = require("moment");

let operators = process.argv[2];
let input = "";

for (let i = 3; i < process.argv.length; i++) {
    let element = process.argv[i];
    input += element + " ";
}

switch (operators) {
    case "concert-this":
        break;
    case "spotify-this":
        break;
    case "movie-this":
        break;
}