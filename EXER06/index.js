//NÚMERO POSITIVO, NEGATIVO OU ZERO
while(true){

let n = Number(prompt("Olá, informe um número: "))
if(n >= 1){
    alert("Esse número é positivo.")
} else if (n < 0){
    alert("Esse número é negativo. ")
}else{
    alert("Esse número é zero.")
    break
}}