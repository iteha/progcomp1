function calcular(){
    let soma = 0
    //recupera o valor da açao social digitado
    let acaosocial = document.getElementById("acaosocial").value
    soma += Number(acaosocial)
    let homenagem = document.getElementById("homenagem").value
    soma += Number(homenagem)
    let leite = document.getElementById("leite").value
    soma += (2 * Number(leite))
    let kit = Number(document.getElementById("kit").value)
    //recupera a cor da equipe 
    let pontoskit = 0 //guarda pontuação de kit 
    let equipe = document.getElementById("equipe").value
    if (equipe == "Laranja"){
        
        if (kit >= 97 && suplemento >= 49){
            pontoskit = 5000 + ((kit - 97 )*30 + (suplemento - 49)*15)
        }
        else if (kit >= 78 && suplemento >=39){
            pontoskit = 4000 + ((kit - 78)*30 + (suplemento - 39)*15)   
        }
        else if (kit >= 49 && suplemento >= 25){
            pontoskit = 2500 + ((kit - 49)*30 + (suplemento -25)*15)   
        }
        else if (kit >= 19 && suplemento >= 10 ){
            pontoskit = 1000 + ((kit - 19)*30 + (suplemento - 10)*15)   
        }
        else {
            pontoskit = 0
        }

    }
    
    soma += pontoskit
    let suplemento = document.getElementById("suplemento").value  
    soma += Number(15 *suplemento)
    let arroz5 = document.getElementById("arroz5").value
    soma += (arroz5 * 5)
    let arroz1 = document.getElementById("arroz1").value
    soma += (arroz1 * 1)
    let feijao2 = document.getElementById("feijao2").value
    soma += (feijao2 * 2)
    let feijao1 = document.getElementById("feijao1").value
    soma += (feijao1 * 1)
    let macarrao = document.getElementById("macarrao").value
    soma += (macarrao * 0.5)
    let oleo = document.getElementById("oleo").value
    soma += (oleo * 1)
    


    //devolve o resultado para o html
    document.getElementById("soma").innerHTML = soma.toFixed(2)
    
    
}