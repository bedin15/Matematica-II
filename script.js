const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A internet e as mídias são importantes ?",
        alternativas: [
            "Sim! Facilitam o nosso cotidiano, são indispensaveis em alguns trabalhos e até deram origens a novas profissões.!",
            "Não! Sobrevivemos a mais de 1000 anos sem."
        ]
    },
    {
        enunciado: "É possivel usar a tecnologia atual de uma forma educativa?",
        alternativas: [
            "Não! Pois essa tecnologia é poluída e só conta com besteiras que infectam desde os mais jovens até os idosos.",
            "Não! Pois os seres humanos não sabem usufruir dela para o bem",
        ]
    },
    {
        enunciado: "Todos os sites e redes sociais são para o bem ?",
        alternativas: [
            "Não, pois tem alguns criados para enganação, roubo. pedofilia, conteúdo inapropriado...",
            "Não! A internet veio com o intuito de nos ajudar e facilitar o dia a dia, mas se não usada de forma correta pode ocasionar um grande problema com o uso de sites e redes indevidas."
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();