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
function setMeal() {
    meal = document.getElementById('meal').value;
    console.log(meal);
}
;var nutrition;
function setNutrition() {
    nutrition = document.getElementById('nutrition').value;
    console.log(nutrition);
}
;var mood;
function setMood() {
    mood = document.getElementById('mood').value;
    console.log(mood);
}
;//var timeframe;
//  function setTimeframe(){
//  timeframe = document.getElementById('timeframe').value;
// console.log(timeframe);
//  };
$("#recipeBtn").on("click", function() {
    var ingredient = $("#ingredient").val().trim();
    console.log(ingredient);
    setMeal();
    setNutrition();
    setMood();
    var getRecipe = {
        meal: meal,
        nutrition: nutrition,
        mood: mood,
        ingredient: ingredient,
    }
    
    //console.log(getRecipe.meal);
    retrieveRecipes(getRecipe);
    $("#ingredient").val("");
    
    return false;

});


function retrieveRecipes(i) {
    database.ref().on("child_added", function(childSnapshot, prevChildKey) {
        console.log(childSnapshot.val());
        var meal = childSnapshot.val().meal;
        var nutrition = childSnapshot.val().nutrition;
        var mood = childSnapshot.val().mood;
        var ingredient = childSnapshot.val().ingredient;
        var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?type=" + meal + "&includeIngredients=" + ingredient + "&maxCalories=" + nutrition + "&cuisine=" + mood + "&api_key=NeDyt1ljNRmshSl2ru2hVQZc8S1jp1omjQVjsneUqixtlRDRCt";
        //queryURL = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex'
        console.log(queryURL);
        $.ajax({
            //async:false,
            url: queryURL,
            method: 'GET',
            //data: {cuisine: '=American'},
            dataType: 'json',
            beforeSend: function(xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "NeDyt1ljNRmshSl2ru2hVQZc8S1jp1omjQVjsneUqixtlRDRCt")
            }
        }).done(function(response) {
            console.log(response);

       
            //function logData (response) {
            database.ref().push(response)

        });

  
         function addRecipes(i){ 
          var recipeDiv = $('<div class="recipeChoices">');
            var recipeImage = $('<img id="recipeImagechoices">');
            recipeImage.Url = response.results[i].dishes.image;
            recipeName = response.results[i].dishes.name;
            recipeImage.attr('src', recipeImage.Url);
            recipeImage.attr('alt', recipeName);
            recipeDiv.append(recipeImage);
            $('#recipeImagechoices').prepend(recipeImage);

            };
            
           });
        };
    
            function displayMultipleRecipes(){
            for (var i=0; i < 7; i++){
            retrieveRecipes(this, i)
            addRecipes(this, i)

         };
            
          }

      

         

      //$( document ).ready(function() {      
      