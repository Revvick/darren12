$(document).ready(function() {
    // run function on initial page load
	demoFunction();
});

// mouse event link https://api.jquery.com/category/events/mouse-events/
function demoFunction() {
	$('.firstDiv').click(function() { //when i click this class
		$('.firstDiv').toggleClass('noUpperMargin'); //do something to this class
	})
}