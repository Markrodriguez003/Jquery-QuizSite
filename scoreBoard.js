var cheer = document.createElement("audio");
cheer.setAttribute("src", "Assets/audio/cheer.mp3");
cheer.play();
/* SCOREBOARD VARIABLES */
const SCORE_INDEX = 5;  //TOTAL SCORE INDEX #

/* SCOREBOARD OBJ*/
var scoreBoard = {
    "SCORE1": ["AAA", "90"], // 0
    "SCORE2": ["BBB", "70"], // 1
    "SCORE3": ["CCC", "50"], // 2
    "SCORE4": ["DDD", "60"], // 3
    "SCORE5": ["EEE", "40"] // 4
};

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
var userScore = parseInt(localStorage.getItem(US), 10);
 
/* CHECKS USERSCORE AND SETS IT IN THE SCORE TABLE */
for (var x = 0; x < SCORE_INDEX; x++) {

    console.log("+++++++++++++++++++");
    console.log(`This is the USER'S INTIAL SCORE: ${userScore}`);
    console.log("========INITIAL CHECK=============");
    if (userScore >= parseInt($(`#row${x} td:last`).text(), 10)) {
        console.log("=========SCORE IS HIGHER THAN THIS SCORE============");
        console.log(`${userScore} is greater than rank ${x} - It's score:`);
        console.log(parseInt($(`#row${x} td:last`).text(), 10));
        currentScore = parseInt($(`#row${x} td:last`).text());
        console.log(`HIGHESTSCORE RIGHT NOW IS: ${highestScore}`);
        if (currentScore > highestScore) {
            console.log("========HIGHER=============");
            console.log(`Current score is: ${currentScore}`)
            console.log(`The highest index is row : ${x} score`);
            highestScore = currentScore;
            highestIndex = x;
            console.log(`New highest score no: ${highestScore}`)
            console.log("Setting the user's name to table");
      
        } else {
            console.log("=========NOT HIGHER============");
            console.log("it's not higher. Previous highest stays the same")
              var oldScore = $(`#row${highestIndex} td:first`).text();  
              $(`#row${highestIndex} td:first`).text(userIni);
              $(`#row${highestIndex} td:last`).text(userScore);
              
           /*    $(`#row${highestIndex + 1} td:first`).text(scoreBoard[scoreboardArr[highestIndex+1]][0]); */
              $(`#row${highestIndex + 1} td:first`).text("fucki");
              var print = $(`#row${highestIndex + 1} td:first`).text();
              console.log(print);
              $(`#row${highestIndex + 1} td:last`).text(oldScore);
              var print2 = $(`#row${highestIndex + 1} td:first`).text();
              console.log(print2);
              
        
            }
    } else {
        console.log("=========ELSE============");
        console.log(`${userScore} is NOT greater than rank ${x} Score meng`);
        
   
    };

    console.log("========END OF MAIN IF=============");

  
   
}
