/* ARRAY OF QUESTIONS */ /* CHANGE TO OBJ - {"QUESTION", "CHOICES","ANSWER" } */

var jQueryAnswerArr = [
    {
        question: "Which of the choices below is used as the jQuery shorthand selector?",
        choices: ["!{\" \"}", "@{\" \"}", " ^[\" \"]", "$(\" \")"],
        answer: "d"
    },
    {
        question: "What is jQuery used for?",
        choices: ["Scripting site behaviors", "Changing the css of an element", " Selecting HTML elements", "All of the above"],
        answer: "d"
    },
    {
        question: "Which scripting language is needed to use jQuery?",
        choices: ["Python", "HTML", "Javascript", "Java"],
        answer: "c"
    },
    {
        question: "Where do you insert the script link for jQuery in a html document?",
        choices: ["Head tag /Bottom of body tag", "Inside CSS file", "As a local storage object", "Meta tag"],
        answer: "a"
    },
    {
        question: "What is used to create and track behaviors on a website? (Mouse clicking, hovering over elements, ect)",
        choices: ["Key tracker", "Event listeners", "Key input", "Local storage recall"],
        answer: "b"
    },
    {
        question: "Which one of the choices below is not a jQuery method?",
        choices: ["$(\".myBtn\")", "${\"#myId\" +_ (\".Id2\")}", "$(\"#myDiv\")", "$(\"#myDiv span\")"],
        answer: "b"
    },
    {
        question: "Which of the choices below is a valid jQuery selection of a html element? Pt.1",
        choices: ["$(\".myHeader#!\")", " $(\"!btn1\") ", "$(\".myP span\")", " $(\"..DivA\")"],
        answer: "c"
    },
    {
        question: "Which of the choices below is a valid jQuery selection of a html element? Pt.2",
        choices: ["$(\"#one =! two\")", " $(\"header*\")", "$(\"x.get()\")", "$(\"button\")"],
        answer: "d"
    },
    {
        question: "Which of the choices below is a valid jQuery selection of a html element? Pt.3",
        choices: ["$(\"#ul li:first\")", "$(\"ul li:First\")", "$(\"div .myClass #myId .append()\")", "$(\"#!myBtn!#\")"],
        answer: "a"
    },
    {
        question: "Which of the choices below is a valid jQuery selection of a html element? Pt.4",
        choices: [" $(\".myBtn()\")", "$(\"document.assets\")", "$(\".myBtn #id div\")", "$(\"console.log(x)\")"],
        answer: "c"
    },
]

/* CREATING TIMER AUDIO ELEMENTS. (Thanks Captain Planet!) */
var tick = document.createElement("audio");
tick.setAttribute("src", "Assets/audio/tick.mp3");
var tock = document.createElement("audio");
tock.setAttribute("src", "Assets/audio/tock.mp3");


/* SELECTS TIME ELEMENT BY MINS/SECS */
var timeMins = $(".timerCard .timerM");
var timeSecs = $(".timerCard .timerS");

/* TIMER VARS */
var m = 2;
var s = 59;
var ticky = 0;

