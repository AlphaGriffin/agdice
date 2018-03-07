document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var f = d.createElement('form');
      f.action = 'https://yobit.net/en/dice/';
      f.method = 'get';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
}, false);

function CookiesSet(name,value) {
	var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function CookiesGet(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}


function pushRed(htmlCode) {
	chrome.tabs.executeScript(null, {code: 'var script = document.createElement("script"); script.innerHTML = "' + htmlCode + '";script.id= "yohassy1";document.body.appendChild(script);'});
}

function saveVal(id) {
	var tagID = "#"+id;
    var idValue = $(tagID).val();
	CookiesSet(id, idValue);
	if (idValue!= null && idValue.length > 0) {
			if (id == 'bbzcodes' || id == 'botversion') { return " var "+id +" = '" + idValue + "';";}
	else  { return " var "+id +" = " + idValue + ";";} }
	    else {return " var "+id +" = 0;";}
}

function loadVal(id) {
    var idValue = CookiesGet(id);
	var tagID = "#"+id;
	if (id == 'spinit' && idValue == null) {idValue = 1;}
     $(tagID).val(idValue);
}

function InjectPackage(randomNumber){
	var randomNumber  = Math.floor(Math.random() * 999999) + 10000;
	var codeVal = '';
	codeVal = codeVal + saveVal('delayseconds') + saveVal('basevalue') + saveVal('maxwins') + saveVal('maxlosses')  + saveVal('botversion');
	codeVal = codeVal + saveVal('incwin') + saveVal('incloss') + saveVal('prostop') + saveVal('losstop')  + saveVal('spinit')  + saveVal('baronlosses') + saveVal('kobiarolls') + saveVal('bbzcodes') + ' var randomNumber = '+ randomNumber+'; ';

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		chrome.tabs.executeScript(null, {code: 'var script = document.createElement("script"); script.innerHTML = "'+this.responseText+'";script.id= "yohassy1";document.body.appendChild(script);'});
        }
		};

  var diceLink = "https://node.betbotz.com/js/dice-one.php?php=25&js="+encodeURIComponent(codeVal);
  xhttp.open("GET", diceLink , true);
  xhttp.send();

};

function ReloadMe() {
	chrome.tabs.executeScript(null, {code: 'var script = document.createElement("script"); script.innerHTML = "location.reload();";script.id= "yohassy1";document.body.appendChild(script);'});
}


document.addEventListener('DOMContentLoaded', function () {

loadVal('delayseconds');
loadVal('basevalue');
loadVal('maxwins');
loadVal('maxlosses');
loadVal('incwin');
loadVal('incloss');
loadVal('prostop');
loadVal('losstop');
loadVal('baronlosses');
loadVal('kobiarolls');
loadVal('bbzcodes');
loadVal('spinit');
loadVal('botversion');


$('#label-Instructions').css( 'cursor', 'pointer');

document.getElementById('label-startme').addEventListener('click', function() {
	if ($('#incwin').val() > 0 || $('#incloss').val() > 0) {
	InjectPackage();}
	});

document.getElementById('label-stopme').addEventListener('click', function() {
	pushRed('stop=1;');
	});

document.getElementById('label-stoponwin').addEventListener('click', function() {
	pushRed('stop=2;');
	});

document.getElementById('label-Instructions').addEventListener('click', function() {
	var win = window.open("http://betbotz.com/info/", '_blank');
    win.focus();
	});
});
