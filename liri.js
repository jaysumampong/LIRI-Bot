let dotEnv = require("dotenv").config();
let keys = require("./keys.js");
let spotify = new Spotify(keys.spotify);
let axios = require("axios");
let fs = require("fs");
let moment = require("moment");

let search = process.argv[2];
let term = process.arvg[3];

// command line key words
switch (search) {
    case ("concert-this"):
        concertThis();
        break;
    case ("spotify-this-song"):
        if (search) {
            SpotifyThisSong(search);
        } 
        else {
            SpotifyThisSong("The Sign");
        }
    
}

// bands function
let concertThis = function() {
    let URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(URL).then(function(response){
        // console.log(response.data);
        let results = response.data;
        if (results.length) {
            console.log("Results are not found" + artist);
            return;
        }
        console.log("Incoming concerts for " + artist);
        for (let i = 0; i <results.length; i++) {
            let concert = results[i];
            console.log( concert.venue.city + "," +
                (concert.venue.region || show.venue.country) +
                " at " + concert.venue.name + " " +
                moment(concert.datetime).format("MM/DD/YYYY")
            );    
        }
    })
}    


// spotify function
let SpotifyThisSong = function() {
    spotify.search(
        {
            type: "track",
            name: songName
        },
        function(error, data) {
            if (error){
                console.log("Error" + error);
                return;
            }
            let spotifySongs = data.tracks.items;

            for (let i = 0; i < spotifySongs.length; i++) {
                console.log(i);
                console.log("artist(s): " + songs[i].artists.map(getArtistNames));
                console.log("song name: " + songs[i].name);
                console.log("preview song: " + songs[i].preview_url);
                console.log("album: " + songs[i].album.name);
                console.log("-----------------------------------");

            }
        }
    );
};

// movie function
let movieThis = function() {

}    

let doWhatitSays = function() {

}

