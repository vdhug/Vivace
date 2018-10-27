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
	document.querySelector('#introducao-titulo').innerHTML = "Sobre";
	document.querySelector('#introducao-descricao').innerHTML = "Conozca más sobre Vivace Ingeniería";

	//Traduz Histora, Missão,  Visão e Valores
	document.querySelector('#missao-titulo').innerHTML = "Historia, Misión y visión";
	document.querySelector('#historia').innerHTML = "Vivace tiene una sólida capacidad técnica y alta competencia en gestionar proyectos, con el foco en las necesidades de los clientes y con soluciones de alto valor agregado.";
	document.querySelector('#missao').innerHTML = "Nuestros profesionales están preparados y entrenados para estar plenamente comprometidos, buscando siempre las soluciones más adecuadas a las necesidades ya los intereses del cliente.";
	document.querySelector('#visao').innerHTML = "La empresa dirige sus esfuerzos en la búsqueda de rapidez, calidad, flexibilidad y perfecta atención a las demandas provenientes de clientes, empleados y proveedores.";
	document.querySelector('#valores-titulo').innerHTML = "Valores";
	document.querySelector('#valor1').innerHTML = "Orientada a la solución.";
	document.querySelector('#valor2').innerHTML = "Enfoque en el cliente.";
	document.querySelector('#valor3').innerHTML = "Comprobada alta capacidad técnica.";
	document.querySelector('#valor4').innerHTML = "Trabajo alineado con la sostenibilidad.";
	

	//Traduz toda área de políticas 
	document.querySelector('#politicas-titulo').innerHTML = "Políticas";
	document.querySelector('#politica-qualidade-titulo').innerHTML = "Calidad";
	document.querySelector('#politica-qualidade-descricao').innerHTML = "Consolidar como referencia en la calidad de productos y servicios en las áreas en que actúa.";
	document.querySelector('#politica-seguranca-titulo').innerHTML = "Seguridad";
	document.querySelector('#politica-seguranca-descricao').innerHTML = "El énfasis en la seguridad del trabajo, la salud y la integridad física son los mayores objetivos.";
	document.querySelector('#politica-sustentabilidade-titulo').innerHTML = "Sostenibilidad";
	document.querySelector('#politica-sustentabilidade-descricao').innerHTML = "Prevención y reducción de los impactos ambientales generados por sus actividades.";

}


function traduzIngles() {
	
	//Traduz toda introducao
	document.querySelector('#introducao-titulo').innerHTML = "About";
	document.querySelector('#introducao-descricao').innerHTML = "Know more about Vivace Engineering";

	//Traduz Histora, Missão,  Visão e Valores
	document.querySelector('#missao-titulo').innerHTML = "History, Mission and Vision";
	document.querySelector('#historia').innerHTML = "Vivace has proven technical capacity and high competence in managing projects, focusing on customer needs and solutions with high added value.";
	document.querySelector('#missao').innerHTML = "Our professionals are prepared and trained to be fully committed, always seeking the most appropriate solutions to the needs and interests of the client.";
	document.querySelector('#visao').innerHTML = "The company directs its efforts in the search of speed, quality, flexibility and perfect attendance to the demands coming from customers, employees and suppliers.";
	document.querySelector('#valores-titulo').innerHTML = "Values";
	document.querySelector('#valor1').innerHTML = "Solution oriented.";
	document.querySelector('#valor2').innerHTML = "Customer focus.";
	document.querySelector('#valor3').innerHTML = "Proven high technical capacity.";
	document.querySelector('#valor4').innerHTML = "Work aligned with sustainability.";
	

	//Traduz toda área de políticas 
	document.querySelector('#politicas-titulo').innerHTML = "Policies";
	document.querySelector('#politica-qualidade-titulo').innerHTML = "Quality";
	document.querySelector('#politica-qualidade-descricao').innerHTML = "To consolidate itself as a reference in the quality of products and services in the areas in which it operates.";
	document.querySelector('#politica-seguranca-titulo').innerHTML = "Security";
	document.querySelector('#politica-seguranca-descricao').innerHTML = "Emphasis on work safety, health, and physical integrity are the major goals.";
	document.querySelector('#politica-sustentabilidade-titulo').innerHTML = "Sustentability";
	document.querySelector('#politica-sustentabilidade-descricao').innerHTML = "Prevention and reduction of the environmental impacts generated by its activities.";

}


function traduzPortugues() {

	//Traduz toda introducao
	document.querySelector('#introducao-titulo').innerHTML = "Sobre";
	document.querySelector('#introducao-descricao').innerHTML = "Conheça mais sobre a Vivace Engenharia";

	//Traduz Histora, Missão,  Visão e Valores
	document.querySelector('#missao-titulo').innerHTML = "História, Missão e Visão";
	document.querySelector('#historia').innerHTML = "A Vivace possui comprovada capacidade técnica e alta competência em gerenciar projetos, com o foco nas necessidades dos clientes e com soluções de alto valor agregado.";
	document.querySelector('#missao').innerHTML = "Os nossos profissionais são preparados e treinados para estarem plenamente comprometidos, buscando sempre as soluções mais adequadas às necessidades e aos interesses do cliente.";
	document.querySelector('#visao').innerHTML = "A empresa direciona seus esforços na busca de rapidez, qualidade, flexibilidade e perfeito atendimento às demandas advindas de clientes, funcionários e fornecedores.";

	document.querySelector('#valores-titulo').innerHTML = "Valores";
	document.querySelector('#valor1').innerHTML = "Orientada a solução.";
	document.querySelector('#valor2').innerHTML = "Foco no cliente.";
	document.querySelector('#valor3').innerHTML = "Comprovada alta capacidade técnica.";
	document.querySelector('#valor4').innerHTML = "Trabalho alinhado com a sustentabilidade.";

	//Traduz toda área de políticas 
	document.querySelector('#politicas-titulo').innerHTML = "Políticas";
	document.querySelector('#politica-qualidade-titulo').innerHTML = "Qualidade";
	document.querySelector('#politica-qualidade-descricao').innerHTML = "Consolidar-se como referência na qualidade de produtos e serviços nas áreas em que atua.";
	document.querySelector('#politica-seguranca-titulo').innerHTML = "Segurança";
	document.querySelector('#politica-seguranca-descricao').innerHTML = "Ênfase em segurança do trabalho, saúde e integridade física são os maiores objetivos.";
	document.querySelector('#politica-sustentabilidade-titulo').innerHTML = "Sustentabilidade";
	document.querySelector('#politica-sustentabilidade-descricao').innerHTML = "Prevenção e a redução dos impactos ambientais gerados por suas atividades.";
	document.querySelector('#politicas-etiqueta').innerHTML = "Clique aqui e conheça mais nossas políticas.";
	document.querySelector('#politicas-botao').innerHTML = "Políticas";
}
