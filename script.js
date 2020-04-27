
/* ARRAY OF QUESTIONS */
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

/* ARRAY OF ANSWERS */
var answerArr = [
    " A. !{\"\"} B. @{\"\"} C. ^[\"\"] D. $(\"\") ",
    " A. Javascript Behaviors B. Changing CSS C. Selecting Html Elements D. All of the above ",
    " A. $(\".myBtn\") B. ${\"#myId\" +_ (\".Id2\")} C. $(\"#myDiv\") D.$(\"#myDiv span\")",
    " A. Event Listeners B. .append() C. Changing Scope D. Create a pointer to object ",
    " A. C++ B. Python C. Javascript D. Java ",
    " A. head tag /bottom of body tag B. before head tag C. in a meta tag D. in the footer ",
    " A. $(\".myHeader#!\") B. $(\".myP span\") C. $(\"!btn1\") D. $(\"..DivA\") ",
    " A. $(\"#one =! two\") B. $(\"header*!\") C. $(\"x.get()\") D. $(\"button\")   ",
    " A. $(\"#ul li:first\")   B. $(\"ul li:First\") C. $(\"div .myClass #myId + 87\") D. $(\"#!myBtn!#\") ",
    " A. $(\".myBtn()\")B. $(\"document\") C. $(\".myBtn #id div\")  D. $(\"console.log(x)\") "
]

/* ARRAY OF CORRECT ANSWERS */
var answersLtrs = ["d", "d", "b", "a", "c", "a", "b", "d", "a", "c"];

/* SETTING UP ELEMENT SEELCTORS */
var instructionsText = $(".instructionsText");
var introText = $(".introText");

$(".instructionsBtn").on("click", function () {
    instructionsText.show();
    introText.hide();

})
$(".goBackBtn").on("click", function () {
    instructionsText.hide();
    introText.show();
})

/* SELECTS TIME ELEMENT BY MINS/SECS */
var timeMins = $(".timerCard .timerM");
var timeSecs = $(".timerCard .timerS");

/* TIMER VARS */
var m = 5;
var s = 59;

/*  GAME TIMER */
function timerStart() {

    console.log("TIMER ON");

    if (s <= 59 && s > 9) {
        timeSecs.text(s);
        s--;
        if (m === 5) {
            m--;
            timeMins.text("0" + m);
        }
    } else if (s < 10 && s > 0) {
        timeSecs.text("0" + s);
        s--;
    } else if (s === 0 && m != 0) {
        m--;
        s = 59;
        timeSecs.text(s);
        timeMins.text("0" + m);
    } else if (m < 0 || m === 0) {
        timeSecs.text("0" + s);
        timeMins.text("0" + m);
        m = 0;
        s = 0;
        console.log("HEY IT GOT HERE!");
        clearInterval(setIntTimer);
        gameOver();
    }
}


$(".startBtn").on("click",  gameStart());


/* PRINTS FIRST SET OF QUESTIONS TO QUIZ SCREEN */
$(".questionText").text(questionsArr[0]);
$(".questionChoices").text(answerArr[0]);

/*  USER SCORE */
var userScore = 0;
var setIntTimer;

/* GAME MAIN FUNCTION */
function gameStart() {
    setIntTimer = setInterval(timerStart, 80);
    var questionI = 0;
    /*  
    Questions:        0    1    2    3    4    5    6    7    8    9
    Answers:        ["d", "d", "b", "a", "c", "a", "b", "d", "a", "c"];   */

    quizQuestionAmount = 10; // # OF QUESTIONS

    var questionI = 0; // INDEX FOR QUESTIONS + ANSWERS
    $(".choiceBtns button").on("click", function (e) {
        var userChoice = e.target.innerText.toString().toLowerCase();

        if (questionI < quizQuestionAmount) {

            if (userChoice === answersLtrs[questionI]) {
                userScore = userScore + 10;
                console.log("Question Index: " + questionI + " - Question: " + questionI);
                console.log("Correct Answer: " + answersLtrs[questionI]);
                console.log(" User's Choice: " + userChoice);
                console.log("UserScore: " + userScore);
                questionI++;
                $(".score").text(userScore);
                $(".questionCounter").text(questionI + 1);
                $(".questionText").text(questionsArr[questionI]);
                $(".questionChoices").text(answerArr[questionI]);

            } else if (userChoice != answersLtrs[questionI]) {
                /* userScore = userScore - 10; */
                console.log("Question Index: " + questionI + " - Question: " + questionI);
                console.log("Wrong Answer: " + answersLtrs[questionI]);
                console.log(" User's Choice: " + userChoice);
                console.log("UserScore: " + userScore);
                questionI++;
                $(".score").text(userScore);
                $(".questionCounter").text(questionI + 1);
                $(".questionText").text(questionsArr[questionI]);
                $(".questionChoices").text(answerArr[questionI]);

            } if (questionI === quizQuestionAmount) {
                clearInterval(setIntTimer);
                gameOver();
            }
        }
    })
}

