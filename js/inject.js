

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

$('body').append('<div class="ct-chart ct-perfect-fourth"></div>');


var ag_initbet = 0;
var ag_continue = 0; // 0=stop now, 1=stop after win, 2=keep going
var ag_results = [];
var ag_curbet = false;
var ag_chartwin = false;

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

    // can't read the prize directly, calculate it instead
    //prize = $('.prize').text();
    prize = Number(bet) * 2

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
        else { // still waiting
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

    data.series = [];

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
        data.series.push({ data: [ plays, wins, losses, bets, prizes ] });
    }

    results = "Plays: "+plays+"\n";
    results += "Wins: "+wins+"\n";
    results += "Losses: "+losses+"\n";
    results += "Bets placed: "+bets+"\n";
    results += "Prizes won: "+prizes+"\n";
    results += "P/L: "+(prizes - bets)+" ("+(100*prizes/bets)+"%)";

    alert(results);

    new Chartist.Line('.ct-chart', data, options, responsiveOptions);
    $('.ct-chart').show();
    $('.ct-chart').click(function() {
        $('.ct-chart').hide();
    });
}


/* Add a basic data series with six labels and values */
var data = {
  labels: ['plays', 'wins', 'losses', 'bets placed', 'prizes won', 'p/l'],
  /*
  series: [
    {
      data: [1, 2, 3, 5, 8, 13]
    }
  ]
  */
};

/* Set some base options (settings will override the default settings in Chartist.js *see default settings*). We are adding a basic label interpolation function for the xAxis labels. */
var options = {
  axisX: {
    labelInterpolationFnc: function(value) {
      return 'Calendar Week ' + value;
    }
  }
};

/* Now we can specify multiple responsive settings that will override the base settings based on order and if the media queries match. In this example we are changing the visibility of dots and lines as well as use different label interpolations for space reasons. */
var responsiveOptions = [
  ['screen and (min-width: 641px) and (max-width: 1024px)', {
    showPoint: false,
    axisX: {
      labelInterpolationFnc: function(value) {
        return 'Week ' + value;
      }
    }
  }],
  ['screen and (max-width: 640px)', {
    showLine: false,
    axisX: {
      labelInterpolationFnc: function(value) {
        return 'W' + value;
      }
    }
  }]
];

/* Initialize the chart with the above settings */
//new Chartist.Line('.ct-chart', data, options, responsiveOptions);

