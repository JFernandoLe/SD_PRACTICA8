//variables de entrada
const datos={
    p:0,
    n:0,
    k:0,
    k1:0,
    k2:0,
    k3:0,
}
//lectura de datos
const p=document.querySelector('#p');
const n=document.querySelector('#n');
const k=document.querySelector('#k');
const k1=document.querySelector('#k1');
const k2=document.querySelector('#k2');
const k3=document.querySelector('#k3');
p.addEventListener('input',leerDatos);
n.addEventListener('input',leerDatos);
k.addEventListener('input',leerDatos);
k1.addEventListener('input',leerDatos);
k2.addEventListener('input',leerDatos);
k3.addEventListener('input',leerDatos);
//variables intermedias
let lt;
//resultados
let resultado1=0,resultado2=0;
//funcion lectura de datos
function leerDatos(evento){
    datos[evento.target.id]=evento.target.value;
    console.log(datos);
}
//Primer formulario
const formulario=document.querySelector(".formulario1");
formulario.addEventListener("submit",function(evento)
{
    evento.preventDefault();
    lt=datos.p*datos.n;
    console.log(lt);
    for(let i=0;i<datos.k;i++){
        resultado1=resultado1+(Math.pow(2.7182818284, -lt) * Math.pow(lt, i)) / factorialRecursivo(i);
    }
    resultado1=resultado1*100;
    mostrarMensaje(resultado1);
    resultado1=0;
});
//Impresion de primer respuesta
function mostrarMensaje(mensaje){
    const alerta=document.createElement('p');
    alerta.textContent=`El resultado es: ${mensaje}%`;
    console.log(mensaje);
    alerta.classList.add('resultado');
    formulario.appendChild(alerta);
}
//Segundo formulario
const formulario2=document.querySelector(".formulario2");
formulario2.addEventListener("submit",function(evento2)
{   
    evento2.preventDefault();
    lt=datos.p*datos.n;
    resultado2=((Math.pow(2.7182818284, -lt) * Math.pow(lt, datos.k1)) / factorialRecursivo(datos.k1))+((Math.pow(2.7182818284, -lt) * Math.pow(lt, datos.k2))/ factorialRecursivo(datos.k2))+((Math.pow(2.7182818284, -lt) * Math.pow(lt, datos.k3)) / factorialRecursivo(datos.k3));
    resultado2=resultado2*100;
    mostrarMensaje2(resultado2);
    resultado2=0;
});
//Impresion de segunda respuesta
function mostrarMensaje2(mensaje2){
    const alerta2=document.createElement('p');
    alerta2.textContent=`El resultado es: ${mensaje2}%`;
    console.log(mensaje2);
    alerta2.classList.add('resultado2');
    formulario2.appendChild(alerta2);
}

//funcion de factorial
function factorialRecursivo(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorialRecursivo(n - 1);
    }
}

