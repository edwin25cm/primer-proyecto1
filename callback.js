function sumar(p1, p2){
    return p1 + p2;
}

function operacion(ope,par1, par2){
var res = par1 + par2
ope(res);
}
var res = sumar(4,6)
console.log(res)
operacion(3,6, (resulta) => {
var otravariable;
     otravariable = parametro + 10;
     console.log(otravariable);
})