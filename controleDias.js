window.dia = 0;
const avancaDia = document.getElementById("controleDias");

function proxDia(){
    window.dia++;
} 

avancaDia.addEventListener('click',proxDia);