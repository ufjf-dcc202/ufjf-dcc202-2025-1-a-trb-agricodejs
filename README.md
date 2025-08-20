[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/ujXOj0Nv)


# 🌱 ICEDewValley
## DCC202 - Trabalho Prático de Desenvolvimento Web

### 👤
* Laura Maria Gonçalves do Nascimento - laura.maria@estudante.ufjf.br
* Maria Clara Mury da Veiga Cabral  - mariaclara.mury@estudante.ufjf.br

---

### 📋 Descrição do Projeto
**ICEDew Valley** é um jogo de simulação de fazenda, inspirado em clássicos como *Stardew Valley* e *Harvest Moon*, desenvolvido como trabalho prático para a disciplina DCC202. O projeto foi construído utilizando apenas **HTML, CSS e JavaScript puro**, com foco na manipulação direta da Estrutura de Objetos do Documento (DOM) para criar uma experiência interativa e dinâmica.

O objetivo do jogo é gerenciar um canteiro, limpando o terreno, preparando o solo, plantando sementes, regando as plantações e, finalmente, colhendo os frutos para obter lucro e expandir a fazenda.

### 🎯 Funcionalidades Principais
* **🌱 Preparo do Solo:** Limpeza de pedras e ervas daninhas e aração da terra.
* **🌾 Plantio e Seleção de Sementes:** Escolha entre 3 tipos diferentes de sementes, cada uma com suas características.
* **💧 Ciclo de Crescimento e Irrigação:** As plantas evoluem em fases e precisam ser regadas semanalmente para não morrerem.
* **💰 Colheita e Economia:** Colete plantas maduras para ganhar dinheiro e comprar novas sementes.
* **⏳ Passagem do Tempo:** Controle o avanço dos dias através de um botão.
* **🎨 Interface Gráfica Interativa:** Jogue em uma grade de 12x12, interagindo diretamente com cada célula do canteiro.

### 🛠️ Tecnologias Utilizadas
* **HTML5:** Utilizado para a estruturação semântica do jogo.
* **CSS3:** Responsável por toda a estilização visual.
* **JavaScript:** O coração do jogo, controlando toda a lógica e interações.
* **GitHub Pages:** Plataforma utilizada para a publicação e demonstração online do jogo.

---

### 🚀 Como Jogar

#### 🔗 Acesso ao Jogo
Jogue agora mesmo através do GitHub Pages: `https://ufjf-dcc202.github.io/ufjf-dcc202-2025-1-a-trb-agricodejs/`

#### 💻 Execução Local
1.  Clone este repositório:
    ```bash
    git clone [https://github.com/ufjf-dcc202/ufjf-dcc202-2025-1-a-trb-agricodejs.git]
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd <ufjf-dcc202-2025-1-a-trb-agricodejs>
    ```
3.  Abra o arquivo `index.html` em seu navegador de preferência.

#### ⚠️ Pré-requisitos
* Um navegador de internet.

---

### 📂 Estrutura de Arquivos
.
├── index.html         # Arquivo principal da estrutura do jogo
├── css/
│   └── style.css      # Folha de estilos principal
├── js/
│   └── script.js      # Arquivo com toda a lógica do jogo
└── assets/
└──     images/        # Contém as imagens para plantas, terreno, etc.

### ✅ Status do Projeto
- [x] **Grade 12x12:** Canteiro inicial funcional.
- [x] **Limpeza do Terreno:** Remoção de pedras e ervas daninhas implementada.
- [x] **Ciclo de Plantio:** Funções de arar, plantar, regar e crescer completas.
- [x] **Colheita:** Sistema de colheita e recompensa em dinheiro funcional.
- [x] **Economia:** Compra de sementes com o dinheiro adquirido.
- [x] **Passagem de Tempo:** Botão de avanço de dia implementado.
---

### 🎮 Manual de Uso - A Interface do Jogo

