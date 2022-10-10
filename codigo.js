const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}
const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}

alert("¿Qué operación deseas realizar?")
let operacion = prompt("1= Sumar, 2 =Restar, 3 =Dividir, 4 =Multiplicar");
if(operacion==1){
    let num1 = prompt("¿primer numero que deseas sumar?");
    let num2 = prompt("¿segundo numero que deseas sumar?");
    let resultado=sumar(num1,num2);
    alert(`el resultado es ${resultado}`)
} else if(operacion==2){
    let num1 = prompt("¿primer numero que deseas restar?");
    let num2 = prompt("¿segundo numero que deseas restar?");
    let resultado=restar(num1,num2);
    alert(`el resultado es ${resultado}`)
} else if(operacion==3){
    let num1 = prompt("¿primer numero que deseas dividir?");
    let num2 = prompt("¿segundo numero que deseas dividir?");
    let resultado=dividir(num1,num2);
    alert(`el resultado es ${resultado}`)

}else if(operacion==4){
    let num1 = prompt("¿primer numero que deseas multiplicar?");
    let num2 = prompt("¿segundo numero que deseas multiplicar?");
    let resultado=multiplicar(num1,num2);
    alert(`el resultado es ${resultado}`)
}else{
    alert("no se selecciono ninguna operacion")
}