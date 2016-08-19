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
<<<<<<< HEAD
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA64XfuG6Mr7fNboYH5g3nUnjtbjjXLdcs",
    authDomain: "appetite-d2b29.firebaseapp.com",
    databaseURL: "https://appetite-d2b29.firebaseio.com",
    storageBucket: "appetite-d2b29.appspot.com",
  };
  firebase.initializeApp(config);

  var database = firebase.database();

    var meal;
    function setMeal(){
    meal = document.getElementById('meal').value;
    console.log(meal);
    };
    var nutrition;
    function setNutrition(){
    nutrition = document.getElementById('nutrition').value;
    console.log(nutrition);
    };
    var mood;
    function setMood(){
    mood = document.getElementById('mood').value;
    console.log(mood);
    };
    //var timeframe;
  //  function setTimeframe(){
  //  timeframe = document.getElementById('timeframe').value;
   // console.log(timeframe);
  //  };

$("#recipeBtn").on("click", function(){

	var ingredient = $("#ingredient").val().trim();
	console.log(ingredient);

	var getRecipe = {
		meal:  meal,
		nutrition: nutrition,
		mood: mood,
		ingredient: ingredient,
	}

	database.ref().push(getRecipe);

	//console.log(getRecipe.meal);


	$("#ingredient").val("");

	return false;

});

//database.ref().on("child_added", function(childSnapshot, prevChildKey){

//	console.log(childSnapshot.val());

//	var meal = childSnapshot.val().meal;
//	var nutrition = childSnapshot.val().nutrition;
//	var mood = childSnapshot.val().mood;
//	var ingredient = childSnapshot.val().ingredient;


        // get information from site, ajax request with queryURL
       // $.ajax({url: queryURL, method: 'GET'})

            // wait until request is finished to run function
           // .done(function(response) {

          //  });
=======
var config = {
  apiKey: "AIzaSyA64XfuG6Mr7fNboYH5g3nUnjtbjjXLdcs",
  authDomain: "appetite-d2b29.firebaseapp.com",
  databaseURL: "https://appetite-d2b29.firebaseio.com",
  storageBucket: "appetite-d2b29.appspot.com",
};
firebase.initializeApp(config);

var database = firebase.database();




</script>
>>>>>>> 12099d3eb92200c84b743473dfee4b31fcbb674a
