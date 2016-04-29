/*Executing javascript after page load*/
window.onload = function() {

	/*************************
	/* Starting global variables (too ugly)
	/*************************/
	var i = "1";
	var j = "1";

	/*************************
	/* Unreusable code for cat 1
	/*************************/

	var cat = document.getElementById("cat");
	cat.addEventListener("click", incrementCounter, false);

	function incrementCounter() {
		var screen = document.getElementsByClassName("counter")[0];
		screen.innerHTML = i;
		i++;
	}

	/*************************
	/* Unreusable code for cat 2
	/*************************/	

	var cat2 = document.getElementById("cat2");
	cat2.addEventListener("click", incrementCounter2, false);

	function incrementCounter2() {
		var screen2 = document.getElementsByClassName("counter2")[0];
		screen2.innerHTML = j;
		j++;
	}	


} 

