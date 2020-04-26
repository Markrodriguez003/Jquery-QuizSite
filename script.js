var questionsArr = [
    "Which of the choices below is used the jQuery shorthand selector?",
    "What is jQuery used for?",
    "Which one of the choices below is not a jQuery method?",
    "What is used to create and track behaviors on a website? (Mouse clicking, hovering over elements, ect)",
    "What scripting language do you use to ulitize jQuery?",
    "Where do you insert the link for jQuery in a html document?",
    "Which of the choices below is a valid jQuery selection of a html element? pt.1",
    "Which of the choices below is a valid jQuery selection of a html element? pt.2",
    "Which of the choices below is a valid jQuery selection of a html element? pt.3",
    "Which of the choices below is a valid jQuery selection of a html element? pt.4"
];

var answerArr = [

    " A. !{\"\"} B. @{\"\"} C. ^[\"\"] D. $(\"\") "


]
var answersLtrs = ["d", "b", "b", "a", "c", "a", "b", "d", "a", "c"];
var userScore = 0;




var instructionsText = $(".instructionsText");
var introText = $(".introText");

$(".instructionsBtn").on("click", function () {
    instructionsText.css("display", "block");
    introText.css("display", "none");


})
$(".goBackBtn").on("click", function () {
    instructionsText.css("display", "none");
    introText.css("display", "block");

})

var timeMins = $(".timerCard .timerM");
var timeSecs = $(".timerCard .timerS");

/* 
function timerStart() {

    const secs = 60;
    var m = 5;
    var s = 59;


    var timerSet = setInterval(() => {

        if (s <= 59 && s > 9) {
            timeSecs.get(0).innerText = s;
            s--;
            if (m === 5) {
                m--;
                timeMins.get(0).innerText = "0" + m;
            }
        } else if (s < 10 && s > 0) {
            timeSecs.get(0).innerText = "0" + s;
            s--;
        } else if (s === 0 && m != 0) {
            m--;
            s = 59;
            timeSecs.get(0).innerText = s;
            timeMins.get(0).innerText = "0" + m;
        } else if (m < 0 || m === 0) {
            timeSecs.get(0).innerText = "0" + s;
            timeMins.get(0).innerText = "0" + m;
            m = 0;
            s = 0;
            console.log("HEY IT GOT HERE!");
            clearInterval(timerSet);
            gameOver();
        }
    }, 1000);
}

timerStart(); */

/*  console.log($(".choiceBtns button").get(0).innerText); */ // GRABS LETTER FROM BUTTON



$(".questionText").get(0).innerText = questionsArr[0];
$(".questionChoices").get(0).innerText = answerArr[0];


function gameStart() {

    var gameLoop = true;
    var questionI = 0;
    /*  questions:   0    1    2    3    4    5    6    7    8    9
    answers:        ["d", "b", "b", "a", "c", "a", "b", "d", "a", "c"]; */

    quizQuestionAmount = 10;
    if (gameLoop === true) {
        $(".choiceBtns button").on("click", function (e) {

            for (var questionI = 0; questionI != quizQuestionAmount;) {
                var userChoice = e.target.innerText;
                var finalChoice = userChoice.toString().toLowerCase();

                $(".questionText").get(0).innerText = questionsArr[questionI];
                $(".questionChoices").get(0).innerText = answerArr[questionI];


                if (finalChoice === answersLtrs[questionI]) {
                    console.log(answersLtrs[questionI]);
                    console.log("RIGHT");
                    userScore = + 10;
                    $(".score").get(0).innerText = userScore;
                    questionI++;

                } else {
                    console.log("WRONG");
                    console.log(answersLtrs[questionI]);
                    userScore = - 10;
                    $(".score").get(0).innerText = userScore;
                    questionI++;
                }
                

            }

        })


    }









}

gameStart();


function gameOver() {
    console.log("GAME OVER BUDDY!");
}






