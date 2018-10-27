var menu = "header";
$(window).scroll(function(){
	if(window.innerWidth > 959) {
		if($(document).scrollTop() >= 50 && menu==="header") {
			menu = "header-flutuante";
    		document.getElementById("header-flutuante").style.display = "block";
    		$("#header-flutuante").removeClass("animated fadeOutDown");
    		setTimeout(function () {
				$("#header-flutuante").addClass("animated fadeInDown");
			}, 400);
    	}  
    	if($(document).scrollTop() < 50 && menu==="header-flutuante") {
			menu = "header";
    		$("#header-flutuante").removeClass("animated fadeInDown");
    		setTimeout(function () {
				$("#header-flutuante").addClass("animated fadeOutDown");
			}, 400);

    		document.getElementById("header-flutuante").style.display = "none";
    		
    	}
	}
	else if(window.innerWidth > 767) {
		if($(document).scrollTop() > 14) {
    		document.getElementById("header").style.opacity = "0";
    		document.getElementById("header").style.visibility = "hidden";
    		document.getElementById("header-flutuante").style.visibility = "visible";
    		document.getElementById("header-flutuante").style.opacity = "1";
    	} else {
    		document.getElementById("header").style.visibility = "visible";
    		document.getElementById("header").style.opacity = "1";
    		document.getElementById("header-flutuante").style.opacity = "0";
    		document.getElementById("header-flutuante").style.visibility = "hidden";
    	}
	}
    
});

$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 2000,            // Integer: Speed of the transition, in milliseconds
  timeout: 30000,          // Integer: Time between slide transitions, in milliseconds
});

$(function() {
  $(".rslides").responsiveSlides();
});

Visibility.onVisible(function(){
	//Animações Home
	setTimeout(function () {
		$(".introducao h1").addClass("animated fadeInDown");
	}, 400);
	setTimeout(function () {
		$(".introducao blockquote").addClass("animated fadeInDown");
	}, 800);
	setTimeout(function () {
		$(".introducao .btn").addClass("animated fadeInDown");
	}, 1200);
	setTimeout(function () {
		$(".animar").addClass("animated fadeInDown");
	}, 1600);

	//Animações internas
	setTimeout(function () {
		$(".introducao-interna h1").addClass("animated fadeInDown");
	}, 400);
	setTimeout(function () {
		$(".introducao-interna p").addClass("animated fadeInDown");
	}, 800);
	setTimeout(function () {
		$(".animar-interno").addClass("animated fadeInDown");
	}, 1200);
});

// Formulario

$('.formphp').on('submit', function() {
	var emailContato = "vitorhug97@gmail.com"; // Escreva aqui o seu e-mail

	var that = $(this),
			url = that.attr('action'),
			type = that.attr('method'),
			data = {};
	
	that.find('[name]').each(function(index, value) {
		var that = $(this),
				name = that.attr('name'),
				value = that.val();
				
		data[name] = value;
	});
	
	$.ajax({
		url: url,
		type: type,
		data: data,
		success: function(response) {
		
			if( $('[name="leaveblank"]').val().length != 0 ) {
				$('.formphp').html("<div id='form-erro'></div>");
				$('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-erro');
				});
			} else {
			
				$('.formphp').html("<div id='form-send'></div>");
				$('#form-send').html("<span>Mensagem enviada!</span><p>Em breve eu entro em contato com você. Abraços.</p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-send');
				});
			};
		},
		error: function(response) {
			$('.formphp').html("<div id='form-erro'></div>");
			$('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
			.hide()
			.fadeIn(1500, function() {
			$('#form-erro');  
		});
		}
	});
	
	return false;
});