var userIntials = ""; // GRABS USER'S INTIALS

/* GAME OVER SCREEN */
function gameOver() {
    clearInterval(setIntTimer);
    $(".scoreDisplay").show();
    $(".questionText").hide();
    $(".questionChoices").hide();
    $(".scoreTimerCard ").show();
    $(".mainQuestionText").text("GAME OVER!");
    $(".userScoreLogBox").show();
    $(".mainQuestionText span").text("");

    /* CREATING AUDIO ELEMENTS. (Thanks Captain Planet!) */
    var badAudioEle = document.createElement("audio");
    badAudioEle.setAttribute("src", "Assets/audio/badScore.mp3");
    var mehAudioEle = document.createElement("audio");
    mehAudioEle.setAttribute("src", "Assets/audio/mehScore.mp3")
    var goodAudioEle = document.createElement("audio");
    goodAudioEle.setAttribute("src", "Assets/audio/correctScore.mp3")

    /* SELECTING INTIAL'S BTN  */
    var userInitBtn = $("#userInitialsBtn");

    /* GRABBING USER'S INTIALS + ERROR CHECKIN */
    userInitBtn.on("click", function () {
        var userInit = $("#userInitials").val();
        console.log(console.log("User's Intials " + userInit));
        console.log(console.log("User's typeof Intials " + typeof (userInit)));
        console.log(console.log("User's Intials length " + userInit.length));
        if (userInit.length < 3 || userInit.length > 3) {
            $(".errorText").css("color", "red");
            console.log("Wrong # initials" + "Initials Length: " + userInit.length);
        } else if (userInit.length === 3) {
            console.log("Right # initials" + "Initials Length: " + userInit.length);
            console.log("Logging: " + userInit);
            localStorage.getItem("uInitials", userInit);
            localStorage.getItem("uScores", userScore);
        }
    })

    /* END SCORE MESSAGE */
    if (userScore < 0 || userScore === 0) {
        badAudioEle.play();
        $(".scoreMsg").text("Humm.. not good.. not good at all.. You need to work on your jQuery skills!");
        $(".scoreDisplay .finalScore").text(userScore);
        $(".finalScore").css("color", "red");
        $("#scoreImg").show();
        $("#scoreImg").attr("src", "Assets/imgs/thumbsDown.png");
    } else if (userScore <= 50) {
        badAudioEle.play();
        $(".scoreMsg").text("Eh.. you're kinda..sort of.. halfway there..somewhat(?)... Not neccesary a top notch score.. Keep at it!");
        $(".scoreDisplay .finalScore").text(userScore);
        $("#scoreImg").show();
        $(".finalScore").css("color", "orange");
        $("#scoreImg").attr("src", "Assets/imgs/thumbsDown.png");
    } else if (userScore >= 50 && userScore < 75) {
        mehAudioEle.play();
        $(".scoreMsg").text("Well You are above 50. So that's a good place to be.. I guess.. try to improve your jquery knowledge!");
        $(".scoreDisplay .finalScore").text(userScore);
        $("#scoreImg").show();
        $(".finalScore").css("color", "orange");
        $("#scoreImg").attr("src", "Assets/imgs/thumbsEh.png");
    } else if (userScore > 75 && userScore < 85) {
        goodAudioEle.play();
        $(".scoreMsg").text("A good passing score for sure.. but you can do better! Keep on rockin jQuery!");
        $(".scoreDisplay .finalScore").text(userScore);
        $("#scoreImg").show();
        $(".finalScore").css("color", "springgreen");
        $("#scoreImg").attr("src", "Assets/imgs/thumbsEh.png");
    } else if (userScore > 85 && userScore < 99) {
        goodAudioEle.play();
        $(".scoreMsg").text("Nice. Very Nice. Not perfect...but.. Nice!");
        $(".scoreDisplay .finalScore").text(userScore);
        $("#scoreImg").show();
        $(".finalScore").css("color", "mediumspringgreen");
        $("#scoreImg").attr("src", "Assets/imgs/thumbsUp.png");
    } else if (userScore === 100) {
        goodAudioEle.play();
        $(".scoreMsg").text("WOW! Good job! You are a pro! I gotta make these quizzes harder.");
        $(".scoreDisplay .finalScore").text(userScore);
        $(".finalScore").css("color", "green");
        $("#scoreImg").show();
        $("#scoreImg").attr("src", "Assets/imgs/star.png");
    }
}


/* SCOREBOARD */
var scoreBoard = {
    TOP: 95,
    MED: 80,
    HOL: 70,
    CAB: 60,
    XLX: 50,
    ABC: 0
}

/* SETTING TABLE */


var rowA = $("#row1").get(0).innerText;
console.log(rowA);
