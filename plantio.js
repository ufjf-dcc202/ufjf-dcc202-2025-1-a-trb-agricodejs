// Quantidade inicial de sementes no jogo
window.quantCenouraSemente = 0;
window.quantBatataSemente = 0;
window.quantTomateSemente = 1;
//Define qual semente será plantada nenhuma no início
window.plantarTipo = null;

// Pega os botões de plantar do HTML
const plantarCenoura = document.getElementById("plantarCenoura");
const plantarTomate = document.getElementById("plantarTomate");
const plantarBatata = document.getElementById("plantarBatata");

// Imagens para cada estágio das plantas
window.imagensPlantas = {
  cenoura: ["imagens/coffee-beans.png","imagens/carrotfase1.png","imagens/carrotfase2.png"],
  batata:  ["imagens/sesame.png","imagenspotatofase1.png","imagens/potatofase2.png"],
  tomate:  ["imagens/seeds.png","imagens/tomatofase1.png", "imagens/tomatofase2.png"]
};

// Função chamada ao aplicar uma semente
function aplicarSemente(event){ // canteiro clicado
    const selecionado = event.currentTarget;
    // Se o jogador não escolheu uma semente
    if (!window.plantarTipo) {
    alert("Selecione uma semente primeiro!");
    return;
    }
    // Se o solo não estiver arado
    if(!selecionado.classList.contains('solo-arado')){
      alert("O solo precisa ser arado antes de plantar!");
      return;
    }
    // Se há sementes disponíveis no estoque, chama a função plantar, diminui do estoque e atualiza a interface
    if(window.estoqueSementes[window.plantarTipo]>0){
        plantar(window.plantarTipo, selecionado);
        estoqueSementes[window.plantarTipo]--;
        atualizarStatus()
     }else {
        alert("Você não possui sementes de " + window.plantarTipo + "!");
      }
}
// Função que realmente coloca a planta no canteiro
function plantar(tipo, celula){
// Verifica se o solo tem sujeira/obstáculos   
 if(celula.classList.contains('erva') || celula.classList.contains('pedra')
    || celula.classList.contains('mortra')){
        alert("Antes de preparar o plantar, você deve limpar o solo")
        return;
    }
  // Cria um elemento <img> para representar a planta
  const img = document.createElement('img');
  img.src = window.imagensPlantas[tipo][0];
  img.style.width = "100%";
  img.style.height = "100%";
  img.dataset.tipo = tipo;
  img.dataset.regada = "false";
  img.classList.add('planta');
  img.dataset.estagio = 0;
  celula.appendChild(img);
}

// Função que verifica e faz as plantas crescerem
function verificaCrescimentoPlantas() {
    const plantas = document.querySelectorAll("#canteiro .planta");

    for(const planta of plantas){
      // Se a planta estiver morta, ignora
      if(planta.classList.contains('morta')){
          continue;
        }
	    // Pega o estágio atual
      let estagio = parseInt(planta.dataset.estagio);
        const tipo = planta.dataset.tipo;
	  // Se ainda não chegou no estágio final, avança
    if(estagio < window.imagensPlantas[tipo].length - 1) {
        estagio++;
        planta.dataset.estagio = estagio;
        planta.src = window.imagensPlantas[tipo][estagio];
        }
    }
}


// Quando o jogador clica no botão para plantar uma semente
plantarCenoura.addEventListener("click", () => {
  window.plantarTipo = 'cenoura';
    window.ferramenta = null;
});
plantarTomate.addEventListener('click', () => {
  window.plantarTipo = 'tomate';
    window.ferramenta = null;
})
plantarBatata.addEventListener('click', () => {
  window.plantarTipo = 'batata';
    window.ferramenta = null;
})