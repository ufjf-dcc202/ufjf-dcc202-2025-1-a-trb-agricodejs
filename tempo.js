// botão que é gatilho para passagem de tempo dentro do jogo
const avancaSemana = document.getElementById("controleDias");

// variável que controla quantas semanas já se passaram dentro do jogo
window.passagemSemana = 0;

/* seleciona todas as plantas que existem no jogo,  util para verificar 
 crescimento e morte das plantas. */
const plantas = document.querySelectorAll(".planta");

// função que faz o tempo avançar
function proxSemana(){
    verificaPlantasMortas(); //antes de passar a semana, o jogo checa se alguma planta morreu
    
    passagemSemana++; // adiciona uma semana ao contador
    
// atualiza a tela para mostrando qual semana atual estamos    
document.getElementById("semana").innerHTML = "Semana " + window.passagemSemana;
    
    verificaCrescimentoPlantas(); // o jogo verifica se alguma planta deve crescer de estágio
}    
 
avancaSemana.addEventListener('click',proxSemana); // conecta o botão "Avançar Semana" à função, avançando uma semana no jogo