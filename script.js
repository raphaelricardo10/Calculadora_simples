function adicionar_parametros(parametro){
    document.querySelector("[name ='tela']").value += parametro
}


function calcular(){

    conta = document.querySelector("[name ='tela']").value
    document.querySelector("[name ='tela']").value = eval(conta) // funcao eval é responsavel por, pegar a string que esta entrando e fazer a sua conversao junto com a operacao

}

function porcentagem(){

    conta = document.querySelector("[name ='tela']").value + '/ 100'
    document.querySelector("[name ='tela']").value = eval(conta) 
}
function botao_AC(){
    document.querySelector("[name ='tela']").value = ''
}