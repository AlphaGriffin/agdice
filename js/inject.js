

//alert('AlphaGriffin Dice mod loaded');


$('h1').text('Alpha Griffin Dice ready');

$('h1').append('<button id="ag_start">Start</button>');

$('#ag_start').click(function() {
    //$('.bet').val('you clicked it');
    ag_bet();
});


function ag_bet() {
    bet = $('.bet').val();

    // randomly choose one of the bet buttons
    btn = Math.floor(Math.random() * 2);
    if (btn < 1) {
        btn = $('input[value="Roll < 48"]');
    }
    else {
        btn = $('input[value="Roll > 52"]');
    }

    btn.click();
}

