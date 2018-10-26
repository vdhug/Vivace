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
	//Traduz todo menu
	document.querySelector('#menu-inicio').innerHTML = "Inicio";
	document.querySelector('#menu-sobre').innerHTML = "Sobre";
	document.querySelector('#menu-servicos').innerHTML = "Servicios";
	document.querySelector('#menu-clientes').innerHTML = "Clientes";
	document.querySelector('#menu-contato').innerHTML = "Contacto";

	//Traduz toda introducao
	document.querySelector('#introducao-titulo').innerHTML = "Servicios";
	document.querySelector('#introducao-descricao').innerHTML = "Conozca más sobre nuestros servicios";

	//Traduz toda area de serviços
	document.querySelector('#servico-manutencao-titulo').innerHTML = "Mantenimiento Predial";
	document.querySelector('#servico-manutencao-descricao').innerHTML = "Vivace ofrece mantenimiento hidráulico, de sistemas de climatización y seguridad, de sistemas eléctricos de baja y alta tensión, carpintería, cerrajería y reparaciones.";

	document.querySelector('#servico-projetos-titulo').innerHTML = "Proyectos de Ingeniería";
	document.querySelector('#servico-projetos-descricao').innerHTML = "Vivace ofrece a sus clientes, la elaboración de proyectos eléctricos, telefónicos, subestación, hidrosanitarios, luminotécnicos, arquitectónicos, sistemas de protección contra descargas atmosféricas - SPDA y sistemas de protección contra incendios - SPCI.";

	document.querySelector('#servico-energia-titulo').innerHTML = "Energias Renovables";
	document.querySelector('#servico-energia-descricao').innerHTML = "Vivace ofrece elaboración de proyectos involucrando energías renovables y adecuación para la inclusión del sistema de energía renovable, implantación de sistema fotovoltaico y de generación de energía con biomasa.";
	

	//Traduz form orcamento
	document.querySelector('#orcamento-titulo').innerHTML = "Presupuesto";
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

	//Traduz quebra
	document.querySelector('#quebra-citacao').innerHTML = "Recuerde eso, los ingenieros hacen sueños en realidad.";

	//Traduz footer
	document.querySelector('#footer-titulo').innerHTML = "Nuestra Historia";
	document.querySelector('#footer-historia').innerHTML = "La Vivace tiene una sólida capacidad técnica y alta competencia en gestionar proyectos, con el foco en las necesidades de los clientes y con soluciones de alto valor agregado.";
	document.querySelector('#footer-contato').innerHTML = "Contacto";
	document.querySelector('#footer-redes-sociais').innerHTML = "Síguenos";
	document.querySelector('#footer-direitos').innerHTML = "Vivace Engenharia LTDA - Algunos derechos reservados.";

}


