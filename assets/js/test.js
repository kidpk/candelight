// $(document).ready(function(){

//     $(".cards-for-genre").hide();

//     function showHide(){
//         $("#section").css("background-image", "url(assets/images/landscape-1328858_1920.png)")
//         $(".title").text("Please select the following genre:");
//         $(".yes").hide();
//         $(".cards-for-genre").show();
//         $(".is-rounded").hide();
//     }
//     $(".yes").on("click", showHide);

// })

// // $("#actionCard" ).on("click", function(event) {
// //     alert("You clicked action");
// //   });
// //   $("#comedyCard").on("click", function(event) {
// //     alert("You clicked comedy");
// //   });
// //   $("#horrorCard").on("click", function(event) {
// //     alert("You clicked horror");
// //   });
// //   $("#dramaCard").on("click", function(event) {
// //     alert("You clicked drama");
// //   });
// //   $("#scifiCard").on("click", function(event) {
// //     alert("You clicked scifi");
// //   });
// //   $("#familyCard").on("click", function(event) {
// //     alert("You clicked family");
// //   });

//   $(".movieGenre").on("click",function(event){
//     event.preventDefault()
//     var movieID = $(".movieGenre").attr("data-movieID")
//     console.log(movieID)
//     var movieCard = document.querySelector(".cards-for-genre")
//     movieCard.setAttribute("style", "display: none");
//   })
//   $(".movieCert").on("click",function(event){
//     event.preventDefault()
//     var movieCert = $(this).attr("data-movieCert")
//     var movieCertEl = document.querySelector(".cards-for-rating")
//     movieCertEl.setAttribute("style", "display: none");
//   })


