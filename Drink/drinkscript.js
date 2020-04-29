$("#btn").click(

// This function corresponds to the Surprise Me button.  It runs the query to retrieve the data from the cocktail DB returned as "response".  The variables were names so as to retrieve the data to be displayed.
    function (event) {
        event.preventDefault();

        var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // This code points to where the data resides in the data structure.
            var name = response.drinks[0].strDrink
            var highOctane = response.drinks[0].strAlcoholic
            var howTo = response.drinks[0].strInstructions
            var glass = response.drinks[0].strGlass
            var pic = response.drinks[0].strDrinkThumb
            // this code defines a variable that is named below
            drinkImg = response.drinks[0].strDrinkThumb

            console.log(drinkImg);
            // this code defines a variable that is named below
            instr = response.drinks[0].strInstructions
            // Checking codes
            console.log(name);
            console.log(highOctane);
            console.log(howTo);
            console.log(glass);
            console.log(response);
            // If there is a value for name, grab it and append it to the image.
            if (name) {
                var nameDiv = $("<p>")
                nameDiv.text(name)
                nameDiv.appendTo(".img-here")
            }
            // If there is a value for glass, grab it and append it to the image.
            if (glass) {
                var glassDiv = $("<p>")
                glassDiv.text(glass)
                glassDiv.appendTo(".img-here")
            }
            // If there is an image, grab it and append it to the image.
            if (drinkImg) {
                var img = $("<img>")
                img.attr("src", drinkImg)
                img.appendTo(".img-here")
            }
            // If there are instructions, grab them and append it to the image.
            console.log(instr);
            if (instr) {
                var instrDiv = $("<p>")
                instrDiv.text(instr)
                console.log(instrDiv.text)
                instrDiv.appendTo(".img-here")
            }



        });
    });

var userChoice = $("#user-choice").val()
var currentDrink;
var drinkImg;
var instr;

function getDrink(event) {
    userChoice = event.target.value
    console.log(userChoice)
    event.preventDefault();
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (alcohol) {

        drinkImg = alcohol.drinks[0].strDrinkThumb

        console.log(drinkImg);

        instr = alcohol.drinks[0].strInstructions

        var octane = alcohol.drinks[0].strAlcoholic
        // console.log(alcohol)
        console.log(octane);
        // console.log(alcohol);
        if (userChoice === "na" && octane !== "Alcoholic" && octane !== "Optional alcohol") {
            console.log(alcohol);
            currentDrink = alcohol
            if (drinkImg) {
                var img = $("<img>")
                img.attr("src", drinkImg)
                img.appendTo(".img-here")
            }
            console.log(instr);
            if (instr) {
                var instrDiv = $("<p>")
                instrDiv.text(instr)
                console.log(instrDiv.text)
                instrDiv.appendTo(".img-here")
            }
            return
        } else if (userChoice === "a" && octane === "Alcoholic") {
            console.log(alcohol);
            currentDrink = alcohol
            console.log(instr);

            if (drinkImg) {
                var img = $("<img>")
                img.attr("src", drinkImg)
                img.appendTo(".img-here")
            }
            if (instr) {
                var instrDiv = $("<p>")
                instrDiv.text(instr)
                console.log(instrDiv.text)
                instrDiv.appendTo(".img-here")
            }
            return
        }
        console.log(currentDrink);
        getDrink(event);


    });
};

$(".alc-choice").click(getDrink)


// console.log(currentDrink)