// Pega o elemento saldo para mostrar o dinheiro
const saldoSpan = document.getElementById('saldo'); 

//Garante que o HTML seja carregado antes de carregar os elementos para o DOM
document.addEventListener("DOMContentLoaded", () => { 

    // Spans  mostra a quantidade de sementes no estoque da loja
    window.spanCenouraSemente = document.querySelector("#cenoura .quantidade");
    window.spanBatataSemente  = document.querySelector("#batata .quantidade");
    window.spanTomateSemente  = document.querySelector("#tomate .quantidade");

    // Spans  mostra a quantidade de colheitas do jogador
    window.spanCenoura = document.querySelector("#estoqueCenoura .quantidadeEstoque");
    window.spanBatata  = document.querySelector("#estoqueBatata .quantidadeEstoque");
    window.spanTomate  = document.querySelector("#estoqueTomate .quantidadeEstoque");
    
    // Botões de comprar e vender dentro da loja
    const comprarCenoura = document.getElementById("comprarCenoura");
    const venderCenoura  = document.getElementById("venderCenoura");
    const comprarBatata  = document.getElementById("comprarBatata");
    const venderBatata   = document.getElementById("venderBatata");
    const comprarTomate  = document.getElementById("comprarTomate");
    const venderTomate   = document.getElementById("venderTomate");

    // Ativa os botões às funções comprar e vender as plantas
    comprarCenoura.addEventListener("click", () => comprar("cenoura"));
    venderCenoura.addEventListener("click", () => vender("cenoura"));
    
    comprarBatata.addEventListener("click", () => comprar("batata"));
    venderBatata.addEventListener("click", () => vender("batata"));
    
    comprarTomate.addEventListener("click", () => comprar("tomate"));
    venderTomate.addEventListener("click", () => vender("tomate"));

    // Atualiza a interface no início do jogo
    atualizarStatus();
});

// Estoque de sementes 
window.estoqueSementes = {
    get cenoura() { return window.quantCenouraSemente; },
    set cenoura(valor) { window.quantCenouraSemente = valor; },

    get batata() { return window.quantBatataSemente; },
    set batata(valor) { window.quantBatataSemente = valor; },

    get tomate() { return window.quantTomateSemente; },
    set tomate(valor) { window.quantTomateSemente = valor; }
}

// Estoque de colheitas 
window.estoqueColheita = {
    get cenoura() { return window.quantCenoura; },
    set cenoura(valor) { window.quantCenoura = valor; },

    get batata() { return window.quantBatata; },
    set batata(valor) { window.quantBatata = valor; },

    get tomate() { return window.quantTomate; },
    set tomate(valor) { window.quantTomate = valor; }
};

// Dinheiro inicial do jogador
let saldo = 100;

// Tabela de preços de cada item
const precos = {
    cenoura: { comprar: 10, vender: 25 },
    batata: { comprar: 20, vender: 35 },
    tomate: { comprar: 10, vender: 20 }
};

// Atualiza os valores mostrados na tela 
function atualizarStatus() {
    saldoSpan.innerHTML   = "Saldo: $" + saldo;

    // Atualiza quantidade de sementes
    window.spanCenouraSemente.innerHTML = "(" + window.estoqueSementes.cenoura + ")";
    window.spanBatataSemente.innerHTML  = "(" + window.estoqueSementes.batata + ")";
    window.spanTomateSemente.innerHTML  = "(" + window.estoqueSementes.tomate + ")";

    // Atualiza quantidade de colheitas
    window.spanCenoura.innerHTML = "(" + window.estoqueColheita.cenoura + ")";
    window.spanBatata.innerHTML  = "(" + window.estoqueColheita.batata + ")";
    window.spanTomate.innerHTML  = "(" + window.estoqueColheita.tomate + ")";
}

// Função para comprar sementes
function comprar(item) {
    if (saldo >= precos[item].comprar) {         // Verifica se tem dinheiro
        saldo -= precos[item].comprar;           // Subtrai o preço
        window.estoqueSementes[item]++;          // Aumenta a quantidade de sementes
        atualizarStatus();                       // Atualiza a interface
    } else {
        alert("Dinheiro insuficiente!");         // Se não tiver dinheiro suficiente
    }
}

// Função para vender colheitas
function vender(item) {
    if(window.estoqueColheita[item] > 0){        // Se houver colheita disponível
        window.estoqueColheita[item]--;          // Remove uma unidade do estoque
        saldo += precos[item].vender;            // Adiciona dinheiro
        atualizarStatus();                       // Atualiza a interface
    } else {
        alert("Quantidade insuficiente para venda"); // Se não tiver nada para vender
    }
}