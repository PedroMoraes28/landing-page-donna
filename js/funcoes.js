/* Lê o XML */
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "xml/db_conteudo.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

let x = xmlDoc.getElementsByTagName("conteudo");

/* Exibe o conteúdo */

function titulo1() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write(x[i].getElementsByTagName("titulo1")[0].childNodes[0].nodeValue);
	}
}

function texto1() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write(x[i].getElementsByTagName("texto1")[0].childNodes[0].nodeValue);
	}
}

function titulo2() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write(x[i].getElementsByTagName("titulo2")[0].childNodes[0].nodeValue);
	}
}

function etapa1() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write(x[i].getElementsByTagName("etapa1")[0].childNodes[0].nodeValue);
	}
}
function etapa2() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write(x[i].getElementsByTagName("etapa2")[0].childNodes[0].nodeValue);
	}
}

function etapa3() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write(x[i].getElementsByTagName("etapa3")[0].childNodes[0].nodeValue);
	}
}

function titulo3() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write(x[i].getElementsByTagName("titulo3")[0].childNodes[0].nodeValue);
	}
}
function texto3() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write(x[i].getElementsByTagName("texto3")[0].childNodes[0].nodeValue);
	}
}

function titulo4() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write(x[i].getElementsByTagName("titulo4")[0].childNodes[0].nodeValue);
	}
}
function texto4() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write(x[i].getElementsByTagName("texto4")[0].childNodes[0].nodeValue);
	}
}

function titulo5() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write(x[i].getElementsByTagName("titulo5")[0].childNodes[0].nodeValue);
	}
}

function integrante1() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write(x[i].getElementsByTagName("integrante_1")[0].childNodes[0].nodeValue);
	}
}

function integrante2() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write(x[i].getElementsByTagName("integrante_2")[0].childNodes[0].nodeValue);
	}
}


