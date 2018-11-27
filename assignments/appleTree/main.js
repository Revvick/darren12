$(document).ready(function() {
    
	
	startFunction();
});

// mouse event link https://api.jquery.com/category/events/mouse-events/
function startFunction() 
{
	var number = (1 + Math.floor(Math.random() * 8));
	console.log(number);
	$('.one').click(function() 
	{ //when i click this class
		if (number == 1) 
		{
			$('h1').text("Time for pie!");
		}
		else
		{
			$('.one').addClass('fallen'); //do something to this class
		}
	})

	$('.two').click(function() 
	{ //when i click this class
		if (number == 2) 
		{
			$('h1').text("Time for pie!");
		}
		else
		{
			$('.two').addClass('fallen'); //do something to this class
		}
	})

	$('.three').click(function() 
	{ //when i click this class
		if (number == 3) 
		{
			$('h1').text("Time for pie!");
		}
		else
		{
			$('.three').addClass('fallen'); //do something to this class
		}
	})

	$('.four').click(function() 
	{ //when i click this class
		if (number == 4) 
		{
			$('h1').text("Time for pie!");
		}
		else
		{
			$('.four').addClass('fallen'); //do something to this class
		}
	})

	$('.five').click(function() 
	{ //when i click this class
		if (number == 5) 
		{
			$('h1').text("Time for pie!");
		}
		else
		{
			$('.five').addClass('fallen'); //do something to this class
		}
	})

	$('.six').click(function() 
	{ //when i click this class
		if (number == 6) 
		{
			$('h1').text("Time for pie!");
		}
		else
		{
			$('.six').addClass('fallen'); //do something to this class
		}
	})

	$('.seven').click(function() 
	{ //when i click this class
		if (number == 7) 
		{
			$('h1').text("Time for pie!");
		}
		else
		{
			$('.seven').addClass('fallen'); //do something to this class
		}
	})

	$('.eight').click(function() 
	{ //when i click this class
		if (number == 8) 
		{
			$('h1').text("Time for pie!");
		}
		else
		{
			$('.eight').addClass('fallen'); //do something to this class
		}
	})


}