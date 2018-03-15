// Hide uppercase board

$(document).ready()
$("#keyboard-upper-container").hide();

// Press Shift Key and show uppercase keyboard

$(document).keydown(function (sft) {
    if (sft.which === 16) {
        $("#keyboard-upper-container").show();
        $("#keyboard-lower-container").hide();
    }
});
$(document).keyup(function (sft) {
    if (sft.which === 16) {
        $("#keyboard-upper-container").hide();
        $("#keyboard-lower-container").show();
    }
});

// Highlight keypressed

$(document).keypress(function (prs) {
    $("#" + prs.which).css("background-color", "yellow");
    $("#" + prs.which).fadeOut(200, function () {
        $("#" + prs.which).fadeIn(200, function () {
            $("#" + prs.which).css({ "background-color": "#f5f5f5", "border": "1px solid #e3e3e3", "box-shadow": "inset 0 1px 1px rgba(0,0,0,.05)" });
        }); 
    });
    
});

let sentences = ["ten ate neite ate nee enet ite ate inet ent eate", "Too ato too nOt enot one totA not anot tOO aNot", "oat itain oat tain nate eate tea anne inant nean", "itant eate anot eat nato inate eat anot tain eat", "nee ene ate ite tent tiet ent ine ene ete ene ate"];
let k = "";
let i = 0;
let snt = $("#sentence")
$(snt).show(function(sent){
    if (i < sentences.length) {
        k += sentences[i++];
        $(snt).text(k);
    }
});


    // Target sentence at top of page

//     * The sentences in the provided array should be displayed at the 
//     * top of the page one sentence at a time. Once the sentence has been completed, 
//     * the next in line should appear. There is already a div with id="sentence" in your 
//     * html file. This is where you will display each sentence one at a time.
// ```



