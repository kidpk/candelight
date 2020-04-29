$("#buttonAlcohol-1").on("click", function(){
    $(".alcohol-question").hide();
    $(".cards-for-alcohol").show();
})

$("#buttonAlcohol-2").on("click", function(){
    $(".alcohol-question").hide();
    $(".cards-for-alcohol").hide();
    $(".results-page").show();
    $(".title").text("Here are our recommendations for your night. Thank you!")
    $(".title").show()
})

$(".alcoholPref").on("click", function(){
    var alcoholType = $(this).attr("data-alcohol")
    console.log(alcoholType)
    $(".cards-for-alcohol").hide();
    getDrink(alcoholType)
    $(".results-page").show();
    $(".title").text("Here are our recommendations for your night. Thank you!")
    $(".title").show()
})

function getDrink(userChoice) {
    console.log(userChoice)
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    var choice = userChoice
    console.log(choice)
    var currentDrink;
    var drinkImg;
    var instr;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (alcohol) {
        console.log(drinkImg);
        var octane = alcohol.drinks[0].strAlcoholic
        console.log(octane);
        console.log(choice)
        if (choice === "nonalcoholic" && octane !== "Alcoholic" && octane !== "Optional alcohol") {
            getInfo(alcohol)
            return
        } else if (choice === "alcoholic" && octane === "Alcoholic") {
            getInfo(alcohol)
            return
        }
        getDrink(choice);
    });
};


function getInfo(alcohol){
    console.log(alcohol)
    var drink = alcohol.drinks[0]
    let drinkImg = drink.strDrinkThumb
    console.log(drinkImg)
    if (drinkImg) {
        var img = $("<img>")
        img.attr("src", drinkImg)
        $(".drinkz").append(img);
    }
    let instr = alcohol.drinks[0].strInstructions
    console.log(instr);
    if (instr) {
        var instrDiv = $("<p>")
        instrDiv.text(instr)
        $(".drinkz").append(instrDiv);
    }
    let totalIngredients = []
    let totalMeasure = []
    for(var i= 1 ; i < 16; i++){
      var ingredientSts = "strIngredient"+i
      var ingredientSt = drink[ingredientSts]
      var measureSts = "strMeasure"+i
      var measureSt = drink[measureSts]
      if(ingredientSt !== null){
        totalIngredients.push(ingredientSt)
        totalMeasure.push(measureSt)
        console.log(ingredientSt)
        var ingredLi = $("<li>")
        $(ingredLi).text(ingredientSt)
        $(".drinkz").append(ingredLi);
        var measureLi = $("<li>")
        $(measureLi).text(measureSt)
        $(".drinkz").append(measureLi);
      }
    }
    console.log(totalIngredients)
    console.log(totalMeasure)
}