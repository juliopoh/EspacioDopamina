var $ = require("jquery");

var $contactForm = $("#contact-form");
var $infoResponse = $("#info-response");

$contactForm.submit(function(e) {
	e.preventDefault();
	//var target = $(".submit").data("target");
	$("html").addClass('is-clipped');
	//$(target).addClass('is-active');
	$("#info-modal").addClass("is-active");

	$.ajax({
		url: "//formspree.io/fevarela@yahoo.es",
		method: "POST",
		data: $(this).serialize(),
		dataType: "json",
		beforeSend: function() {
			$infoResponse.append('<p class="alert alert--loading">Enviando mensaje...</p>');
		},
		success: function(data) {
			$infoResponse.find('.alert--loading').hide();
			$infoResponse.append('<p class="alert alert--success">¡Mensaje enviado!<br>Pronto nos comunicaremos con respuestas a tus dudas.</p>');
			$("#info-modal-background, #info-response").on("click", function() {
				$("html").removeClass("is-clipped");
				$("#info-modal").removeClass("is-active");
			});
		},
		error: function(err) {
			$infoResponse.find('.alert--loading').hide();
			$infoResponse.append('<p class="alert alert--error">¡Ups! Algo salió mal, inténtalo nuevamente.</p>');
			$("#info-modal-background, #info-response").on("click", function() {
				$("html").removeClass("is-clipped");
				$("#info-modal").removeClass("is-active");
			});
		}
	});
});