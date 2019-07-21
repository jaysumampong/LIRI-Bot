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