#### 🏠 Tela Principal
A interface é composta por:
* **Canteiro (Grid 12x12):** A área principal onde você interage com a terra e as plantas.
* **Painel de Ferramentas:** Onde você seleciona a ação que deseja realizar.
* **Status do Jogador:** Exibe seu dinheiro atual e a quantidade de sementes.
* **Botão "Passar o Dia":** Avança o tempo no jogo.

#### 🌾 O Ciclo da Fazenda: Passo a Passo

**PASSO 1: Limpar o Terreno**
* **Ação:** Selecione a ferramenta "limpar"
* **Objetivo:** Clique sobre as pedras e ervas daninhas para removê-las.

**PASSO 2: Arar a Terra**
* **Ação:** Selecione a ferramenta "Enxada".
* **Objetivo:** Clique em uma célula de terra limpa para prepará-la para o plantio.

**PASSO 3: Plantar a Semente**
* **Ação:** Clique em um dos tipos de semente disponíveis no seu inventário.
* **Objetivo:** Com a semente selecionada, clique em uma célula de terra arada para plantá-la.

**PASSO 4: Regar a Plantação**
* **Ação:** Selecione a ferramenta "Regador".
* **Objetivo:** Clique em uma célula com uma semente plantada. É crucial regar todos os dias!

**PASSO 5: Avançar o Tempo**
* **Ação:** Clique no botão "Avançar dia".
* **Efeito:** Plantas regadas avançam um estágio de crescimento; as não regadas morrem.

**PASSO 6: Colher e Lucrar!**
* **Ação:** Quando uma planta atingir seu estágio máximo, clique nela.
* **Recompensa:** Você recebe dinheiro se vende-lá e a planta é removida.

---

### 🐛 Desafios do Desenvolvimento
* **Sincronia de Carregamento (DOM):** Solucionado envolvendo a lógica do jogo no evento `DOMContentLoaded` para garantir que o HTML seja carregado antes do script.
* **Gerenciamento de Estado:** Refatorado para centralizar todo o estado em um único objeto (`gameState`), tornando o fluxo de dados mais claro e previsível.
* **Simplificação da Lógica:** Substituído um grande bloco `switch` por uma abordagem mais modular, facilitando a manutenção e a adição de novas funcionalidades.

### 📜 Créditos e Atribuições
As imagens, ícones e recursos visuais utilizados neste projeto foram obtidos das seguintes fontes. Agradecemos a todos os criadores pelo seu incrível trabalho!

* **Recursos Visuais e Inspiração:**
    * [Pixel Art Assets por Pixel Jeff no ArtStation](https://www.artstation.com/artwork/EaKzle)
    * [Referência de Estilo no Pinterest](https://br.pinterest.com/pin/36310340743970737/)

* **Ícones por [Flaticon](https://www.flaticon.com):**
    * [Saco de Tomates](https://www.flaticon.com/free-icon/food_16306050)
    * [Saco de Batatas](https://www.flicon.com/free-icon/food_16306057)
    * [Saco de Sementes](https://www.flaticon.com/free-icon/seed-bag_11209844)
    * [Ícones de Semente](https://www.flaticon.com/free-icon/sesame_4909228), [aqui](https://www.flaticon.com/free-icon/coffee-beans_5424850) e [aqui](https://www.flaticon.com/free-icon/seeds_9273274)
    * [Ícones de Cenoura](https://www.flaticon.com/free-icon/carrot_1886900) e [aqui](https://www.flaticon.com/free-icon/carrot_6351802)
    * [Ícones de Tomate](https://www.flaticon.com/free-icon/tomato_2674605) e [aqui](https://www.flaticon.com/free-icon/tomato_877712)
    * [Ícones de Batata](https://www.flaticon.com/free-icon/potato_4478107) e [aqui](https://www.flaticon.com/free-icon/potato_9466895)
    * [Planta Morta](https://www.flaticon.com/free-icon/dead-plant_17987276)
