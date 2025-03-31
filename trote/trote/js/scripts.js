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
        
        if (kit >= 97 && suplemento >=49){
            pontoskit = 5000 + ((kit - 97 )*30 + (suplemento - 49)*15)
        }
        else if (kit >= 78){
            pontoskit = 4000 + ((kit - 78)*30)   
        }
        else if (kit >= 49){
            pontoskit = 2500 + ((kit - 49)*30)   
        }
        else if (kit >= 19){
            pontoskit = 1000 + ((kit - 19)*30)   
        }
        else {
            pontoskit = 0
        }

    }
    alert
    soma += pontoskit
    let suplemento = document.getElementById("suplemento").value  
    soma += Number(15 *suplemento)
    let arroz5 = document.getElementById("arroz5").value
    soma += (arroz5 * 5)
    //devolve o resultado para o html
    document.getElementById("soma").innerHTML = soma.toFixed(2)
    
    
}