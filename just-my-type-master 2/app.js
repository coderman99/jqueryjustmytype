
// Shift Key pressed
let $upperCase = $("#keyboard-upper-container");
let $lowerCase = $("#keyboard-lower-container");
$(document).keydown(function(prs){
    if(prs.which === 16){                                         
        $upperCase.show();
        $lowerCase.hide();
    }
}).keyup(function(prs){                                          
    if(prs.which === 16){
        $upperCase.hide();
        $lowerCase.show();
    }
    $(".key").removeClass("keypress");
});

//Check letter of key pressed

let sentences = ["ten ate neite ate nee enet ite ate inet ent eate", "Too ato too nOt enot one totA not anot tOO aNot", "oat itain oat tain nate eate tea anne inant nean", "itant eate anot eat nato inate eat anot tain eat", "nee ene ate ite tent tiet ent ine ene ete ene ate"];
let code = 0;
let counter = 0;
let line = 0;
let error = 0;

function checkLetter(){                                             
    let check = sentences[line].charCodeAt(counter);
    if(check === code && counter < sentences[line].length){
        $("#feedback").append("<i class='glyphicon glyphicon-ok'></i>");
    }else{
        $("#feedback").append("<i class='glyphicon glyphicon-remove'></i>");
        error++;
    }
    $("#yellow-block").animate({"left": "+=17.4px"},100);
    $("#target-letter").text(sentences[line][counter + 1]);
}

// Words per minute calculation

let startTimer;
let endTimer;

function getWPM(){                                      
    let timer = endTimer - startTimer;
    let min = Math.floor(timer/60000);
    let sec = Math.floor((timer%60000)/1000);
    let time = min + sec/60;
    return Math.floor((48 - error)/time);
}

// The test

let gameOver = false;

$(document).keypress(function(prs){
    code = prs.which;
    $("#"+ code).addClass("keypress");

    if(!gameOver){
        if(counter === 0 && line === 0){
            startTimer = prs.timeStamp;
        }else if (line === 4 && counter === sentences[line].length - 1){
            endTimer = prs.timeStamp;
        }
        
        checkLetter();

        if (counter + 1 < sentences[line].length){
            counter++;
        }else if(counter + 1 >= sentences[line].length && line < 4){
            line++;
            init(false);
        }else {
            $(".key").removeClass("keypress");
            $("#feedback").text("You typed " + getWPM() + " wpm.  Great Job!");
            setTimeout(function(){
                let again = confirm("Would you like to try again?");
                if (again) {
                    init(true);
                } else {
                    gameOver = true;
                }
            },2000);
        }
    }
});


function init(restart){
    $upperCase.hide();
    $lowerCase.show();
    if (restart){
        line = 0;
        error= 0;
        endTimer = 0;
        startTimer = 0;
        gameOver = false;
    }
    counter = 0;
    $("#sentence").text(sentences[line]);   
    $("#target-letter").text(sentences[line][0]);                    
    $("#feedback").empty();                                    
    $("#yellow-block").animate({"left": "12px"});              
}

$(document).ready(function(){
    init();                                                     
});



