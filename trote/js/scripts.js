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
    let suplemento = document.getElementById("suplemento").value  
    
    //recupera a cor da equipe 
    let pontoskit = 0 //guarda pontuação de kit 
    let equipe = document.getElementById("equipe").value
    if (equipe == "Laranja"){
        
        if (kit >= 97 && suplemento >= 49){
            pontoskit = 5000 + (((kit - 97 )*30) + ((suplemento - 49)*15))
        }
        else if (kit >= 78 && suplemento >=39){
            pontoskit = 4000 + (((kit - 78)*30) + ((suplemento - 39)*15))   
        }
        else if (kit >= 49 && suplemento >= 25){
            pontoskit = 2500 + (((kit - 49)*30) + ((suplemento -25)*15))   
        }
        else if (kit >= 19 && suplemento >= 10 ){
            pontoskit = 1000 + (((kit - 19)*30) + ((suplemento - 10)*15))   
        }
        else {
            pontoskit = 0
        }

    }
    else if (equipe == "Preta"){
        
        if (kit >= 103 && suplemento >= 52){
            pontoskit = 5000 + (((kit - 103 )*30) + ((suplemento - 52)*15))
        }
        else if (kit >= 82 && suplemento >=42){
            pontoskit = 4000 + (((kit - 82)*30) + ((suplemento - 42)*15))   
        }
        else if (kit >= 52 && suplemento >= 26){
            pontoskit = 2500 + (((kit - 52)*30) + ((suplemento -26)*15))   
        }
        else if (kit >= 21 && suplemento >= 10 ){
            pontoskit = 1000 + (((kit - 21)*30) + ((suplemento - 10)*15))   
        }
        else {
            pontoskit = 0
        }

    }
    else if (equipe == "Roxa"){
        
        if (kit >= 102 && suplemento >= 51){
            pontoskit = 5000 + (((kit - 102 )*30) + ((suplemento - 51)*15))
        }
        else if (kit >= 82 && suplemento >=41){
            pontoskit = 4000 + (((kit - 82)*30) + ((suplemento - 41)*15))   
        }
        else if (kit >= 51 && suplemento >= 26){
            pontoskit = 2500 + (((kit - 51)*30) + ((suplemento -26)*15))   
        }
        else if (kit >= 20 && suplemento >= 10 ){
            pontoskit = 1000 + (((kit - 20)*30) + ((suplemento - 10)*15))   
        }
        else {
            pontoskit = 0
        }

    }
    else if (equipe == "Verde"){
        
        if (kit >= 88 && suplemento >= 44){
            pontoskit = 5000 + (((kit - 88 )*30) + ((suplemento - 44)*15))
        }
        else if (kit >= 70 && suplemento >=35){
            pontoskit = 4000 + (((kit - 70)*30) + ((suplemento - 35)*15))   
        }
        else if (kit >= 44 && suplemento >= 22){
            pontoskit = 2500 + (((kit - 44)*30) + ((suplemento -22)*15))   
        }
        else if (kit >= 18 && suplemento >= 9 ){
            pontoskit = 1000 + (((kit - 18)*30) + ((suplemento - 9)*15))   
        }
        else {
            pontoskit = 0
        }

    }
    else {
        
        if (kit >= 93 && suplemento >= 47){
            pontoskit = 5000 + (((kit - 93 )*30) + ((suplemento - 47)*15))
        }
        else if (kit >= 74 && suplemento >=38){
            pontoskit = 4000 + (((kit - 74)*30) + ((suplemento - 38)*15))   
        }
        else if (kit >= 47 && suplemento >= 24){
            pontoskit = 2500 + (((kit - 47)*30) + ((suplemento -24)*15))   
        }
        else if (kit >= 19 && suplemento >= 9 ){
            pontoskit = 1000 + (((kit - 19)*30) + ((suplemento - 9)*15))   
        }
        else {
            pontoskit = 0
        }

    }
    
    soma += pontoskit

    let sangue = document.getElementById("sangue").value
    let pontossangue = 0

    if (equipe == "Laranja") {
        if (sangue >= 49){
            pontossangue = 2500 + ((sangue - 49) * 20)
        }
        else {
            pontossangue = sangue * 20
        }
    }
    else if (equipe == "Preta") {
        if (sangue >= 52){
            pontossangue = 2500 + ((sangue - 52) * 20)
        }
        else {
            pontossangue = sangue * 20
        }
    }
    else if (equipe == "Roxa") {
        if (sangue >= 51){
            pontossangue = 2500 + ((sangue - 51) * 20)
        }
        else {
            pontossangue = sangue * 20
        }
    }
    else if (equipe == "Verde") {
        if (sangue >= 44){
            pontossangue = 2500 + ((sangue - 44) * 20)
        }
        else {
            pontossangue = sangue * 20
        }
    }
    else  {
        if (sangue >= 47){
            pontossangue = 2500 + ((sangue - 47) * 20)
        }
        else {
            pontossangue = sangue * 20
        }
    }

    soma += pontossangue

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