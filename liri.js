require("dotenv").config();

var fs = require("fs");
var moment = require("moment");
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
            console.log("Invalid option." + "\nOption List: " + "\nconcert-this" + "\nspotify-this-song"
             + "\nmovie-this" + "\ndo-what-it-says");
    };
};

    function showConcert(input) {
        axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp")
        .then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                console.log("----------------------------------------------------------");
                console.log("Name of the venue : " + response.data[i].venue.name);
                console.log("Venue location : " + response.data[i].venue.city + response.data[i].venue.region 
                + response.data[i].venue.country);
                console.log("Date of the event : " + moment(response.data[i].datetime).calendar());
                console.log("----------------------------------------------------------");
            }
        }).catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
              }
              console.log(error.config)
          
          })
    }

    function showSpotify(input) {
        if (input === undefined) {
            input = "The Sign";
        }

        spotify.search(
            {
            type: "track",
            query: input
        },
        function(err, data) {
            if (err) {
                return console.log("Error occurred: " + err);
            };
            for (var i = 0; i < data.tracks.items.length; i++) {
                console.log("----------------------------------------------------------");
                console.log("Artist: " + data.tracks.items[i].artists[0].name);
                console.log("Song: " + data.tracks.items[i].name);
                console.log("Preview URL: " + data.tracks.items[i].preview_url);
                console.log("Album: " + data.tracks.items[i].album.name);
                console.log("----------------------------------------------------------");
            };
     
        });
    };

    function showMoive(input) {
        axios.get("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy")
        .then(function(response) {
            if (response.data.Title === undefined) {
                showMoive("Mr. Nobody");
            } else {
                console.log("----------------------------------------------------------");
                console.log("Title : " + response.data.Title);
                console.log("Released : " + response.data.Released);
                console.log("IMDB Rating : " + response.data.imdbRating);
                    if (response.data.Ratings[1] === undefined) {
                        console.log("No Rotten Tomatoes Score Available.");
                    } else {
                        console.log("Rotten Tomatoes Score : " + response.data.Ratings[1].Value);
                    }
                console.log("Country: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
                console.log("----------------------------------------------------------");
            }
            
        })
        .catch(function(error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log("---------------Data---------------");
              console.log(error.response.data);
              console.log("---------------Status---------------");
              console.log(error.response.status);
              console.log("---------------Status---------------");
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an object that comes back with details pertaining to the error that occurred.
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log("Error", error.message);
            }
            console.log(error.config);
          });
        
    }