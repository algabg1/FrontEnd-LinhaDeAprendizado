//alert("olá, mundo");
//console.log("oi, mundo");
//console.log(document.querySelector("h1")); aqui busca por uma tag

var titulo = document.querySelector(".titulo"); //buscando por uma classe
//console.log(titulo); //imprime a variavel
//console.log(titulo.textContent); //imprime o conteudo da variavel

titulo.textContent = "Aparecida Nutricionista"; //alterando o conteudo da variavel

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

//console.log(paciente);
//console.log(tdPeso);
//console.log(peso);
//console.log(altura);

var imc = peso / (altura * altura);
console.log(imc);
var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;