function exe0(){
    let nota 
    let conta = 1 
    let soma = 0
    while (conta <= 10){
        nota = Number(prompt(`Informe a nota ${conta}`))
        soma = soma + nota
        conta++ 
    }
    let media = soma / 10
    
     alert(`A média das notas é ${media.toFixed(1)}`)
     
}