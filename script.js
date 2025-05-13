function boasvindas(nome,callback){
    callback(nome);
}

function saudar(nome){
    console.log(`olá,${nome}!`)
}
boasvindas("roberto",saudar);