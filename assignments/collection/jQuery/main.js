$(document).ready(function() {
    // run function on initial page load
	startFunction();
});

// mouse event link https://api.jquery.com/category/events/mouse-events/
function startFunction() {	

	$(window).on('resize', function(){
	if ( ($(window).height() < 1920) && ($(window).height() > 1023)  ){
        $('.patternOne').addClass('patternOneToggle');
        $('.patternTwo').addClass('patternTwoToggle');
    }else{
        $('.patternOne').removeClass('patternOneToggle');
        $('.patternTwo').removeClass('patternTwoToggle');
    }
})



	/*

	 if ( (!$(this).hasClass("current")) && (!$("body").hasClass("home"))  ){
    //...
	
	$(window).on('resize', function(){
    if($(window).height() > 400) {
        $('#body').addClass('limit1200');
        $('#body').removeClass('limit400');
    }else{
        $('#body').addClass('limit400');
        $('#body').removeClass('limit1200');
    }
	})
	

	$('.firstDiv').click(function() { //when i click this class
		$('.testDiv').toggleClass('noBottomMargin'); //do something to this class
	})

	$('.secondDiv').hover(function() {
		$('.maroon').toggleClass('notMaroon');
	})

	$('.thirdDiv').mouseenter(function() {
		$('.testDiv').toggleClass('stable');
	})
	*/
}