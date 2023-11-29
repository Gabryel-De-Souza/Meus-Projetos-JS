//MOSTRAR A TABUADA DE UM NÚMERO 
let n = Number(prompt("Olá, informe um número para verificar a tabuada:"))
function tabuada(num){
    for(let i=1; i<=10; i++){
        console.log(i * num)
    }
    
}   
tabuada(n)