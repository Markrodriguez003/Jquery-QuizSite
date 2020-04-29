/* SCOREBOARD VARIABLES */
const SCORE_INDEX = 5;  //TOTAL SCORE INDEX #

/* SCOREBOARD OBJ*/
var scoreBoard = {
    "SCORE1": ["AAA", "90"],
    "SCORE2": ["BBB", "70"],
    "SCORE3": ["CCC", "60"],
    "SCORE4": ["DDD", "61"],
    "SCORE5": ["EEE", "62"]
}

/* SETTING TABLE */
scoreboardArr = Object.keys(scoreBoard);   // Grabbing scoreboard object keys as an array to cycle thru                   


/* SETS SCORE TABLE  */
for (var i = 0; i < SCORE_INDEX; i++) {
    $(`#row${i} td:first`).text(scoreBoard[scoreboardArr[i]][0]);
    $(`#row${i} td:last`).text(scoreBoard[scoreboardArr[i]][1]);
}

var highestIndex = 0;
var highestScore = 0;
var currentScore = 0;
var UI = localStorage.key(0);
var userIni = localStorage.getItem(UI);
var US = localStorage.key(1);
var userScore = localStorage.getItem(US);

/* CHECKS USERSCORE AND SETS IT IN THE SCORE TABLE */
for (var x = 0; x < SCORE_INDEX; x++) {

    if (userScore > $(`#row${x} td:last`).text()) {
        console.log(`${userScore} is greater than rank ${x} Score: ${$(`#row${x} td:last`).text()} `);
        currentScore = $(`#row${x} td:last`).text();
        console.log(`HIGHESTscore ${highestScore}`);
        if (currentScore > highestScore) {
            console.log(`Current score no: ${currentScore}`)
            highestScore = currentScore;
            highestIndex = x;
            console.log(`New highest score no: ${highestScore}`)
        } else { console.log("it's not higher. Previous highest stays the same") }

    } else {
        console.log($(`#row${x} td:last`).text());
        console.log(`${userScore} is NOT greater than rank ${x} Score`);
    };
}

$(`#row${highestIndex} td:first`).text(userIni);
$(`#row${highestIndex} td:last`).text(userScore); 
