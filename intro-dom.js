// javascript goes here


var init = function () {
	alert("Hello world!");

	document.write("This is a simple chunk of text added to a document");

	var results = document.getElementById("#results");
	var myResults = document.createElement('p');
	var textToAdd = document.createTextNode("This is formed as a document element");
	myResults.appendChild(textToAdd);
	console.log(myResults);
	results.appendChild(myResults);
};

// you may also see line 3 written as function init() { ...


init(); // leave this here