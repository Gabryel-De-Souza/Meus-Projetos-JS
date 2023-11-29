//INFORMAR A DIFERENÇA DA BOMBA E A DO PNEU(AQUELE QUE TE FALEI QUE O PROFESSOR PASSOU)
let press = Number(prompt("Olá, informe a pressão do Pneu: ")) 
let bomb = Number(prompt("Informe a pressão da bomba: "))
let dif = press - bomb  


if (dif < 0 ){
    alert("Número não é válido.")
}else{
    alert("a diferença da pressão da bomba é " + dif)
}