//CALCULADORA COM AS QUATRO OPERAÇÕES
function soma(){
    let n1 = Number(prompt("Informe um número: "))
    let n2 = Number(prompt("Informe outro número: "))
    alert(n1 + n2)
}
console.log("salve")
function sub(){
    let n1 = Number(prompt("Informe um número: "))
    let n2 = Number(prompt("Informe outro número: "))
    alert(n1 - n2)
}

function mult (){
    let n1 = Number(prompt("Informe um número: "))
    let n2 = Number(prompt("Informe outro número: "))
    alert(n1 * n2)
}

function div (){
    let n1 = Number(prompt("Informe um número: "))
    let n2 = Number(prompt("Informe outro número: "))
    alert(n1 / n2)
}

let option = true
while(option){
    option = Number(prompt (`Olá, escolha uma opção: 
                      1 - Soma, 
                      2 - Subtração,
                      3 - Multiplicação 
                      4 - Divisão,
                      5 - Sair`))

switch(option){
    case 1:
        soma()
        break
    case 2:
        sub()
        break
    case 3:
        mult()
        break
    case 4:
        div()
        break      
    case 5:
        option = false    
        alert("Saindo...")
        break 
        default:
            alert("Opção Inválida")

}}