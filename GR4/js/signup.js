$(document).ready(function() {
	
	$("#lg_birthday").datepicker({ 
		changeYear: true, 
		changeMonth: true, 
		yearRange: '1900:2013',
		dateFormat: 'mm-dd-yy',
	    defaultDate: '01-01-1995'});

});