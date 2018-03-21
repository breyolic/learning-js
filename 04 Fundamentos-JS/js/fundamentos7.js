//DECLARACIÓN DE OBJETOS Y VARIABLES

var down = document.querySelector("#down"),
	press = document.querySelector("#press"),
	up = document.querySelector("#up"),
	leftToRight = 0,
	topToBottom = 0,
	pagina = document.querySelector("#pagina"),
	pantalla = document.querySelector("#pantalla"),
	barra = document.querySelector("#barra"),
	subir = document.querySelector("#subir"),
	mapa = document.querySelector("#mapa"),
	iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3884.9883251813944!2d-72.5471516!3d-13.163136!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1521609991624" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>';

//DECLARACIÓN DE FUNCIONES

function moverObjeto(queTecla)
{
	//console.log(queTecla);
	if (queTecla == 37) //izq
	{
		// caja.style.left = "-100px";
		leftToRight -=10 ;
		caja.style.left = leftToRight+"px";
	}
	else if (queTecla == 38) //arriba
	{
		// caja.style.top = "-100px";
		topToBottom -=10;
		caja.style.top = topToBottom+"px";
	}
	else if (queTecla == 39) //der
	{
		// caja.style.left = "100px";
		leftToRight +=10 ;
		caja.style.left = leftToRight+"px";
		
	}
	else if (queTecla == 40) //abajo
	{
		// caja.style.top = "100px";
		topToBottom +=10;
		caja.style.top = topToBottom+"px";
		
	}
	else if (queTecla == 82) //abajo
	{
		caja.style.borderRadius = "100%";
		
	}
	else if (queTecla == 67) //abajo
	{
		caja.style.borderRadius = "0%";		
		
	}

}

function teclado(evento)
{
	//console.log("Parámetro",evento);
	//evento = window.event;
	//console.log("Objeto",evento);

	if(evento.type=="keydown")
	{
		down.innerHTML = "keydown: "+String.fromCharCode(evento.keyCode)+"-"+ evento.keyCode;
	}
	else if(evento.type=="keypress")
	{
		press.innerHTML = "keypress: "+String.fromCharCode(evento.keyCode)+"-"+ evento.keyCode;
	}
	else if(evento.type=="keyup")
	{
		up.innerHTML = "keyup: "+String.fromCharCode(evento.keyCode)+"-"+ evento.keyCode;
	}

	moverObjeto(evento.keyCode);
}

function raton(evento)
{
	// console.log(evento);
	pagina.innerHTML = "Coordenadas del ratón en la página: X("+evento.pageX+"), Y("+evento.pageY+")";
	pantalla.innerHTML = "Coordenadas del ratón en la pantalla: X("+evento.screenX+"), Y("+evento.screenY+")";
}

function barrasScroll(evento)
{
	//console.log(evento);
	var barraV = document.scrollingElement.scrollTop,
		barraH = document.scrollingElement.scrollLeft;
	//console.log(barraH,barraV);

	if (barraV > 100) 
	{
		subir.style.opacity = 1;
	}
	else
	{
		subir.style.opacity = 0;
	}
}

function mediaQueries()
{
	var ancho = window.innerWidth;
	var alto = window.innerHeight;
	console.log(ancho,alto);
	if (ancho > 1024) 
	{
		mapa.innerHTML = iframe;

	}
	else
	{
		mapa.innerHTML = null;
	}
}

function cargaDocumento()
{
	document.addEventListener("keydown",teclado);
	document.addEventListener("keypress",teclado);
	document.addEventListener("keyup",teclado);

	document.addEventListener("mousemove",raton);

	window.addEventListener("scroll",barrasScroll);

	subir.addEventListener("click",function(){
		document.scrollingElement.scrollTop = 0;
		document.scrollingElement.scrollLeft = 0;
	});

	window.addEventListener("resize",mediaQueries);


}

//ASIGNACIÓN DE EVENTOS
window.addEventListener("load",cargaDocumento);