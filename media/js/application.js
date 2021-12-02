var exp = "";
var result = "";

var calculate = function() {
	var calc = "";
	calc = /(\d*)[+](\d*)$/.exec(exp);
	result = Number(calc[1]) + Number(calc[2]);
}

var refreshScreen = function() {
	document.getElementById("operation").innerHTML = exp;
}

function Basic() {
	var hist = document.getElementById("hist-panel");
	this.oneBtn = new Button(
		"basic-one", 
		function() {
			exp += 1;
			refreshScreen();
		}
	);
	this.resultBtn = new Button(
		"basic-result", 
		function() {
			calculate();
			hist.appendChild(document.createTextNode(result));
			hist.appendChild(document.createElement("br"));
			exp = "";
			refreshScreen();
		}
	);
	this.addBtn = new Button(
		"basic-add", 
		function() {
			exp += "+";
			refreshScreen();
		}
	);
}

window.onload = function() {
	var basicCalc = new Basic();
}

function Button(id, func) {
	var btn = document.getElementById(id);
	btn.onclick = func;
	this.func = btn.onclick;
}

