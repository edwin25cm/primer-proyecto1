
function mostrarDato(){

var input =  document.getElementById("inputdato");
var parrafo = document.getElementById("resultado");
var total = document.getElementById("total");
 suma = input.value;
 total.innerText = suma;

 var c = 1

 while ( c < 13 ){
    parrafo.innerText =   parrafo.innerText   + input.value+ ' x ' + c + ' = '+ (suma * c) + "\n";
    c++;
    
 }
}

var suma = 0;




 




// document.getElementById("botonmostrar").onclick = mostrarDato;