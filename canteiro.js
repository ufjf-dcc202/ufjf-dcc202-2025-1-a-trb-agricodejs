
const canteiro     = document.getElementById("canteiro");
const limpar       = document.getElementById("limpar");
const preparouSolo = document.getElementById("prepararSolo");
const colherPlanta = document.getElementById("colherPlanta");

const spanCenouraEstoque = document.querySelector("#estoqueCenoura .quantidadeEstoque");
const spanBatataEstoque = document.querySelector("#estoqueBatata .quantidadeEstoque");
const spanTomateEstoque = document.querySelector("#estoqueTomate .quantidadeEstoque");


window.ferramenta = null;

function criaCanteiro(){
for(let cont = 0; cont < 12*12; cont++){

    const valor = parseInt(Math.random() * 3)
    const celula = document.createElement('div');
    celula.className = 'celula';

    celula.addEventListener('click', (event) => {
    if (window.ferramenta === 'limpar' || window.ferramenta === 'Arar' || 
        window.ferramenta === 'Colher'
    ) {
        aplicarFerramenta(event);
    } else if (window.plantarTipo) {
        aplicarSemente(event);
    }
    });
    
    if(valor === 1) celula.classList.add('pedra');
    else if(valor === 2) celula.classList.add('erva');

    canteiro.appendChild(celula);
}
}

criaCanteiro();

function aplicarFerramenta(event){
    const selecionada = event.target;
    if(window.ferramenta === 'limpar'){
        limparCanteiro(selecionada);
    }

    if(window.ferramenta === 'Arar') {
        soloArado(selecionada);
    }

    if(window.ferramenta === 'Colher'){
        colher(selecionada);
    }
}

function limparCanteiro(celula) {

    celula.classList.remove('erva','pedra');
    
}

limpar.addEventListener('click', ()=> {
    window.ferramenta = 'limpar';
});

function soloArado(celula){

    if(celula.classList.contains('erva') || celula.classList.contains('pedra')){
        alert("Antes de preparar o solo, você deve limpa-ló!")
        return;
    }
        
    celula.classList.add('solo-arado');
}

preparouSolo.addEventListener('click', () => {
    window.ferramenta = 'Arar';
});

function colher(celula){
    const img = celula.querySelector('img');
    if(!img){
        alert("Não há planta para colher aqui!");
        return;
    }


    let tipo;
    if (img.src.includes('coffee-beans')) {
        tipo = 'cenoura';
    } else if (img.src.includes('sesame')) {
        tipo = 'batata';
    } else {
        tipo = 'tomate';
    }

    celula.removeChild(img);


    switch(tipo) {
    case 'cenoura':
        quantCenoura++;
        spanCenoura.innerHTML = "(" + quantCenoura + ")";
      break;

    case 'tomate':
        quantTomate++;
        spanEstoqueTomate.innerHTML = "(" + quantTomate + ")";

      break;

    case 'batata':
        quantBatata++;
        spanEstoqueBatata.innerHTML = "(" + quantBatata + ")";
      
     break;
}
}

colherPlanta.addEventListener('click', () => {
    window.ferramenta = 'Colher';
})
