//DECLARACIÓN DE VARIABLES Y OBJETOS

var Animal = function(t)
{
	var o = this;
	o.tipo = t;

	o.saluda = function(s)
	{
		//alert(s);
		var audio = document.createElement("audio");
		audio.src = "activos/"+s+".mp3";
		return audio.play();
	}
}

var Perro = function(n)
{
	var o = this;
	o.nombre = n
}

var Gato = function(n)
{
	var o = this;
	o.nombre = n
}

//Con ayuda del prototipo de JS vamos a extender las caracteristicas de mi clase Animal
Animal.prototype.domestico = false;

Animal.prototype.aparecer = function(n)
{
	var imagen = document.createElement("img");
	imagen.src = "activos/"+n+".jpg";
	imagen.id = n;
	document.body.appendChild(imagen);
	return imagen;
}

//Objeto Pockis sin heredar
var oPockis = new Perro("Pockis");
console.log(oPockis);

//Herencia mediante el prototipo de JS
Perro.prototype = new Animal("Mamífero");
Perro.prototype.domestico=true;

Gato.prototype = new Animal("Mamífero");
Gato.prototype.domestico=true;


//objeto Pockis con los protos heredados
var pPockis = new Perro("Pockis");
console.log(pPockis);
pPockis.saluda("guau");
pPockis.aparecer("kenai");

var pPollis = new Gato("Pollis");
pPollis.saluda("miau");
pPollis.aparecer("mauricio");


//DECLARACIÓN DE FUNCIONES

//ASIGNACION DE EVENTOS

window.addEventListener("load",function(){
	document.querySelector("#kenai").addEventListener("click",function(){
		pPockis.saluda("guau");
	});
	document.querySelector("#mauricio").addEventListener("click",function(){
		pPollis.saluda("miau");
	})

});