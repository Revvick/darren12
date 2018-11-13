$(document).ready(function() {
    // run function on initial page load
	demoFunction();
});

// mouse event link https://api.jquery.com/category/events/mouse-events/
function demoFunction() {
	$('.firstDiv').click(function() { //when i click this class
		$('.testDiv').toggleClass('noBottomMargin'); //do something to this class
	})

	$('.secondDiv').hover(function() {
		$('.maroon').toggleClass('notMaroon');
	})

	$('.thirdDiv').mouseenter(function() {
		$('.testDiv').toggleClass('stable');
	})
}