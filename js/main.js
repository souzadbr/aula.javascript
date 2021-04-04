
function clicou (){

    document.getElementById("Agradecimento").innerHTML = "<b>Obrigada por clicar</b>";
    //console.log (document.getElementById("Agradecimento"));
   // alert("Obrigada por clicar");
}

function redirecionar(){
    window.open("https://www.netflix.com/br/");
  //  window.location.href = "https://www.netflix.com/br/";
}

function trocar(elemento){
//alert ("trocar texto");
//document.getElementById ("mousemove").innerHTML = "Obrigada por passar o mouse"
elemento.innerHTML = "Obrigada por passar o mouse";
}

function voltar (elemento){
   // document.getElementById ("mousemove").innerHTML = "Passe o mouse aqui" 
   elemento.innerHTML = "Passe o mouse aqui"; 
}

function load (){
    alert ("pagina carregada")
}

function funcaoChange (elemento) {
    console.lo (elemento.value)

}







/*function soma( n1, n2) {
    //return n1+n2;
}*/


/*
var validar = 0;
function validaIdade(idade){
    if(idade>=18)
    {
    validar = true
}else{

    validar =  false
} 
return validar;

}

var idade = prompt ("Qual sua idade?");
validaIdade(idade)
console.log (validar);*/
   


/*function setReplace (frase, nome, novo_nome){
   return frase.replace (nome, novo_nome)
}
alert(soma(5,10))
alert (setReplace("Vai Japão", "Japão", "Brasil"));
/*
var d = new Date();
alert(d.getDate ());*/


/*
var count = 0;
for (count=0; count<=5; count++) {
    alert (count)
}*/



/*var count = 0;
while (count <= 5) {
    console.log (count);
    //count = count + 1 
    count++
    alert (count)
}*/



/*
var idade = prompt ("Qual sua idade?")
//var idade = 18 
if (idade>=18) { alert ("maior de idade");

}else {alert ("menor de idade");

}*/




/*
var fruta = [{nome:"maçã", cor:"vermelha"},{nome:"uva", cor:"roxa"} ]
console.log (fruta);
alert (fruta[1].nome)*/



/*
var fruta = {nome:"maçã", cor:"vermelha"}
console.log (fruta.nome);
alert (fruta.cor)
*/


//var nome = "Debora Rodrigues";
//var idade = 28;
//var idade2 = 10;
//var frase = "Japão é o melho time do mundo";


//alert(nome + " tem " + idade + " anos");
//alert (idade + idade2)
//console.log (nome);
//console.log (idade + idade2);
//console.log (frase.toLowerCase  ("Japão","Brasil"));
//alert (frase.replace ("Japão", "Brasil"));

//var lista = ["maçã", "pera","laranja"]; 
//lista.pop ()
//lista.push ("uva")
//console.log (lista);
//console.log (lista.toString ());
//console.log (lista.join (" - "));

