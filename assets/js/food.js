// do you want food or not
$(".foodQuest").on("click", function(){
    var wantFood= $(this).attr("data-foodQuest")
    if (wantFood === "yes"){
      $(".food-question").hide()
      showFoodOptions()
      $(".title").hide()
    }
    else if (wantFood === "no"){
      $(".food-question").hide()
      $(".alcohol-question").show()
      $(".title").hide()
    }
  })

function showFoodOptions(){

    $(".cards-for-cuisines").show();
}

var foodType;
// this is where when you clock on cuisine it chgnes to diet 
 $(".foodCuisine").on("click",function(event){
    event.preventDefault();
    foodType = $(this).attr("data-foodCuisine")
    var foodTypeEl = document.querySelector(".cards-for-cuisines")
    foodTypeEl.setAttribute("style", "display: none");
    $(".cards-for-diets").show();
  })

console.log(foodType)
  $(".foodDiet").on("click",function(event){
    event.preventDefault();
    var foodDiet = $(this).attr("data-foodDiet")
    console.log(foodDiet)
    console.log(foodType)
    var foodDietEl = document.querySelector(".cards-for-diets")
    foodDietEl.setAttribute("style", "display: none");
    // $(".cards-for-diet").show();
    var tags = foodType + ',' + foodDiet;
    // Get 5 random recipies
    var noPreferenceURL = "https://api.spoonacular.com/recipes/random?number=3&tags=" + tags + "&apiKey=8e47f90abd35402ba25d450aad6b4fc6";
    $(".alcohol-question").show();
        $.ajax({
        method: "GET",
        url: noPreferenceURL    
        }).then(function(response) {
    
        for (var i = 0; i < response['recipes'].length; i++) {
            var image = response['recipes'][i].image;
            var sourceURL = response['recipes'][i].sourceUrl;
            var titleText = response['recipes'][i].title;
            console.log(image);
            console.log(sourceURL);
            console.log(titleText);

            var title = $("<h2>");
            title = title.text(titleText);
            $(".foodz").append(title);
    
            var a = $("<a>");
                a = a.attr("href", sourceURL);
                a = a.attr("target", "_blank");
                title.append(a);

    
            
            var newImage = $("<img>");
                newImage = newImage.attr("src", image);
                a.append(newImage);

   
  }})



$("#confirmButton").click(function(event) {
    
    event.preventDefault();


    var intolerances = $("#intolerance").val();
    var cuisine = $("#cuisine").val();
    var diet = $("#diet").val();
    var apiKey = "8d664649a43e494e83023929c061365f";
    var randomURL = "https://api.spoonacular.com/recipes/random?" + "&apiKey=" + apiKey;
    var queryURL = "https://api.spoonacular.com/recipes/complexSearch?cuisine=" + cuisine + "&diet=" + diet + "&intolerances=" + intolerances + "&apiKey=" + apiKey;

    $.ajax({
    method: "GET",
    url: queryURL
    }).then(function(response) {
    console.log("This is the non random response!");
    console.log(response);


    $.ajax({
        method: "GET",
        url: randomURL
    }).then(function(randomResponse){
    console.log("This is the random response!");    
    console.log(randomResponse)
    })
    });

    })
  })
