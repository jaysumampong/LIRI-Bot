require("dotenv").config();

let fs = require("fs");

let keys = require("./keys.js");
let Spotify = require("node-spotify-api")
let spotify = new Spotify(keys.spotify);

let axios = require("axios");
let moment = require("moment")

let operator = process.argv[2];
let input = "";
for (let i = 3; i < process.argv.length; i++) {
    const nodeArgv = process.argv[i];
    input += nodeArgv + " ";
}
input = input.trim();

function command (operator) {
    switch (operator) {
        case "concert-this":
            axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp").then(response => {
            let data = response.data;
            console.log("I found " + data.length + " upcoming concerts for " + input)
            data.forEach(nodeArgv => {
                console.log("Where: " + nodeArgv.venue.name + " \n" + nodeArgv.venue.city + ", " + nodeArgv.venue.region + ", " + nodeArgv.venue.country)
                console.log(moment(nodeArgv.datetime).format("MMMM Do, YYYY h:mm A"));
                console.log("============================================================\n");
            });
            }).catch(error => {
                console.log(error);
            });
            break;
        case "spotify-this-song":
                spotify.input({type: "track", query: input, limit: 1}, function(err, data) {
                    if (err) {
                      return console.log(err);
                    }
                    console.log("Here is what I found for " + input);
                    console.log("Song: " + data.tracks.items[0].name)
                    let album = data.tracks.items[0].album
                    console.log("Artists:")
                    album.artists.forEach(nodeArgv => {
                        console.log("- " + nodeArgv.name);
                    });
                    console.log("Album: " + album.name);
                    if (data.tracks.items[0].preview) {
                        console.log("Preview: " + data.tracks.items[0].preview)
                    } else {
                        console.log("No preview available")
                    }
                });
                        break;
        case "movie-this":
            if (!input) {
                input = "gladiator"
            }
            console.log("Searching for: " + input);
            axios.get("http://www.omdbapi.com/?apikey=trilogy&t=" + input).then(response => {
            console.log("Here is what I found for " + input)
            let data = response.data
            console.log("Title: " + data.Title);
            console.log("Year: " + data.Year);
            console.log("Country: " + data.Country);
            console.log("Language: " + data.Language);
            console.log("Actors: " + data.Actors);
            console.log("Plot: " + data.Plot);
            console.log("Ratings:");
            data.Ratings.forEach(nodeArgv => {
                console.log(nodeArgv.Source + ": " + nodeArgv.Value);
            });
         
            });
            break;
            // future development
        case "do-what-it-says":
            break;
        default:
            console.log('That is not a valid command. Please use "concet-this", "movie-this," or "spotify-this-song".')
    }
}

command(operator);