const perguntas = [ // Array ou Vetores
    { // Objeto
        pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        respostas: [
            "let varName;",
            "var varName;",
            "const varName;"
        ],
        correta: 2
    },
    {
        pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "push()",
            "add()",
            "append()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o resultado da expressão '10' + 5 em JavaScript?",
        respostas: [
            "15",
            "105",
            "Erro"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a sintaxe correta para um comentário de linha única em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "/* Este é um comentário */",
            "<!-- Este é um comentário -->"
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "pop()",
            "remove()",
            "delete()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual operador é usado para verificar igualdade estrita em JavaScript?",
        respostas: [
            "==",
            "===",
            "="
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o resultado da expressão '10' == 10 em JavaScript?",
        respostas: [
            "true",
            "false",
            "Erro"
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para concatenar dois arrays em JavaScript?",
        respostas: [
            "join()",
            "concat()",
            "merge()"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a saída do código: console.log(typeof(null)) em JavaScript?",
        respostas: [
            "object",
            "null",
            "undefined"
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para converter uma string em minúsculas em JavaScript?",
        respostas: [
            "toLowerCase()",
            "toLowercase()",
            "lowerCase()"
        ],
        correta: 0
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas

// Loop ou laço de repetição
for (const item of perguntas) { // Vai percorrer todos os objetos da array perguntas
    const quizItem = template.content.cloneNode(true) // Clona o conteúdo da tag template
    quizItem.querySelector('h3').textContent = item.pergunta // Adiciona a pergunta dentro da tag h3

    for (let resposta of item.respostas) { // Vai percorrer todas as respostas dentro dos objetos da array perguntas
        const dt = quizItem.querySelector('dl dt').cloneNode(true) // Clona todos os conteúdos da tag dl e dt
        dt.querySelector('span').textContent = resposta // Adiciona a resposta dentro da tag span
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt) // Adiciona o conteúdo da tag filho dt entro da tag mãe dl
    }

    quizItem.querySelector('dl dt').remove() // Remove o conteúdo da tag dl e dt

    // Coloca a pergunta na tela
    quiz.appendChild(quizItem)
}