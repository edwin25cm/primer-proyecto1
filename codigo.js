
function mostrarDato(){

var input =  document.getElementById("inputdato");
var parrafo = document.getElementById("resultado");
var total = document.getElementById("total");
 parrafo.innerText =  parrafo.innerText += "el dato ingresado es: " + input.value + "\n";
 suma = input.value;
 total.innerText = suma;
}

var suma = 0;




 




// document.getElementById("botonmostrar").onclick = mostrarDato;