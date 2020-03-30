require("dotenv").config();

var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var Bandsintown = require('bandsintown')(APP_ID);
var bandsintown = new Bandsintown(keys.bandsintown);
var spotify = new Spotify(keys.spotify);


var option = process.argv[2];
var input = process.argv[3];

UserInput(option, input);

function UserInput (option, input) {
    switch (option) {
        case 'concert-this':
            showConcert(input);
            break;
        case 'spotify-this-song':
            showSpotify(input);
            break;
        case 'movie-this':
            showMoive(input);
            break;
        case 'do-what-it-says':
            showSomething(input);
            break;
        default:
            console.log("Invalid option." + "\nOption List: " + "\n'concert-this" + "\n'spotify-this-song" + "\n'movie-this" + "\n'do-what-it-says");
    };
};


function showConcert(input) {
    bandsintown.getArtistEventList(input).then(function(events) {
        
    });
}
