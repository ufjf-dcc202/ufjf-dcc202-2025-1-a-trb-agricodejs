let quantCenoura = 0;
let quantBatata = 0;
let quantTomate = 1;
window.plantarTipo = null;

const plantarCenoura = document.getElementById("plantarCenoura");
const plantarTomate = document.getElementById("plantarTomate");
const plantarBatata = document.getElementById("plantarBatata");

const spanCenoura = document.querySelector("#cenoura .quantidade");
const spanBatata = document.querySelector("#batata .quantidade");
const spanTomate = document.querySelector("#tomate .quantidade");


const imagensPlantas = {
  cenoura: ["imagens/coffee-beans.png"],
  batata:  ["imagens/sesame.png"],
  tomate:  ["imagens/seeds.png"]
};


function aplicarSemente(event){
    const selecionado = event.currentTarget;

    if (!window.plantarTipo) {
    alert("Selecione uma semente primeiro!");
    return;
    }


      switch(window.plantarTipo) {
    case 'cenoura':
      if (quantCenoura > 0) {
        plantar(window.plantarTipo, selecionado);
        quantCenoura--;
        spanCenoura.innerHTML = "(" + quantCenoura + ")";
      } else {
        alert("Você não possui sementes de cenoura!");
      }
      break;

    case 'tomate':
      if (quantTomate > 0) {
        plantar(window.plantarTipo, selecionado);
        quantTomate--;
        spanTomate.innerHTML = "(" + quantTomate + ")";
      } else {
        alert("Você não possui sementes de tomate!");
      }
      break;

    case 'batata':
      if (quantBatata > 0) {
        plantar(window.plantarTipo, selecionado);
        quantBatata--;
        spanBatata.innerHTML = "(" + quantBatata + ")";

      } else {
        alert("Você não possui sementes de batata!");
      }
      break;
  }

}

function plantar(tipo, celula){
    if(celula.classList.contains('erva') || celula.classList.contains('pedra')){
        alert("Antes de preparar o plantar, você deve limpar o solo")
        return;
    }

    if(!celula.classList.contains('solo-arado')){
        alert("O solo precisa ser arado antes de plantar!");
        return;
    }

  const img = document.createElement('img');
  img.src = imagensPlantas[tipo][window.passagemSemana];
  img.style.width = "100%";
  img.style.height = "100%";
  celula.appendChild(img);
}

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

