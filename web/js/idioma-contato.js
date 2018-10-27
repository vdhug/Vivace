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
	document.querySelector('#introducao-titulo').innerHTML = "Contato";
	document.querySelector('#introducao-descricao').innerHTML = "Tira tus dudas con nosotros";


	//Traduz form orcamento
	document.querySelector('#orcamento-nome').innerHTML = "Nombre";
	document.querySelector('#orcamento-email').innerHTML = "Email";
	document.querySelector('#orcamento-telefone').innerHTML = "Teléfono";
	document.querySelector('#orcamento-mensagem').innerHTML = "Mensaje";
	document.querySelector('#enviar').innerHTML = "Enviar";
	document.querySelector('#dados-titulo').innerHTML = "Datos";
	document.querySelector('#instrucoes-titulo').innerHTML = "Pieza su presupuesto";
	document.querySelector('#instrucoes-descricao').innerHTML = "Información sugerida para incluir en el mensaje";
	document.querySelector('#instrucao1').innerHTML = "- Tamaño de la construcción";
	document.querySelector('#instrucao2').innerHTML = "- Tipo (residencial o comercial)";
	document.querySelector('#instrucao3').innerHTML = "- Servicio deseado";

}


function traduzIngles() {
	

	//Traduz toda introducao
	document.querySelector('#introducao-titulo').innerHTML = "Contact";
	document.querySelector('#introducao-descricao').innerHTML = "Enter in contact with us";

	
	//Traduz form orcamento
	document.querySelector('#orcamento-nome').innerHTML = "Name";
	document.querySelector('#orcamento-email').innerHTML = "Email";
	document.querySelector('#orcamento-telefone').innerHTML = "Phone";
	document.querySelector('#orcamento-mensagem').innerHTML = "Message";
	document.querySelector('#enviar').innerHTML = "Send";
	document.querySelector('#dados-titulo').innerHTML = "Data";
	document.querySelector('#instrucoes-titulo').innerHTML = "Ask your budget";
	document.querySelector('#instrucoes-descricao').innerHTML = "Suggested information to include in the message";
	document.querySelector('#instrucao1').innerHTML = "- Size of the building";
	document.querySelector('#instrucao2').innerHTML = "- Type (residential or commercial)";
	document.querySelector('#instrucao3').innerHTML = "- Desired Service";

}


function traduzPortugues() {
	

	//Traduz toda introducao
	document.querySelector('#introducao-titulo').innerHTML = "Contato";
	document.querySelector('#introducao-descricao').innerHTML = "Tire suas dúvidas com a gente";

	
	//Traduz form orcamento
	document.querySelector('#orcamento-nome').innerHTML = "Nome";
	document.querySelector('#orcamento-email').innerHTML = "Email";
	document.querySelector('#orcamento-telefone').innerHTML = "Telefone";
	document.querySelector('#orcamento-mensagem').innerHTML = "Mensagem";
	document.querySelector('#enviar').innerHTML = "Enviar";
	document.querySelector('#dados-titulo').innerHTML = "Dados";
	document.querySelector('#instrucoes-titulo').innerHTML = "Peça seu orçamento";
	document.querySelector('#instrucoes-descricao').innerHTML = "Informações sugeridas para incluir na mensagem";
	document.querySelector('#instrucao1').innerHTML = "- Tamanho da construção";
	document.querySelector('#instrucao2').innerHTML = "- Tipo (residencial ou comercial)";
	document.querySelector('#instrucao3').innerHTML = "- Serviço desejado";

}
