const canteiro = document.getElementById("canteiro");
const limpar = document.getElementById("limpar");

function criaCanteiro(){
for(let cont = 0; cont < 12*12; cont++){

    const valor = parseInt(Math.random() * 3)
    const celula = document.createElement('div');
    celula.className = 'celula';

    if(valor === 1) celula.classList.add('pedra');
    else if(valor === 2) celula.classList.add('erva');

    canteiro.appendChild(celula);
}
}

criaCanteiro();

function limparCanteiro() {
    const celula = canteiro.querySelectorAll('.celula');

    for(let cont = 0; cont < celula.length; cont++){
        celula[cont].classList.remove('erva','pedra');
    }
}

limpar.addEventListener('click',limparCanteiro);




