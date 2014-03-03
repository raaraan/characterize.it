'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	$('button.redirect-movie').click(changeImage);
})


function changeImage(e){
	e.preventDefault();
	console.log("hello");
	var randInt = Math.floor(Math.random() * (2-1+1)) + 1;
	console.log(randInt);
	var image;
	switch(randInt){
		case 1:
			image = "/images/racoon.png";
			break;
		case 2:
			image = "/images/sas.png";
			break;
		//document.getElementById("tools_sketch").style.background = "url(/images/logo.png)";
	}
	var canvas = document.getElementById("tools_sketch")
	canvas.style.background = "url(/images/racoon.png)";
	var context = canvas.getContext("2d");
	context.clearRect(0,0, canvas.width, canvas.height);
	//canvas.style.background = "url(" + image + ")";
}

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

	$('button.get-started').click(function(event) {
		document.location = "/start";
	});

}



