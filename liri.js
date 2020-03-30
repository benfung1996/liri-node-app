require("dotenv").config();

var fs = require("fs");
var axios = require("axios");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
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
        axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp")
        .then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                console.log("Name of the venue : " + response.data[i].venue.name);
                console.log("Venue location : " + response.data[i].venue.city + response.data[i].venue.region + response.data[i].venue.country);
                console.log("Date of the event : " + moment(response.data[i].venue.datatime)).format('L');
            }
        }).catch(function (error) {
            console.log(error);
          })
    }
