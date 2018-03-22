//DECLARACIÓN DE VARIABLES Y OBJETOS

var agente = navigator.userAgent.toLowerCase();
var moviles = /iphone|ipod|ipad|android|blackberry|opera mini|iemobile|mobile/;
var plataforma,
	navegador;

//DECLARACIÓN DE FUNCIONES
function detectarDispositivo()
{
	//alert("Funciona");
	// console.log(navigator);
	// document.write(agente+"<br>");
	// document.write(agente.search(moviles));
	var aDondeVoy;
	if (agente.search(moviles)>-1) 
	{
		// alert("Estás en un Dispositivo Movil");
		aDondeVoy = "activos/mobile.html";
	}
	else
	{
		// alert("Estás en un Dispositivo de Escritorio");
		aDondeVoy = "activos/desktop.html";
	}
	window.location.href = aDondeVoy;
}

function detectarPlataforma()
{

	if (agente.indexOf("win") > -1) 
	{
		plataforma = (agente.search(moviles)>-1)?"Windows Phone":"Windows NT";
	}
	else if (agente.indexOf("mac") > -1) 
	{
		plataforma = (agente.search(moviles)>-1)?"iOS":"Mac OS";
	}
	else if (agente.indexOf("linux") > -1) 
	{
		plataforma = (agente.search(moviles)>-1)?"Android":"Linux";
	}
	else if (agente.indexOf("blackberry") > -1) 
	{
		plataforma = "Blackberry";
	}
	else
	{
		plataforma = (agente.search(moviles)>-1)?"Plataforma móvil descononcida":"Plataforma de escritorio desconocida";
	}
	document.getElementById("plataforma").innerHTML = plataforma;
}

function detectarIE()
{
	var posicionIE , versionIE;
	posicionIE = agente.indexOf("msie");
	//alert(posicionIE);

	versionIE = agente.substring(posicionIE+5,posicionIE+8);
	//alert(versionIE);
	if (agente.indexOf("rv:11")>-1) 
	{
		navegador = "IE 11";
	}
	else if (agente.indexOf("edge")>-1) 
	{
		navegador = "IE Edge";
	}
	else if (versionIE=="10.")
	{
		navegador = "IE 10";
	}
	else if (versionIE=="9.0")
	{
		navegador = "IE 9";
	}
	else if (versionIE=="8.0")
	{
		navegador = "IE 8";
	}
	else if (versionIE=="7.0")
	{
		navegador = "IE 7";
	}
	else
	{
		navegador = "Más viejo que IE 7";
	}
	return navegador;


}

function detectarNavegador()
{
	if (agente.indexOf("opr")>-1) 
	{
		navegador = "Opera";
	}
	else if (agente.indexOf("firefox")>-1) 
	{
		navegador = "Firefox";
	}
	else if (agente.indexOf("msie")>-1 || agente.indexOf("rv:11")>-1 || agente.indexOf("edge")>-1) 
	{
		detectarIE();
	}
	else if (agente.indexOf("chrome")>-1) 
	{
		navegador = "Chrome";
	}
	else
	{
		navegador = "Navegador Desconocido";
	}

	document.getElementById("navegador").innerHTML = navegador;

}

function detectarUsuario(){
	document.getElementById("user-agent").innerHTML = agente;
	detectarPlataforma();
	detectarNavegador();
}
//ASIGNACIÓN DE EVENTOS