require("dotenv").config();

let keys = require("./keys.js");
// let spotify = new Spotify(keys.spotify);
// let Spotify = require("node-spotify-api");
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
        if (!input) {
            input = "queen"
        }
        query = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp"
        axios.get(query).then(function(data) {
            for (let i = 0; i < data.data.length; i++) {
                console.log(data.data[i].venue.name + ' ' + data.data[i].venue.city + ', ' + 
                data.data[i].venue.country + ' ' + 
                moment(data.data[i].datetime).format('MMMM Do YYYY, h:mm a'))
            }
        })
        break;
    case "spotify-this":
        break;
    case "movie-this":
        break;
}