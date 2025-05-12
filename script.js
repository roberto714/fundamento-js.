//let senha = number(prompt("digite a senha:"));
//while(senha !== 1234){
//alert("acesso negado!");
//senha = number(prompt("senha invalida.tente novamente"));
//}
//alert("acesso permitido")

//const { useCallback } = require("react")

//let numero = 10;
//while(numero >= 1){
//console.log(numero);
//numero--;
//}
//let palavra = prompt("digite uma palavra");
//let contador = 1;
//while(contador <= 5){
//console.log(palavra);
//contador++
// }

function verificarNumero(numero,callback){
if(numero >= 10){
    callback(`${"numero alto"}`)
} else {
    callback(`${"numero baixo"}`)
}
}
function mensagem(texto){
    console.log(texto)
}

verificarNumero(11,mensagem)
