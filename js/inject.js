

//alert('AlphaGriffin Dice mod loaded');


$('h1').text('Alpha Griffin Dice v0.1  ');

$('h1').append('<button id="ag_start">Start</button>');
$('#ag_start').click(ag_play);
$('h1').append(' ');

$('h1').append('<button id="ag_stop" disabled="disabled">Stop</button>');
$('#ag_stop').click(ag_stop);
$('h1').append(' ');

$('h1').append('<button id="ag_stop_win" disabled="disabled">Stop on Win</button>');
$('#ag_stop_win').click(ag_stop_win);
$('h1').append(' ');

$('h1').append('<button id="ag_results">Show Results</button>');
$('#ag_results').click(ag_show_results);

$('body').append('<div class="ct-chart ct-perfect-fourth"></div>');


var ag_initbet = Number('0.00000001').toFixed(8);
var ag_continue = 0; // 0=stop now, 1=stop after win, 2=keep going
var ag_results = [];
var ag_curbet = false;
var ag_chartwin = false;
var cur_round = 0;
var w_l_streaks = [];
var cur_wins = 0;
var max_wins = 0;
var cur_losses = 0;
var max_losses = 0;
var startBalance = 0;
var cur_bal = 0;

var cur_coin = 'test';

function ag_play() {
    if (ag_curbet) {
        return;
    }
    startBalance = getBalance();
    cur_coin = getCurrency();
    console.log('########### Starting AlphaGriffin Dice ##################');
    console.log('Starting Balance: '+cur_coin+' '+startBalance);
    // ag_initbet = $('.bet').val();

    // set starting bet BEFORE starting
    $('.bet').val(ag_initbet);

    ag_continue = 2;

    $('#ag_start').prop('disabled', true);
    $('#ag_stop').prop('disabled', false);
    $('#ag_stop_win').prop('disabled', false);

    ag_bet();
}

function ag_stop() {
    ag_continue = 0;
    $('#ag_start').prop('disabled', false);
    $('#ag_stop').prop('disabled', true);
    $('#ag_stop_win').prop('disabled', true);
}

function ag_stop_win() {
    ag_continue = 1;
    $('#ag_start').prop('disabled', false);
    $('#ag_stop').prop('disabled', true);
    $('#ag_stop_win').prop('disabled', true);
}

function ag_bet() {
    cur_bal = getBalance();
    var bet = Number('0.00000001').toFixed(8);
    /*  Classic
    var bets = [
        '0.00000001',
        '0.00000001',
        '0.00000005',
        '0.00000015',
        '0.00000050',
        '0.00000150',
        '0.00000500',
        '0.00001500',
        '0.00005000',
    ];
    */
    // NEW STRATEGY !!
    var bets = [
        '0.00000001',
        '0.00000001',
        '0.00000010',
         (cur_bal * 0.01).toFixed(8),
         (cur_bal * 0.02).toFixed(8),
         (cur_bal * 0.04).toFixed(8),
         (cur_bal * 0.08).toFixed(8),
         (cur_bal * 0.1).toFixed(8),
         (cur_bal * 0.25).toFixed(8),
    ];


    if (cur_losses < bets.length) {
        bet = Number(bets[cur_losses]).toFixed(8);
    }
    else {
        bet = Number(bets[0]).toFixed(8);
    }
    if (bet > cur_bal) {
        bet = Number(bets[0]).toFixed(8);
    }

    // bet = $('.bet').val();

    // can't read the prize directly, calculate it instead
    //prize = $('.prize').text();
    prize = Number(bet * 2).toFixed(8);

    // randomly choose one of the bet buttons
    btn = Math.floor(Math.random() * 2);

    if (btn < 1) {
        btn = $('input[value="Roll < 48"]');
    }
    else {
        btn = $('input[value="Roll > 52"]');
    }

    ag_curbet = [ bet, prize, cur_bal, btn ];
    // this setTimeout deal fires another function
    // console.log('bet: '+bet+' prize: '+prize)
    window.setTimeout(ag_await_result, 100);  // NEXT THING
    btn.click();
}

function ag_await_result() {
    if (ag_curbet) {
        if (ag_curbet[3].val().toLowerCase().startsWith("win")) {
            ag_curbet.push(1);
            ag_got_result();
        }
        else if (ag_curbet[3].val().toLowerCase().startsWith("lost")) {
            ag_curbet.push(-1);
            ag_got_result();
        }
        else { // still waiting
            window.setTimeout(ag_await_result, 100);  // NEXT THING
        }
    }
}

function ag_got_result() {
    // this is a dataset that gets passed back and forth
    // ELEMENTS in ag_curbet = bet, prize, btn ref, cur_bal, win/lose
    var bet = ag_curbet;
    cur_round++;
    ag_results.push(ag_curbet);
    ag_curbet = false;
    var stop = false;
    var state = 'Lost';
    var value = 0;
    if (bet[4] == 1) { // win
        state = 'Won';
        value = bet[1];
        // reset bet to initial
        $('.bet').val(ag_initbet);
        // $('.bet').val(bet[0].toFixed(8));

        // report and reset lose streak
        if (cur_losses > max_losses) {
            max_losses = cur_losses;
        }
        w_l_streaks.push(cur_losses);
        cur_losses = 0;
        // start a win_streak
        cur_wins = cur_wins + 1;
        cur_bal = getBalance();
        console.log('Current Balance: ' + bet[2] + ' Profit: '+Number(((cur_bal/startBalance)-1)*100).toFixed(2)+'%');

        if (ag_continue == 1) { // stop on win
            stop = true;
        }
    }
    else { // lost
        value = bet[0];

        // $('.bet').val(Number($('.bet').val()) * 3);
        $('.bet').val(Number(bet[0]).toFixed(8));
        if (cur_wins > max_wins) {
            max_wins = cur_wins;
        }
        cur_wins = 0;
        cur_losses = cur_losses + 1;
    }

    if (ag_continue == 0) { // stop now
        stop = true;
    }

    console.log('Round ' + cur_round + ' ' +state+ ' ' +value)

    // I love this eventless loop... i dig it.
    if (stop) {
        ag_continue = 0;
        $('#ag_start').prop('disabled', false);
        $('#ag_stop').prop('disabled', true);
        $('#ag_stop_win').prop('disabled', true);
    }
    else {
        // wait 2 seconds before next bet
        window.setTimeout(ag_bet, 2000);  // NEXT THING
    }
}

function ag_show_results() {
    // MY bad .. i didnt even look at this one.
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

function getBalance() {
    var currentBalanceString = $('.chosen-single span').html();
    var currentBalanceArray = currentBalanceString.split(' ');
    var testString = currentBalanceString.split('-');
    testString = testString[1].split(' ');
    var gotValue = testString[1];
    var gotCurrency = testString[2];
    return Number(gotValue);
}

function getCurrency() {
    var currentBalanceString = $('.chosen-single span').html();
    var testString = currentBalanceString.split('-');
    testString = testString[1].split(' ');
    var gotValue = testString[1];
    var gotCurrency = testString[2];
    return gotCurrency;
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

/* Set some base options (settings will override the default settings
in Chartist.js *see default settings*). We are adding a basic label
interpolation function for the xAxis labels. */
var options = {
  axisX: {
    labelInterpolationFnc: function(value) {
      return 'Calendar Week ' + value;
    }
  }
};

/* Now we can specify multiple responsive settings that will
override the base settings based on order and if the media
queries match. In this example we are changing the visibility
of dots and lines as well as use different label interpolations
for space reasons. */
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
