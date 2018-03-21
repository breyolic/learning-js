//DECLARACIÓN DE VARIABLES Y OBJETOS
var btnCalificación = document.querySelector("#calificacion");
var btnAdivina = document.querySelector("#adivina");
var btnEscribe = document.querySelector("#escribe");

var frmRFC = document.querySelector("#rfc");
var nombre = document.querySelector("#nombre");
var apaterno = document.querySelector("#apaterno");
var amaterno = document.querySelector("#amaterno");
var nacimiento = document.querySelector("#nacimiento");
var homoclave = document.querySelector("#homoclave");
var enviar = document.querySelector("#enviar");
var respuesta = document.querySelector("#respuesta");

//EXPRESIONES REGULARES
//empieza con /^ y termina con $/

var expRegNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúü\s]+$/;
var expRegFecha = /^(0?[1-9]|[12][0-9]|3[01])[\-](0?[1-9]|1[012])[\-](19|20)\d{2}$/;
var expRegClave = /^[\w][\w][\w]$/;


//DECLARACIÓN DE FUNCIONES

function obtenerCalificacion()
{
	var calificacion = prompt("¿Cuál es tu calificación?");

	if(isNaN(calificacion))
	{
		alert("No me engañes, esa no es una calificación");
	}
	else
	{
		var redondear = Math.round(calificacion);
		alert("Tu calificación es:"+redondear);
	}
}

function adivinarNumero()
{
	// alert("adivina");

	var numero = prompt("¿Adivina un número entre 1 y 10 ?");
	var aleatorio, siAdivine, noAdivine, adivina;
	if (isNaN(numero))
	{
		alert("No me engañes, eso no es un número");
	}
	else
	{
		// aleatorio = Math.random();
		// aleatorio = Math.random()*10;
		aleatorio = Math.round(Math.random()*10);

		siAdivine = "¡Felicidades Adivinaste!, el número es "+aleatorio;
		noAdivine = "¡Suerte para la próxima!, el número era "+aleatorio+" y tú elegiste "+numero;

		adivina = (aleatorio == numero)?siAdivine:noAdivine;
		alert(adivina);
	}
}

function cadenaTexto()
{
	var cadena = prompt("Escribe algo");
	var longitud = cadena.length;
	var mayusculas = cadena.toUpperCase();
	var minusculas = cadena.toLowerCase();

	alert("Cadena original: '"+cadena+"'\nLongitud: "+longitud+"\nMayúsculas: "+mayusculas+"\nMinusculas: "+minusculas);
}

function generarRFC(evento)
{
	/*
	RFC: 13 caracteres
		1)Primeros 2 caracteres del Apellido Paterno
		2)Primer caracter del Apellido Materno
		3)Primer caracter del nombre
		4)Fecha de Nacimiento formato aammddd
		5)Homoclave 3 caracteres
	*/

	evento.preventDefault();
	// alert("He prevenido el evento submit del formulario");
	var rfc = apaterno.value.substring(0,2);
	rfc += amaterno.value.charAt(0);
	rfc += nombre.value.charAt(0);
	//31-07-1997
	//0123456789
	rfc += nacimiento.value.substring(8);
	rfc += nacimiento.value.substring(3,5);
	rfc += nacimiento.value.substring(0,2);
	rfc += homoclave.value;

	respuesta.style.fontsize = "32px";
	respuesta.innerHTML = "Tu RFC es "+ rfc.toUpperCase();

}

function validarDatos(evento)
{
	// alert("Probando blur");
	// console.log(evento.target);

	var queCaja = evento.target, 
		validado = true,
		color;
	if (queCaja.id == 'nombre' || queCaja.id == "apaterno" || queCaja.id == "amaterno") 
	{
		if(!expRegNombre.exec(queCaja.value))
		{
			alert("El campo "+queCaja.placeholder+" sólo acepta letras y espacios en blanco");
			validado = false;
			queCaja.focus();
		}
	}
	else if(queCaja.id == "nacimiento")
	{
		if(!expRegFecha.exec(queCaja.value))
		{
			alert("El campo fechas sólo acepta fechas en formato "+queCaja.placeholder);
			validado = false;
			queCaja.focus();
		}
	}
	else if(queCaja.id == "homoclave")
	{
		if(!expRegClave.exec(queCaja.value))
		{
			alert("La homoclave "+queCaja.placeholder);
			validado = false;
			queCaja.focus();
		}
	}

	color = (validado)?"green":"red";
	queCaja.style.outline = "thin solid "+color;
}

function cargaDocumento()
{
 btnCalificación.addEventListener("click",obtenerCalificacion);
 btnAdivina.addEventListener("click",adivinarNumero);
 btnEscribe.addEventListener("click",cadenaTexto);
 
 frmRFC.addEventListener("submit",generarRFC);

 nombre.addEventListener("blur", validarDatos);
 apaterno.addEventListener("blur", validarDatos);
 amaterno.addEventListener("blur", validarDatos);
 nacimiento.addEventListener("blur", validarDatos);
 homoclave.addEventListener("blur", validarDatos);

}

//ASIGNACIÓN DE EVENTOS

window.addEventListener("load",cargaDocumento)