/*  GAME TIMER */
function timerStart() {

    /* console.log("TIMER ON"); */

    if (s <= 59 && s > 9) { // TIMER SPITS OUT MINS:SECS;
        timeSecs.text(s);
        s--;
        if (ticky === 0) { //Alternates "Tick-Tock Sounds"
            tick.play();
            ticky = 1;
        } else {
            tock.play();
            ticky = 0;
        }
        if (m === 2) {
            m--;
            timeMins.text("0" + m);
        }
    } else if (s < 10 && s > 0) {
        timeSecs.text("0" + s);
        s--;
        if (ticky === 0) { //Alternates "Tick-Tock Sounds"
            tick.play();
            ticky = 1;
        } else {
            tock.play();
            ticky = 0;
        }
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

/* PRINTS FIRST SET OF QUESTIONS TO QUIZ SCREEN */


/* $(".questionChoices").text(answerArr[0]);  */

gameStart();  //STARTS GAME

/*  USER SCORE */
var userScore = 0; // USER SCORE
var setIntTimer; // TIMER SETINTERVAL VAR
const QUIZ_QUESTION_AMOUNT = 10; // # OF QUESTIONS

/* GAME START FUNCTION */
function gameStart() {

    var questionI = 0; // INDEX FOR QUESTIONS + ANSWERS /* THIS CAN BE FURTHER SIMPLIFIED WITH OBJ ^ */
    setIntTimer = setInterval(timerStart, 1000); // timerStart() doesn't work.
    $(".questionText").text(jQueryAnswerArr[questionI].question);
    $(".a").text(`A.  ${jQueryAnswerArr[0].choices[0]}`);
    $(".b").text(`B.  ${jQueryAnswerArr[0].choices[1]}`);
    $(".c").text(`C.  ${jQueryAnswerArr[0].choices[2]}`);
    $(".d").text(`D.  ${jQueryAnswerArr[0].choices[3]}`);
    

    /*  
    Questions:        0    1    2    3    4    5    6    7    8    9
    Answers:        ["d", "d", "b", "a", "c", "a", "b", "d", "a", "c"];   */
    $(".choiceBtns button").on("click", function (e) {
        var userChoice = e.target.innerText.toString().toLowerCase();

        if (questionI < QUIZ_QUESTION_AMOUNT) {

            if (userChoice === jQueryAnswerArr[questionI].answer) {
                console.log(`GOT IT ${questionI}`);
                userScore = userScore + 10;
                questionI++;
                $(".score").text(userScore);
                $(".questionCounter").text(questionI + 1);
                $(".questionText").text(jQueryAnswerArr[questionI].question);
                $(".a").text(`A.  ${jQueryAnswerArr[questionI].choices[0]}`);
                $(".b").text(`B.  ${jQueryAnswerArr[questionI].choices[1]}`);
                $(".c").text(`C.  ${jQueryAnswerArr[questionI].choices[2]}`);
                $(".d").text(`D.  ${jQueryAnswerArr[questionI].choices[3]}`);

            } else if (userChoice != jQueryAnswerArr[questionI].answer) {
                console.log(`NOPE ${questionI}`);
                questionI++;
                $(".score").text(userScore);
                $(".questionCounter").text(questionI + 1);
                $(".questionText").text(jQueryAnswerArr[questionI].question);
                $(".a").text(`A.  ${jQueryAnswerArr[questionI].choices[0]}`);
                $(".b").text(`B.  ${jQueryAnswerArr[questionI].choices[1]}`);
                $(".c").text(`C.  ${jQueryAnswerArr[questionI].choices[2]}`);
                $(".d").text(`D.  ${jQueryAnswerArr[questionI].choices[3]}`);

            } if (questionI === QUIZ_QUESTION_AMOUNT - 1) {
                console.log(`DONE ${questionI}`);
                clearInterval(setIntTimer);
                gameOver();
            }
        }
    })
}
var userIntials = ""; // USER'S INTIALS

/* GAME OVER SCREEN */
function gameOver() {
    /* clearInterval(setIntTimer); */
    $(".scoreDisplay").show();
    $(".questionText").hide();
    $(".questionChoices").hide();
    $(".a").hide();
    $(".b").hide();
    $(".c").hide();
    $(".d").hide();
    $(".scoreTimerCard ").show();
    $(".mainQuestionText").text("GAME OVER!");
    $(".userScoreLogBox").show();
    $(".mainQuestionText span").text("");

    /* CREATING END GAME AUDIO ELEMENTS. (Thanks Captain Planet! x 2) */
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
            $(".errorText").css("color", "green");
            $(".errorText").text("Uploading score");
            location.assign("scores.html");
            console.log("Logging: " + userInit);
        }
        localStorage.setItem("uInitials", userInit); // STORES USER'S INTIALS TO LS
        localStorage.setItem("uScores", userScore); // STORES USER'S SCORE TO LS
    })

    /* END SCORE MESSAGE + GOODIES */
    if (userScore < 0 || userScore === 0) {
        badAudioEle.play();
        $(".scoreMsg").text("Humm.. not good.. not good at all.. You need to work on your jQuery skills!");
        $(".scoreDisplay .finalScore").text(userScore);
        $(".finalScore").css("color", "red");
        $("#scoreImg").show();
        $(".choiceBtns").hide();
        $("#scoreImg").attr("src", "Assets/imgs/thumbsDown.png");
    } else if (userScore <= 50) {
        badAudioEle.play();
        $(".scoreMsg").text("Eh.. you're kinda..sort of.. halfway there..somewhat(?)... Not neccesary a top notch score.. Keep at it!");
        $(".scoreDisplay .finalScore").text(userScore);
        $("#scoreImg").show();
        $(".choiceBtns").hide();
        $(".finalScore").css("color", "orange");
        $("#scoreImg").attr("src", "Assets/imgs/thumbsDown.png");
    } else if (userScore >= 50 && userScore < 75) {
        mehAudioEle.play();
        $(".scoreMsg").text("Well You are above 50. So that's a good place to be.. I guess.. try to improve your jquery knowledge!");
        $(".scoreDisplay .finalScore").text(userScore);
        $("#scoreImg").show();
        $(".choiceBtns").hide();
        $(".finalScore").css("color", "orange");
        $("#scoreImg").attr("src", "Assets/imgs/thumbsEh.png");
    } else if (userScore > 75 && userScore < 85) {
        goodAudioEle.play();
        $(".scoreMsg").text("A good passing score for sure.. but you can do better! Keep on rockin jQuery!");
        $(".scoreDisplay .finalScore").text(userScore);
        $("#scoreImg").show();
        $(".choiceBtns").hide();
        $(".finalScore").css("color", "springgreen");
        $("#scoreImg").attr("src", "Assets/imgs/thumbsEh.png");
    } else if (userScore > 85 && userScore < 99) {
        goodAudioEle.play();
        $(".scoreMsg").text("Nice. Very Nice. Not perfect...but.. Nice!");
        $(".scoreDisplay .finalScore").text(userScore);
        $("#scoreImg").show();
        $(".choiceBtns").hide();
        $(".finalScore").css("color", "mediumspringgreen");
        $("#scoreImg").attr("src", "Assets/imgs/thumbsUp.png");
    } else if (userScore === 100) {
        goodAudioEle.play();
        $(".scoreMsg").text("WOW! Good job! You are a pro! I gotta make these quizzes harder.");
        $(".scoreDisplay .finalScore").text(userScore);
        $(".finalScore").css("color", "green");
        $("#scoreImg").show();
        $(".choiceBtns").hide();
        $("#scoreImg").attr("src", "Assets/imgs/star.png");
    }
}