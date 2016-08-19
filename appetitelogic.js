// Steps to complete:
/*
1. Upload selected value (drop-down menus) to database through submit button (return false, so page does not refresh)
2. Create object by recording clicked selections (on .click, submit)
4. Input all selected parameter values to find 6 random recipes from Spoontacular API.
5. For each recipe, display api-generated image (that when clicked, opens up the written recipe instructions)
6. When image is clicked, load written recipe, display spotify list with music matching the "mood" parameter). Spotify will display non playing, so we will need to do an on click to start playing music through player.
6. When image is clicked, use all parameters to display nearby farmers  markets (and grocery stores through Google Maps) through HomeCook API)
7.
*/
// 1. Initialize Firebase
var config = {
  apiKey: "AIzaSyA64XfuG6Mr7fNboYH5g3nUnjtbjjXLdcs",
  authDomain: "appetite-d2b29.firebaseapp.com",
  databaseURL: "https://appetite-d2b29.firebaseio.com",
  storageBucket: "appetite-d2b29.appspot.com",
};
firebase.initializeApp(config);

var database = firebase.database();




</script>
