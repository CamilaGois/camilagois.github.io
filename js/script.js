
//seta para subir
$(document).ready(function() {
	$('#up').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
});