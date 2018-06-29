// Select color input
let rows;
let cols;
let colorSelected;

// Select size input

$('#sizePicker').submit(function (e) {
	
	e.preventDefault();
	
	rows = $('#inputHeight').val();
	cols = $('#inputWeight').val();
	$('#pixelCanvas').empty();
	
	
	makeGrid(rows, cols);
	
});


// When size is submitted by the user, call makeGrid()

function makeGrid(rows, cols) {
	
// Your code goes here!
	for (var i = 1; i <= rows; i++) {
		
		$('#pixelCanvas').append('<tr></tr>');
		
		for (var j = 1; j <= cols; j++) {
			
			$('tr:last').append('<td></td>');
			//$('td').attr('class', 'space');
		}
	}
	
	
	$('td').click(function(e){
		colorSelected = $('#colorPicker').val();
		if ($(this).attr('style')) {
			$(this).removeAttr('style');
		}
		else {
		$(this).attr('style', 'background-color:' +colorSelected );
		}
	});
	
}


/**
if ($('#sizePicker').reset()){
	
	$('#inputHeight').innerHTML == 1;
	$('#inputHeight').innerHTML == 1;

}

else {
	Nrows = $('#inputHeight').val();
	Mcols = $('#inputWeight').val();
	
}
*/