$(document).ready(function () {

    /* CREATING POP AUDIO ELEMENT */
    var popS = document.createElement("audio");
    popS.setAttribute("src", "Assets/audio/pop.mp3");

    $("#pop").click(function(){ // POP
        popS.play();
    })

    var setCountDownTimer; // SETTING INTERVAL GLOBAL

    /* SETTING UP ELEMENT SELECTORS */
    var instructionsText = $(".instructionsText");
    var introText = $(".introText");
    var countDown = $(".countDown");

    countDown.hide();

    /* TOGGLES INSTRUCTIONS SECTION TO DISPLAY */
    $(".instructionsBtn").on("click", function () {
        instructionsText.show();
        introText.hide();
        countDown.hide();
    })

    /* TOGGLES MAIN MENU TO DISPLAY */
    $(".goBackBtn").on("click", function () {
        instructionsText.hide();
        introText.show();
        countDown.hide();
    })

    /* TOGGLES COUNTDOWN */
    $(".startBtn").on("click", function () {
        introText.hide();
        countDown.show();
        countDownToQuiz();

        var setCountDownTimer = setInterval(countDownToQuiz, 1000); // ASSIGNS SETINTERVAL TIMER TO GLOBAL
    })

    var countDownInt = 3; // COUNTDOWN #

    /* CREATING COUNTDOWN AUDIO ELEMENTS */
    var beep = document.createElement("audio");
    beep.setAttribute("src", "Assets/audio/beep.mp3");

    /* COUNTDOWN BEHAVIOR */
    function countDownToQuiz() {
        if (countDownInt != 0) {
            console.log(`Countdown: ${countDownInt}`)
            $(".countDownTimer").text(`Get READY! Quiz starts in: ${countDownInt}`);
            beep.play();
            countDownInt--;
        } else {
            clearInterval(setCountDownTimer);
            location.assign("quiz.html")
        }
    }






})