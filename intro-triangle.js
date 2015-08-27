// javascript goes here

var init = function () { // you may also see this written as function init() { ...

	var x = "#";
	var count = 0;
	var result = "";
	do {
		result = result+x;
		document.write(result + "<br>");
		count++;
	} while ( result.length < 7);

};



init();