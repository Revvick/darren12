$(document).ready(function() {
    
	
	startFunction();
});

// mouse event link https://api.jquery.com/category/events/mouse-events/
function startFunction() 
{
	var number = (1 + Math.floor(Math.random() * 8));
	console.log(number);
	$('.apple1').click(function() 
	{ //when i click this class
		if (number == 1) 
		{
			$('h1').text("Ready for Pie!");
		}
		else
		{
			$('.apple1').addClass('fallen'); //do something to this class
		}
	})

	$('.apple2').click(function() 
	{ //when i click this class
		if (number == 2) 
		{
			$('h1').text("Ready for Pie!");
		}
		else
		{
			$('.apple2').addClass('fallen'); //do something to this class
		}
	})

	$('.apple3').click(function() 
	{ //when i click this class
		if (number == 3) 
		{
			$('h1').text("Ready for Pie!");
		}
		else
		{
			$('.apple3').addClass('fallen'); //do something to this class
		}
	})

	$('.apple4').click(function() 
	{ //when i click this class
		if (number == 4) 
		{
			$('h1').text("Ready for Pie!");
		}
		else
		{
			$('.apple4').addClass('fallen'); //do something to this class
		}
	})

	$('.apple5').click(function() 
	{ //when i click this class
		if (number == 5) 
		{
			$('h1').text("Ready for Pie!");
		}
		else
		{
			$('.apple5').addClass('fallen'); //do something to this class
		}
	})

	$('.apple6').click(function() 
	{ //when i click this class
		if (number == 6) 
		{
			$('h1').text("Ready for Pie!");
		}
		else
		{
			$('.apple6').addClass('fallen'); //do something to this class
		}
	})

	$('.apple7').click(function() 
	{ //when i click this class
		if (number == 7) 
		{
			$('h1').text("Ready for Pie!");
		}
		else
		{
			$('.apple7').addClass('fallen'); //do something to this class
		}
	})

	$('.apple8').click(function() 
	{ //when i click this class
		if (number == 8) 
		{
			$('h1').text("Ready for Pie!");
		}
		else
		{
			$('.apple8').addClass('fallen'); //do something to this class
		}
	})


}