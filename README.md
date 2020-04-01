# liri-node-app

1. LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

2. App contains of variables to retrieve data from npm, a function to take user input, and js functions to search concerts, song, movie with user input.

3. Before start searching, run the following code in terminal:
  1) npm install axios
  2) npm install --save node-spotify-api
  3) npm install moment --save
  4) npm install dotenv
  * Make sure to register spotify ID and Secret. Then Create a ".env" file and put API keys in there.
  
4. a) node liri.js concert-this "artist or band name here"
      Will show the following details:      
      -Name of the venue
      -Venue location
      -Date of the Event (use moment to format this as "MM/DD/YYYY")
      
   b) node liri.js spotify-this-song "song name here"
      Will show the following details:
      -Artist(s)
      -The song's name
      -A preview link of the song from Spotify
      -The album that the song is from
      
   c) node liri.js movie-this "movie name here"
      Will show the following details:
      -Title of the movie.
      -Year the movie came out.
      -IMDB Rating of the movie.
      -Rotten Tomatoes Rating of the movie.
      -Country where the movie was produced.
      -Language of the movie.
      -Plot of the movie.
      -Actors in the movie.

   d) node liri.js do-what-it-says "whatever you want to search here"
      It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt
      
5. Video Link: https://www.youtube.com/watch?v=kSxC1mwzt-c&feature=youtu.be
 
6. technologies used in the app:
   - npm
   - api (OMDB, Spotify, Bandsintown)
   - node
   - javascript

7. I am the sole developer of this app.
