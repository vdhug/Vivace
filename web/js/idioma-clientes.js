var idioma = "portugues";

document.addEventListener('DOMContentLoaded', function() {
    if ((getQueryStringValue("lg")) != ""){
    	idioma = getQueryStringValue("lg");
    }
    if(idioma === "espanhol"){
    	espanhol();
    }
    else if (idioma === "ingles"){
    	ingles();
    }

});


function getQueryStringValue (key) {  
  return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
} 

// Function to change the currently language to PT-BR
function portugues() {
    idioma = "portugues";
    traduzPortugues();
	return false;
}

// Function to change the currently language to ES_MX
function espanhol() {
    idioma = "espanhol";
    traduzEspanhol();
	return false;
}

// Function to change the currently language EN-US
function ingles() {
    idioma = "ingles";
    traduzIngles();
	return false;
}

function traduzEspanhol() {
	

	//Traduz toda introducao
	document.querySelector('#introducao-titulo').innerHTML = "Clientes";
	document.querySelector('#introducao-descricao').innerHTML = "Conozca la opinión de nuestros clientes";

	//Traduz opinioes
	document.querySelector('#opiniao1').innerHTML = "Empresa de ingeniería con excelentes profesionales, atenciosos durante todo el servicio, y todo ello, a un precio muy justo.";
	document.querySelector('#opiniao2').innerHTML = "¡Excelente empresa! Atención al cliente, con un servicio de óptima calidad por el precio al mejor precio.";
	document.querySelector('#opiniao3').innerHTML = "Servicio con calidad garantizada por el menor precio posible. Extremadamente satisfecho con el servicio presentado por la compañía.";
	document.querySelector('#opiniao4').innerHTML = "Hacer negocios con Vivace fue mi mejor decisión. Empresa altamente responsable y con un servicio de altísima calidad.";

	//Traduz quebra
	document.querySelector('#quebra-citacao').innerHTML = "Recuerde eso, los ingenieros hacen sueños en realidad.";

	

}


function traduzIngles() {
	

	//Traduz toda introducao
	document.querySelector('#introducao-titulo').innerHTML = "Clients";
	document.querySelector('#introducao-descricao').innerHTML = "Know the opinion of our customers";

	//Traduz opinioes
	document.querySelector('#opiniao1').innerHTML = "Engineering company with great professionals, attentive throughout the service, and all this, for a very fair price.";
	document.querySelector('#opiniao2').innerHTML = "Great company !! Distinguished service, with an excellent service for the lowest price possible.";
	document.querySelector('#opiniao3').innerHTML = "Quality service guaranteed for the lowest possible price. Extremely satisfied with the service presented by the company.";
	document.querySelector('#opiniao4').innerHTML = "Doing business with Vivace was my best decision. Highly responsible company with a very high quality service.";
	
	//Traduz quebra
	document.querySelector('#quebra-citacao').innerHTML = "Remember that, engineers make dreams come true.";
	
	

}


function traduzPortugues() {
	
	//Traduz toda introducao
	document.querySelector('#introducao-titulo').innerHTML = "Clientes";
	document.querySelector('#introducao-descricao').innerHTML = "Conheça a opinião de nossos clientes";

	//Traduz opinioes
	document.querySelector('#opiniao1').innerHTML = "Empresa de engenharia com ótimos profissionais, atenciosos durante todo o serviço, e tudo isso, por um preço muito justo.";
	document.querySelector('#opiniao2').innerHTML = "Ótima empresa!! Atendimento diferenciado, com um serviço de ótima qualidade pelo ´menor preço possível.";
	document.querySelector('#opiniao3').innerHTML = "Serviço com qualidade garantida pelo menor preço possível. Extremamente satisfeito com o serviço apresentado pela companhia.";
	document.querySelector('#opiniao4').innerHTML = "Fazer negócios com a Vivace foi minha melhor decisão. Empresa altamente responsável e com um serviço de altíssima qualidade.";

	//Traduz quebra
	document.querySelector('#quebra-citacao').innerHTML = "Lembre-se disso, engenheiros tornam sonhos em realidade.";

	

}
