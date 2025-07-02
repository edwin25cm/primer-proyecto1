function sumar(param1, param2){
    return param1+param2


}

var total;
total = sumar(8,15);
console.log(total);


// funcion anonima
var mifuncion = function(){
    console.log("funcion anonina");
}



mifuncion();


console.log (function(){
    return "jajajajaj"
}())


// funcion de tipo flecha
var otravariable =  (a,b) => {
 return a + b;

}
console.log(otravariable(10,15));

