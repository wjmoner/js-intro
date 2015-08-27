// javascript goes here

var init = function () {  // or... function init() { ...

	alert("This is a simple calculator");

	var check = confirm("Are you ready to add?");

	if (check) {
		
		var firstNum = prompt("Type your first number");
		firstNum = parseInt(firstNum);
		var secondNum = prompt("...and your second");
		secondNum = parseInt(secondNum);

		// var firstNum = 1*prompt("Select the first number");
		// var secondNum = 1*prompt("Now select the second number");
		// alert("Your answer is " + (firstNum + secondNum));

		var answer = firstNum + secondNum;
		alert("Your answer is " + answer);
		var restart = confirm("would you like to restart?");
		if (restart) {
			init();
		} else {
			alert("OK bye");
		};

	} else {
		alert("Thanks for stopping by");
	};

}; // end init



init();