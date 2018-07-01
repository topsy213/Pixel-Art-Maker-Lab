// Select color input
let rows;
let cols;
let colorSelected;

// Select size input

$('#sizePicker').submit(function (e) {
	/**By default, submit creates and deletes the table, using preventDefault method makes the table persistent until 
the page or window is reloaded.
*/
	e.preventDefault();
	
	rows = $('#inputHeight').val();
	cols = $('#inputWeight').val();
	
	//This would prevent a new grid from being appended to the present table when the submit button is clicked.
	
	$('#pixelCanvas').empty();
	
	
	makeGrid(rows, cols);
	
});


// When form is submitted by the user, call makeGrid()

function makeGrid(rows, cols) {
	
// The nested loop helps create the rows and columns and they are respectively appended to the table rows and table data.
	for (var r = 1; r <= rows; r++) {
		
		$('#pixelCanvas').append('<tr></tr>');
		
		for (var c = 1; c <= cols; c++) {
			
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
		// this adds a style attribute with background set as the current color selected.
		$(this).attr('style', 'background-color:' +colorSelected );
		}
	});
	
}


/**
I realized that Mozilla Firefox, would not reset the values in the input box when the window is reloaded,
so I tried re-initiating the values back to 1.
if ($('#sizePicker').reset()){
	
	$('#inputHeight').innerHTML == 1;
	$('#inputHeight').innerHTML == 1;

}

else {
	Nrows = $('#inputHeight').val();
	Mcols = $('#inputWeight').val();
	
}
*/
