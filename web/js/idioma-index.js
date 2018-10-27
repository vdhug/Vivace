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
	document.querySelector('#introducao-titulo').innerHTML = "Viene a ser Vivace";
	document.querySelector('#introducao-citacao').innerHTML = "Recuerde eso, los ingenieros hacen sueños en realidad.";
	document.querySelector('#introducao-orcamento').innerHTML = "Presupuesto";

	//Traduz toda area de serviços
	document.querySelector('#servicos-titulo').innerHTML = "Servicios";
	document.querySelector('#servico-manutencao-titulo').innerHTML = "Mantenimiento Predial";
	document.querySelector('#servico-manutencao-descricao').innerHTML = "Mantenimiento de sistemas eléctricos, hidráulicos y de refrigeración.";
	document.querySelector('#servico-projetos-titulo').innerHTML = "Proyectos de Ingeniería";
	document.querySelector('#servico-projetos-descricao').innerHTML = "Elaboración de proyectos en las diversas áreas de  la  ingeniería civil y elétrica.";
	document.querySelector('#servico-energia-titulo').innerHTML = "Energias Renovables";
	document.querySelector('#servico-energia-descricao').innerHTML = "Productos y servicios de generación de energía a partir de fuentes renovables.";
	document.querySelector('#servicos-etiqueta').innerHTML = "Haga clic aquí y vea el portafolio completo.";
	document.querySelector('#servicos-botao').innerHTML = "Servicios";

	//Traduz toda área de clientes
	document.querySelector('#cliente-titulo').innerHTML = "Clientes";
	document.querySelector('#cliente-etiqueta').innerHTML = "Conozca la opinión de nuestros clientes";
	document.querySelector('#cliente-botao').innerHTML = "Clientes";

	//Traduz toda área de políticas 
	document.querySelector('#politicas-titulo').innerHTML = "Políticas";
	document.querySelector('#politica-qualidade-titulo').innerHTML = "Calidad";
	document.querySelector('#politica-qualidade-descricao').innerHTML = "Consolidar como referencia en la calidad de productos y servicios en las áreas en que actúa.";
	document.querySelector('#politica-seguranca-titulo').innerHTML = "Seguridad";
	document.querySelector('#politica-seguranca-descricao').innerHTML = "El énfasis en la seguridad del trabajo, la salud y la integridad física son los mayores objetivos.";
	document.querySelector('#politica-sustentabilidade-titulo').innerHTML = "Sostenibilidad";
	document.querySelector('#politica-sustentabilidade-descricao').innerHTML = "Prevención y reducción de los impactos ambientales generados por sus actividades.";
	document.querySelector('#politicas-etiqueta').innerHTML = "Haga clic aquí y conozca más de nuestra políticas.";
	document.querySelector('#politicas-botao').innerHTML = "Políticas";

	//Traduz quebra
	document.querySelector('#quebra-citacao').innerHTML = "Recuerde eso, los ingenieros hacen sueños en realidad.";
}


function traduzIngles() {
	

	//Traduz toda introducao
	document.querySelector('#introducao-titulo').innerHTML = "Come to be Vivace";
	document.querySelector('#introducao-citacao').innerHTML = "Remember that, engineers make dreams come true.";
	document.querySelector('#introducao-orcamento').innerHTML = "Budget";

	//Traduz toda area de serviços
	document.querySelector('#servicos-titulo').innerHTML = "Services";
	document.querySelector('#servico-manutencao-titulo').innerHTML = "Building Maintenance";
	document.querySelector('#servico-manutencao-descricao').innerHTML = "Maintenance of electrical, hydraulic and refrigeration systems.";
	document.querySelector('#servico-projetos-titulo').innerHTML = "Engineering Projects";
	document.querySelector('#servico-projetos-descricao').innerHTML = "Elaboration of projects in the different areas of civil and eletrical engineering.";
	var w = window.innerWidth;
	if (w < 960 && w > 767){
		document.querySelector('#servico-energia-titulo').innerHTML = "Renewable </br> Energy";
	}
	else {
		document.querySelector('#servico-energia-titulo').innerHTML = "Renewable Energy";
	}
	document.querySelector('#servico-energia-descricao').innerHTML = "Products and services for the generation of energy from renewable sources.";
	document.querySelector('#servicos-etiqueta').innerHTML = "Click here to see the complete portfolio.";
	document.querySelector('#servicos-botao').innerHTML = "Services";

	//Traduz toda área de clientes
	document.querySelector('#cliente-titulo').innerHTML = "Clients";
	document.querySelector('#cliente-etiqueta').innerHTML = "Know the opinion of our customers";
	document.querySelector('#cliente-botao').innerHTML = "Clients";

	//Traduz toda área de políticas 
	document.querySelector('#politicas-titulo').innerHTML = "Policies";
	document.querySelector('#politica-qualidade-titulo').innerHTML = "Quality";
	document.querySelector('#politica-qualidade-descricao').innerHTML = "To consolidate itself as a reference in the quality of products and services in the areas in which it operates.";
	document.querySelector('#politica-seguranca-titulo').innerHTML = "Security";
	document.querySelector('#politica-seguranca-descricao').innerHTML = "Emphasis on work safety, health, and physical integrity are the major goals.";
	document.querySelector('#politica-sustentabilidade-titulo').innerHTML = "Sustentability";
	document.querySelector('#politica-sustentabilidade-descricao').innerHTML = "Prevention and reduction of the environmental impacts generated by its activities.";
	document.querySelector('#politicas-etiqueta').innerHTML = "Click here to know more about our policies.";
	document.querySelector('#politicas-botao').innerHTML = "Policies";

	//Traduz quebra
	document.querySelector('#quebra-citacao').innerHTML = "Remember that, engineers make dreams come true.";

	
}


function traduzPortugues() {
	
	//Traduz toda introducao
	document.querySelector('#introducao-titulo').innerHTML = "Vem ser Vivace";
	document.querySelector('#introducao-citacao').innerHTML = "Lembre-se disso, engenheiros tornam sonhos em realidade.";
	document.querySelector('#introducao-orcamento').innerHTML = "Orçamento";

	//Traduz toda area de serviços
	document.querySelector('#servicos-titulo').innerHTML = "Serviços";
	document.querySelector('#servico-manutencao-titulo').innerHTML = "Manutenção Predial";
	document.querySelector('#servico-manutencao-descricao').innerHTML = "Manutenção de sistemas elétricos, hidráulicos e de refrigeração.";
	document.querySelector('#servico-projetos-titulo').innerHTML = "Projetos";
	document.querySelector('#servico-projetos-descricao').innerHTML = "Elaboração de projetos nas diversas áreas da engenharia.";
	document.querySelector('#servico-energia-titulo').innerHTML = "Energias Renováveis";
	document.querySelector('#servico-energia-descricao').innerHTML = "Produtos e serviços de geração de energia a partir de fontes renováveis.";
	document.querySelector('#servicos-etiqueta').innerHTML = "Clique aqui e veja o portifólio completo.";
	document.querySelector('#servicos-botao').innerHTML = "Serviços";

	//Traduz toda área de clientes
	document.querySelector('#cliente-titulo').innerHTML = "Clientes";
	document.querySelector('#cliente-etiqueta').innerHTML = "Conheça a opinião de nossos clientes";
	document.querySelector('#cliente-botao').innerHTML = "Clientes";

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

	//Traduz quebra
	document.querySelector('#quebra-citacao').innerHTML = "Lembre-se disso, engenheiros tornam sonhos em realidade.";

	

}
