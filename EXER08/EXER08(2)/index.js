//MOSTRAR A TABUADA DE UM NÚMERO COM ALERT
let n = Number(prompt("Olá, informe um número: "))
function tabuada(Num){
    for(let i=1; i<=10; i++){
        alert(i * n)
    }
}
tabuada(n)