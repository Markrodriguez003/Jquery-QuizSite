$(document).ready(function(){

/* SETTING UP ELEMENT SELECTORS */
var instructionsText = $(".instructionsText");
var introText = $(".introText");

/* TOGGLES INSTRUCTIONS SECTION TO DISPLAY */
$(".instructionsBtn").on("click", function () {
    instructionsText.show();
    introText.hide();
})

/* TOGGLES MAIN MENU TO DISPLAY */
$(".goBackBtn").on("click", function () {
    instructionsText.hide();
    introText.show();
})


    
 
     
 
 


})