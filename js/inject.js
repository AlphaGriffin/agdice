

//alert('AlphaGriffin Dice mod loaded');


$('h1').text('Alpha Griffin Dice ready');

$('h1').append('<button id="ag_start">Start</button>');
$('#ag_start').click(ag_bet);

$('h1').append('<button id="ag_results">Show Results</button>');
$('#ag_results').click(ag_show_results);


var ag_results = [];
var ag_curbet = false;

function ag_bet() {
    bet = $('.bet').val();
    prize = $('.prize').text();

    // randomly choose one of the bet buttons
    btn = Math.floor(Math.random() * 2);

    if (btn < 1) {
        btn = $('input[value="Roll < 48"]');
    }
    else {
        btn = $('input[value="Roll > 52"]');
    }

    ag_curbet = [ bet, prize, btn ];
    window.setTimeout(ag_await_result, 100);
    btn.click();
}

function ag_await_result() {
    if (ag_curbet) {
        console.log("btn text: " + ag_curbet[2].val());

        if (ag_curbet[2].val().toLowerCase().startsWith("win")) {
            ag_curbet.append(1);
            ag_results.append(ag_curbet);
            ag_curbet = false;
        }
        else if (ag_curbet[2].val().toLowerCase().startsWith("lost")) {
            ag_curbet.append(-1);
            ag_results.append(ag_curbet);
            ag_curbet = false;
        }
        else {
            window.setTimeout(ag_await_result, 100);
        }
    }
}

function ag_show_results() {
    console.log(ag_results);
    alert(ag_results);
}

