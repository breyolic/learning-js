//DECLARACIÓN DE OBJETOS Y VARIABLES
var boton = document.getElementById("boton");
var boton2 = document.getElementById("boton2");

var numero = document.getElementById("numero");

//DECLARACIÓN DE FUNCIONES
function eventoClick(evento)
{
	//alert("Has presionado el botón"+evento);
	alert("Has presionado el botón en el evento '"+evento.type+"' con el objeto de nombre '"+evento.target.id+"'");
	console.log(evento);

	evento.target.style.borderRadius = "1em";
	evento.target.style.fontSize = "2em";

	boton2.removeEventListener("click",eventoClick);
	boton2.addEventListener("dblclick",otroEventoClick);

}

function otroEventoClick(evento)
{
	alert("Has presionado el botón en el evento '"+evento.type+"' con el objeto de nombre '"+evento.target.id+"'");
	console.log(evento);

	evento.target.style.background = "black";
	evento.target.style.color = "white";
}

function parImpar()
{
	var numero = prompt("Ingresa un número: ");
	//isNaN = Is Not a Number; true->es alfanumerico, false-> es numero
	if(isNaN(numero))
	{
		alert("No me engañes, eso no es un número");
	}
	else
	{
		//alert("Es un número")
		var modulo = numero % 2;
		//var tipo = (modulo==0)?"Par":"Impar";
		var tipo = (modulo==1)?"Impar":"Par";
		alert("El número " + numero + " es " + tipo);
	}
}
//ASIGNACIÓN DE EVENTOS
//Los manejadores de eventos semánticos se ejecutan a la carga del documento
window.onload = function()
{
	boton.onclick = eventoClick;
	boton.onclick = otroEventoClick;

	boton2.addEventListener("click",eventoClick);

	numero.addEventListener("click",parImpar)

}