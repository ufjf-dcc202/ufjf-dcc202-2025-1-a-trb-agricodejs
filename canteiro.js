
const canteiro = document.getElementById("canteiro");
const limpar = document.getElementById("limpar");
const preparouSolo = document.getElementById("prepararSolo");

let ferramenta = 'nenhuma';

function criaCanteiro(){
for(let cont = 0; cont < 12*12; cont++){

    const valor = parseInt(Math.random() * 3)
    const celula = document.createElement('div');
    celula.className = 'celula';

    celula.addEventListener('click', aplicarFerramenta);
    
    if(valor === 1) celula.classList.add('pedra');
    else if(valor === 2) celula.classList.add('erva');

    canteiro.appendChild(celula);
}
}

criaCanteiro();

function aplicarFerramenta(event){
    const selecionada = event.target;
    if(ferramenta === 'limpar'){
        limparCanteiro(selecionada);
    }

    if(ferramenta === 'Arar') {
        soloArado(selecionada);
    }
}

function limparCanteiro(celula) {

    celula.classList.remove('erva','pedra');
    
}

limpar.addEventListener('click', ()=> {
    ferramenta = 'limpar';


});

function soloArado(celula){

    if(celula.classList.contains('erva') || celula.classList.contains('pedra')){
        alert("Antes de preparar o solo, você deve limpa-ló!")
        return;
    }
        
    celula.classList.add('solo-arado');
}

preparouSolo.addEventListener('click', () => {
    ferramenta = 'Arar';
});










