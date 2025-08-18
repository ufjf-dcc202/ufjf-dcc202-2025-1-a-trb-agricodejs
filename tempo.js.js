const avancaSemana = document.getElementById("controleDias");
window.passagemSemana = 0;

function proxSemana(){
    passagemSemana++;

    document.getElementById("tempo").innerHTML = "Semana " + window.passagemSemana;

} 

avancaSemana.addEventListener('click',proxSemana);