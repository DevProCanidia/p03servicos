$(function(){
	$('nav a').click(function(){
	/*pegue o a dentro da nav e ao clicar execute a seguinte função*/
		var href = $(this).attr('href');

		var offSetTop = $(href).offset().top;

		$('html,body').animate({'scrollTop':offSetTop});
		return false;
	});
});