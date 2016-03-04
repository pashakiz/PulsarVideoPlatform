$(document).ready(function() {

	//Placeholder
	//Doc: https://github.com/NV/placeholder.js/
	$("[placeholder]").textPlaceholder();
	
	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$(".btn-scroll").click(function() {
		$.scrollTo($(".feedback"), 800, {
			offset: 0
		});
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form#feedback").submit(function() {

		var name = $(this).find("input[name='name']").val(),
			org = $(this).find("input[name='org']").val(),
			position = $(this).find("input[name='position']").val(),
			email = $(this).find("input[name='email']").val();

		if (!name || !org || !email || !position) {
			alert("Заполните поля формы.");
			return false;
		}

		var email_regexp = /.+@.+\..+/i;
		var email_test = email_regexp.test(email);
		if (!email_test) {
			alert("Введен некоректный Email-адрес.");
			return false;
		}

		$.ajax({
			type: "POST",
			url: "mail.php", // /templates/jblank/php/mail.php
			data: $("form#feedback").serialize(),
			success: function(response) {
				$(".form_success_message").slideDown();
				console.log("jquery-ajax-mail-success response:"+response);
			},
			error:  function(xhr, str) {
				alert('Возникла ошибка: ' + xhr.responseCode);
			}
		}).done(function() {
			console.log("jquery-ajax-mail-done");
			//alert("Спасибо за заявку!");
		});
		return false;
	});

});