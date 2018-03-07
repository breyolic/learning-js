//DECLARACIÓN DE OBJETOS Y VARIABLES
var turno = 1;
var queTurno;
var arregloGato = new Array(9);
var celdas = document.getElementsByClassName("gato");
//var etiqueta = document.getElementsByTagName("td");
//console.log(etiqueta);


//DECLARACIÓN DE FUNCIONES
function ganaJugador(letra)
{
	if(	
		(arregloGato[0]==letra && arregloGato[1]==letra && arregloGato[2]==letra) || 
		(arregloGato[3]==letra && arregloGato[4]==letra && arregloGato[5]==letra) ||
		(arregloGato[6]==letra && arregloGato[7]==letra && arregloGato[8]==letra) ||
		(arregloGato[0]==letra && arregloGato[3]==letra && arregloGato[6]==letra) ||
		(arregloGato[1]==letra && arregloGato[4]==letra && arregloGato[7]==letra) ||
		(arregloGato[2]==letra && arregloGato[5]==letra && arregloGato[8]==letra) ||
		(arregloGato[0]==letra && arregloGato[4]==letra && arregloGato[8]==letra) ||
		(arregloGato[2]==letra && arregloGato[4]==letra && arregloGato[6]==letra) 
	)
	{
		alert("Jugador " + letra + " gana");
		window.location.reload();
	}
}

function gato(evento)
{
	//alert("Funciona Gato")
	//alert(evento.target.id);
	var celda = evento.target;
	celda.removeEventListener("click",gato);
	var idCelda = evento.target.id;
	//console.log(idCelda.length);
	//alert(idCelda[1])

	var posicionAMarcar = idCelda[1]-1;
	//console.log(posicionAMarcar);

	queTurno = turno % 2

	if(queTurno != 0)
	{
		celda.innerHTML = "X";
		celda.style.background = "#EC673A";
		arregloGato[posicionAMarcar] = "X";
		ganaJugador("X");
	}
	else if(queTurno == 0)
	{
		celda.innerHTML = "O";
		celda.style.background = "#1C5F81"
		arregloGato[posicionAMarcar] = "O";
		ganaJugador("O");
	}
	console.log(arregloGato);
	if (turno == 9) 
	{
		alert("empate");
		//console.log(window.location);
		window.location.reload();
	}
	else
	{
		turno ++;
	}

}

function cargarDocumento()
{
	//document.getElementById("c1").addEventListener("click",gato);
	//document.getElementByClassName("gato").addEventListener("click",gato);
	//console.log(document.getElementsByClassName("gato"));
	//document.getElementsByClassName("gato")[4].addEventListener("click",gato);

	var n = 0;

	while(n < celdas.length)
	{
		celdas[n].addEventListener("click",gato);
		n += 1;
	}

}

//ASIGNACIÓN DE EVENTOS
window.addEventListener("load",cargarDocumento);