function traduzIngles() {
	//Traduz todo menu
	document.querySelector('#menu-inicio').innerHTML = "Index";
	document.querySelector('#menu-sobre').innerHTML = "About";
	document.querySelector('#menu-servicos').innerHTML = "Services";
	document.querySelector('#menu-clientes').innerHTML = "Clients";
	document.querySelector('#menu-contato').innerHTML = "Contact";

	//Traduz toda introducao
	document.querySelector('#introducao-titulo').innerHTML = "Services";
	document.querySelector('#introducao-descricao').innerHTML = "Know more about our services";

	//Traduz toda area de serviços
	document.querySelector('#servico-manutencao-titulo').innerHTML = "Building Maintenance";
	document.querySelector('#servico-manutencao-descricao').innerHTML = "Vivace offers hydraulic maintenance, air conditioning and safety systems, low and high voltage electrical systems, joinery, locksmithing and repairs.";

	document.querySelector('#servico-projetos-titulo').innerHTML = "Engineering Projects";
	document.querySelector('#servico-projetos-descricao').innerHTML = "Vivace offers to its clients the elaboration of electrical, telephone, substation, hydrosanitary, architectural, architectural, lightning protection systems - SPDA and fire protection systems - SPCI.";

	document.querySelector('#servico-energia-titulo').innerHTML = "Renewable Energy";
	document.querySelector('#servico-energia-descricao').innerHTML = "Vivace offers elaboration of projects involving renewable energies and suitability for inclusion of renewable energy system, implantation of photovoltaic system and generation of energy with biomass.";
	

	//Traduz form orcamento
	document.querySelector('#orcamento-titulo').innerHTML = "Budget";
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

	//Traduz quebra
	document.querySelector('#quebra-citacao').innerHTML = "Remember that, engineers make dreams come true.";
	
	//Traduz footer
	document.querySelector('#footer-titulo').innerHTML = "Our Story";
	document.querySelector('#footer-historia').innerHTML = "Vivace has proven technical capacity and high competence in managing projects, focusing on customer needs and solutions with high added value.";
	document.querySelector('#footer-contato').innerHTML = "Contact";
	document.querySelector('#footer-redes-sociais').innerHTML = "Social Media";
	document.querySelector('#footer-direitos').innerHTML = "Vivace Engenharia LTDA - Some rights reserved.";

}


function traduzPortugues() {
	//Traduz todo menu
	document.querySelector('#menu-inicio').innerHTML = "Início";
	document.querySelector('#menu-sobre').innerHTML = "Sobre";
	document.querySelector('#menu-servicos').innerHTML = "Serviços";
	document.querySelector('#menu-clientes').innerHTML = "Clientes";
	document.querySelector('#menu-contato').innerHTML = "Contato";

	//Traduz toda introducao
	document.querySelector('#introducao-titulo').innerHTML = "Serviços";
	document.querySelector('#introducao-descricao').innerHTML = "Conheça mais sobre os nossos serviços";

	//Traduz toda area de serviços
	document.querySelector('#servico-manutencao-titulo').innerHTML = "Manutenção Predial";
	document.querySelector('#servico-manutencao-descricao').innerHTML = "A Vivace oferece manutenção hidráulica, de sistemas de climatização e segurança, de sistemas elétricos de baixa e alta tensão, marcenaria, serralheria e reparos.";

	document.querySelector('#servico-projetos-titulo').innerHTML = "Projetos de Engenharia";
	document.querySelector('#servico-projetos-descricao').innerHTML = "A Vivace oferece aos seus clientes, a elaboração de projetos elétricos, telefônicos, subestação, hidrossanitários, luminotécnicos, arquitetônicos, sistemas de proteção contra descargas atmosféricas - SPDA e sistemas de proteção contra incêndios - SPCI.";

	document.querySelector('#servico-energia-titulo').innerHTML = "Energia Renováveis";
	document.querySelector('#servico-energia-descricao').innerHTML = "A Vivace oferece elaboração de projetos envolvendo energias renováveis e adequação para inclusão de sistema de energia renovável, implantação de sistema fotovoltaico e de geração de energia com biomassa.";
	

	//Traduz form orcamento
	document.querySelector('#orcamento-titulo').innerHTML = "Orçamento";
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

	//Traduz quebra
	document.querySelector('#quebra-citacao').innerHTML = "Lembre-se disso, engenheiros tornam sonhos em realidade.";

	//Traduz footer
	document.querySelector('#footer-titulo').innerHTML = "Nossa História";
	document.querySelector('#footer-historia').innerHTML = "A Vivace possui comprovada capacidade técnica e alta competência em gerenciar projetos, com o foco nas necessidades dos clientes e com soluções de alto valor agregado.";
	document.querySelector('#footer-contato').innerHTML = "Contato";
	document.querySelector('#footer-redes-sociais').innerHTML = "Redes Sociais";
	document.querySelector('#footer-direitos').innerHTML = "Vivace Engenharia LTDA - Alguns direitos reservados.";

}
