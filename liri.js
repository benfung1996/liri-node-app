require("dotenv").config();

var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var bandsintown = require('bandsintown')(keys.bandsintown);
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
            console.log("Invalid option." + "\nOption List: " + "\nconcert-this" + "\nspotify-this-song" + "\nmovie-this" + "\ndo-what-it-says");
    };
};


function showConcert(input) {
    bandsintown.getArtistEventList(input).then(function(error, events) {
        if (!error) {
            var concerts = JSON.parse(events);
            for (var i = 0; i < concerts.length; i++) {
                console.log("Name of the venue : " + concerts[i].venue.name);
                console.log("Venue location : " + concerts[i].venue.city + concerts[i].venue.region + concerts[i].venue.country);
                console.log("Date of the event : " + moment(concerts[i].venue.datatime)).format('L');
            }
        }
    });
}
