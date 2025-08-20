
const canteiro     = document.getElementById("canteiro");
const limpar       = document.getElementById("limpar");
const preparouSolo = document.getElementById("prepararSolo");
const colherPlanta = document.getElementById("colherPlanta");
const regarPlanta  = document.getElementById("regar");


window.ferramenta   = null;   // Armazena qual ferramenta está selecionada no momento 
window.quantCenoura = 0;      // Controla a quantidade de cenouras no inventário.
window.quantBatata  = 0;     // Controla a quantidade de batatas no inventário.
window.quantTomate  = 1;     // Controla a quantidade de tomate no inventário.

// função para criar o canteiro 12x12
function criaCanteiro(){
for(let cont = 0; cont < 12*12; cont++){
// Gera um número aleatório entre 0 e 2
    const valor      = parseInt(Math.random() * 3) 
    const celula     = document.createElement('div');
    celula.className = 'celula';

    celula.addEventListener('click', (event) => {
    if (window.ferramenta === 'limpar' || window.ferramenta === 'Arar' || 
        window.ferramenta === 'Colher'|| window.ferramenta === 'Regar') {
        aplicarFerramenta(event);
    } else if (window.plantarTipo) {
        aplicarSemente(event);
    }
    });
    
    if(valor === 1) celula.classList.add('pedra');     // Se o número aleatório gerado antes  for 1, ele adiciona a classe ‘’pedra’’
    else if(valor === 2) celula.classList.add('erva'); // Se o número for 2, adiciona a classe "erva" 
						                               // Se for 0, a célula fica limpa.

    canteiro.appendChild(celula);
}
}

criaCanteiro();

function aplicarFerramenta(event){
    const selecionada = event.currentTarget;

    // Verifica o valor da ferramenta global e chama a função apropriada.
    if(window.ferramenta === 'limpar'){
        limparCanteiro(selecionada);
    }

    if(window.ferramenta === 'Arar') {
        soloArado(selecionada);
    }

    if(window.ferramenta === 'Colher'){
        colher(selecionada);
    }

    if(window.ferramenta === 'Regar'){
        regar(selecionada);
    }
}

// Limpa um canteiro, removendo ervas, pedras, plantas mortas ou plantas vivas
function limparCanteiro(celula) {
    const planta = celula.querySelector('img.planta');
    if (planta) {
        celula.removeChild(planta);
    }

    //Remove as classes que marcam o canteiro como suja ou ocupada
    celula.classList.remove('erva','pedra', 'morta');
    
}
// Quando clicado, ativa a ferramenta para limpar
limpar.addEventListener('click', ()=> {
    window.ferramenta = 'limpar';
});

function soloArado(celula){
     // Verifica se a célula contém algum obstáculo. Se tiver, avisa o jogador e impede a ação
    if(celula.classList.contains('erva') || celula.classList.contains('pedra')
    || celula.classList.contains('morta')){
        alert("Antes de preparar o solo, você deve limpa-ló!")
        return;
    }
    // Se o canteiro estiver limpo, a classe solo-arado para muda sua aparência.
    celula.classList.add('solo-arado');
}
// Quando clicado, define a ferramenta ativa para Arar
preparouSolo.addEventListener('click', () => {
    window.ferramenta = 'Arar';
});

function colher(celula){
    debugger;
   // Procura por uma imagem com a classe planta dentro do canteiro
    const img = celula.querySelector('img.planta');
   
   // Se não houver imagem de planta, avisa o jogador
    if(!img){
        alert("Não há planta para colher aqui!");
        return;
    }
   // Pega os dados personalizados da imagem da planta. Ex: cenoura
    const tipo = img.dataset.tipo;
    const fase = parseInt(img.dataset.estagio);
 
   // Compara a fase atual da planta com a fase final
    if (fase < window.window.imagensPlantas[tipo].length - 1) {
        alert("A planta ainda não está pronta para colher!");
        return;
    }
   // Se a planta estiver pronta, remove a imagem
    celula.removeChild(img);

   // Aumenta a quantidade do item colhido no inventário
    window.window.estoqueColheita[tipo]++;

   // Chama uma função para atualizar o inventário 
    atualizarStatus();
}
   //Botão para colher
colherPlanta.addEventListener('click', () => {
    window.ferramenta = 'Colher';
})

function regar(celula){
    const planta = celula.querySelector('img.planta');
    if (!planta) return;
  // Verifica se a planta já foi regada hoje
    if (planta.dataset.regada === "true") {
        alert("Essa planta já foi regada hoje!");
        return;

    }
  // Se não foi regada, vai regar a planta
    planta.dataset.regada = "true";
    alert("Planta regada com sucesso!");
}

regarPlanta.addEventListener('click', () => {window.ferramenta = 'Regar'});


function verificaPlantasMortas() {
    const celulas = document.querySelectorAll("#canteiro .celula");
    // Percorre cada um dos canteiros
    for (const celula of celulas) {
	    // Encontra a planta dentro da célula atual. Se não houver planta, pula para o próximo
        const planta = celula.querySelector("img.planta"); 
        if (!planta) continue;

	    // Verifica se a planta não foi regada, e se ela ainda não está marcada como morta.
        if (planta.dataset.regada !== "true" && !planta.classList.contains('morta')) {
	        // Se as duas condições forem verdadeiras, a planta morre.
            planta.src = 'imagens/dead-plant.png';
            planta.classList.add('morta');
        }
   	    // Se a planta não estiver morta, reseta o status de regada para 'false' para o dia seguinte
        if (!planta.classList.contains('morta')) {
            planta.dataset.regada = "false";
        }
    }
}