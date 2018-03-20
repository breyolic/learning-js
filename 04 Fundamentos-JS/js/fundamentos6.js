//DECLARACIÓN DE VARIABLES Y OBJETOS
var btnCalificación = document.querySelector("#calificacion");
var btnAdivina = document.querySelector("#adivina");
var btnEscribe = document.querySelector("#escribe");

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

function cargaDocumento()
{
 btnCalificación.addEventListener("click",obtenerCalificacion);
 btnAdivina.addEventListener("click",adivinarNumero)
 btnEscribe.addEventListener("click",cadenaTexto)
}

//ASIGNACIÓN DE EVENTOS

window.addEventListener("load",cargaDocumento)