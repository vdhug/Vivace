var menu = "header";
document.getElementById("id-portugues").addEventListener("click", function(){
    traduzPortuguesFooterAndHeader();
});
document.getElementById("id-portugues-flutuante").addEventListener("click", function(){
    traduzPortuguesFooterAndHeader();
});


document.getElementById("id-espanhol").addEventListener("click", function(){
    traduzEspanholFooterAndHeader();
});
document.getElementById("id-espanhol-flutuante").addEventListener("click", function(){
    traduzEspanholFooterAndHeader();
});


document.getElementById("id-ingles").addEventListener("click", function(){
    traduzInglesFooterAndHeader();
});
document.getElementById("id-ingles-flutuante").addEventListener("click", function(){
    traduzInglesFooterAndHeader();
});


document.addEventListener('DOMContentLoaded', function() {
    if ((getQueryStringValue("lg")) != ""){
    	idioma = getQueryStringValue("lg");
    }
    if(idioma === "espanhol"){
    	traduzEspanholFooterAndHeader();
    }
    else if (idioma === "ingles"){
    	traduzInglesFooterAndHeader();
    }

});

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
		if($(document).scrollTop() >= 14 && menu === "header") {
			menu = "header-flutuante";
    		document.getElementById("header-flutuante").style.display = "block";
    		$("#header-flutuante").removeClass("animated fadeOutDown");
    		setTimeout(function () {
				$("#header-flutuante").addClass("animated fadeInDown");
			}, 400);
    	} 
    	if($(document).scrollTop() < 14 && menu === "header-flutuante") {
			menu = "header";
    		$("#header-flutuante").removeClass("animated fadeInDown");
    		setTimeout(function () {
				$("#header-flutuante").addClass("animated fadeOutDown");
			}, 400);

    		document.getElementById("header-flutuante").style.display = "none";
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

function traduzEspanholFooterAndHeader(){
	//Traduz todo menu
	document.querySelector('#menu-inicio').innerHTML = "Inicio";
	document.querySelector('#menu-sobre').innerHTML = "Sobre";
	document.querySelector('#menu-servicos').innerHTML = "Servicios";
	document.querySelector('#menu-clientes').innerHTML = "Clientes";
	document.querySelector('#menu-contato').innerHTML = "Contacto";


	//Traduz todo menu-flutuante
	document.querySelector('#menu-inicio-flutuante').innerHTML = "Inicio";
	document.querySelector('#menu-sobre-flutuante').innerHTML = "Sobre";
	document.querySelector('#menu-servicos-flutuante').innerHTML = "Servicios";
	document.querySelector('#menu-clientes-flutuante').innerHTML = "Clientes";
	document.querySelector('#menu-contato-flutuante').innerHTML = "Contacto";

	//Traduz footer
	document.querySelector('#footer-titulo').innerHTML = "Nuestra Historia";
	document.querySelector('#footer-historia').innerHTML = "La Vivace tiene una sólida capacidad técnica y alta competencia en gestionar proyectos, con el foco en las necesidades de los clientes y con soluciones de alto valor agregado.";
	document.querySelector('#footer-contato').innerHTML = "Contacto";
	document.querySelector('#footer-redes-sociais').innerHTML = "Síguenos";
	document.querySelector('#footer-direitos').innerHTML = "Vivace Engenharia LTDA - Algunos derechos reservados.";
}

function traduzInglesFooterAndHeader() {
	//Traduz todo menu
	document.querySelector('#menu-inicio').innerHTML = "Index";
	document.querySelector('#menu-sobre').innerHTML = "About";
	document.querySelector('#menu-servicos').innerHTML = "Services";
	document.querySelector('#menu-clientes').innerHTML = "Clients";
	document.querySelector('#menu-contato').innerHTML = "Contact";
	
	//Traduz todo menu-flutuante
	document.querySelector('#menu-inicio-flutuante').innerHTML = "Index";
	document.querySelector('#menu-sobre-flutuante').innerHTML = "About";
	document.querySelector('#menu-servicos-flutuante').innerHTML = "Services";
	document.querySelector('#menu-clientes-flutuante').innerHTML = "Clients";
	document.querySelector('#menu-contato-flutuante').innerHTML = "Contact";

	//Traduz footer
	document.querySelector('#footer-titulo').innerHTML = "Our Story";
	document.querySelector('#footer-historia').innerHTML = "Vivace has proven technical capacity and high competence in managing projects, focusing on customer needs and solutions with high added value.";
	document.querySelector('#footer-contato').innerHTML = "Contact";
	document.querySelector('#footer-redes-sociais').innerHTML = "Social Media";
	document.querySelector('#footer-direitos').innerHTML = "Vivace Engenharia LTDA - Some rights reserved.";
}


function traduzPortuguesFooterAndHeader() { 
	//Traduz todo menu
	document.querySelector('#menu-inicio').innerHTML = "Início";
	document.querySelector('#menu-sobre').innerHTML = "Sobre";
	document.querySelector('#menu-servicos').innerHTML = "Serviços";
	document.querySelector('#menu-clientes').innerHTML = "Clientes";
	document.querySelector('#menu-contato').innerHTML = "Contato";

	//Traduz todo menu-flutuante
	document.querySelector('#menu-inicio-flutuante').innerHTML = "Início";
	document.querySelector('#menu-sobre-flutuante').innerHTML = "Sobre";
	document.querySelector('#menu-servicos-flutuante').innerHTML = "Serviços";
	document.querySelector('#menu-clientes-flutuante').innerHTML = "Clientes";
	document.querySelector('#menu-contato-flutuante').innerHTML = "Contato";

	//Traduz footer
	document.querySelector('#footer-titulo').innerHTML = "Nossa História";
	document.querySelector('#footer-historia').innerHTML = "A Vivace possui comprovada capacidade técnica e alta competência em gerenciar projetos, com o foco nas necessidades dos clientes e com soluções de alto valor agregado.";
	document.querySelector('#footer-contato').innerHTML = "Contato";
	document.querySelector('#footer-redes-sociais').innerHTML = "Redes Sociais";
	document.querySelector('#footer-direitos').innerHTML = "Vivace Engenharia LTDA - Alguns direitos reservados.";
}