

//alert('AlphaGriffin Dice mod loaded');


$('h1').text('Alpha Griffin Dice ready');

$('h1').append('<button id="ag_start">Start</button>');
$('#ag_start').click(ag_play);

$('h1').append('<button id="ag_stop" disabled="disabled">Stop</button>');
$('#ag_stop').click(ag_stop);

$('h1').append('<button id="ag_stop_win" disabled="disabled">Stop on Win</button>');
$('#ag_stop_win').click(ag_stop_win);

$('h1').append('<button id="ag_results">Show Results</button>');
$('#ag_results').click(ag_show_results);


var ag_initbet = 0;
var ag_continue = 0; // 0=stop now, 1=stop after win, 2=keep going
var ag_results = [];
var ag_curbet = false;

function ag_play() {
    if (ag_curbet) {
        return;
    }

    ag_initbet = $('.bet').val();
    ag_continue = 2;

    $('#ag_start').prop('disabled', true);
    $('#ag_stop').prop('disabled', false);
    $('#ag_stop_win').prop('disabled', false);

    ag_bet();
}

function ag_stop() {
    ag_continue = 0;
}

function ag_stop_win() {
    ag_continue = 1;
}

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
        if (ag_curbet[2].val().toLowerCase().startsWith("win")) {
            ag_curbet.push(1);
            ag_got_result();
        }
        else if (ag_curbet[2].val().toLowerCase().startsWith("lost")) {
            ag_curbet.push(-1);
            ag_got_result();
        }
        else {
            window.setTimeout(ag_await_result, 100);
        }
    }
}

function ag_got_result() {
    var bet = ag_curbet;
    ag_results.push(ag_curbet);
    ag_curbet = false;
    var stop = false;

    if (bet[3] == 1) { // win
        $('.bet').val(ag_initbet);

        if (ag_continue == 1) { // stop on win
            stop = true;
        }
    }
    else { // lost
        $('.bet').val(Number($('.bet').val()) * 3);
    }

    if (ag_continue == 0) { // stop now
        stop = true;
    }

    if (stop) {
        ag_continue = 0;
        $('#ag_start').prop('disabled', false);
        $('#ag_stop').prop('disabled', true);
        $('#ag_stop_win').prop('disabled', true);
    }
    else {
        window.setTimeout(ag_bet, 2000); // wait 2 seconds before next bet
    }
}

function ag_show_results() {
    console.log(ag_results);

    var plays = ag_results.length;
    var wins = 0;
    var losses = 0;
    var bets = 0;
    var prizes = 0;

    for (var i=0; i < ag_results.length; i++) {
        var item = ag_results[i];
        bets += Number(item[0]);
        if (item[3] == 1) {
            ++wins;
            prizes += Number(item[1]);
        }
        else {
            ++losses;
        }
    }

    results = "Plays: "+plays+"\n";
    results += "Wins: "+wins+"\n";
    results += "Losses: "+losses+"\n";
    results += "Bets placed: "+bets+"\n";
    results += "Prizes won: "+prizes+"\n";

    alert(results);
}
