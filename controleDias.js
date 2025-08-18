const avancaSemana = document.getElementById("controleDias");
let cont = 0;

function proxSemana(){
    cont++;

    document.getElementById("tempo").innerHTML = "Semana " + cont;

} 

avancaSemana.addEventListener('click',proxSemana);