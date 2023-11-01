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

var tdImc = paciente.querySelector(".info-imc");
var pesoValido = true;
var alturaValida = true;

if(peso<=0 || peso>=1000){
    console.log("Peso inválido.");
    pesoValido = false;
    tdImc.textContent = "Peso inválido";
}

if(altura<=0 || altura>=3){
    console.log("Altura inválida.");
    alturaValida = false;
    tdImc.textContent = "Altura inválida";
}

if(pesoValido && alturaValida){
    var imc = peso / (altura * altura);
    //console.log(imc);
    tdImc.textContent = imc;
}
