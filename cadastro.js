/* Na primeira parte eu estou perguntando ao usuário a data do evento em que o mesmo deseja assistir. 
Estabeleci automaticamente a data (dia) através da função data.getDate() no qual fixei o dia 6 
(dia da criação do código) para a condição if. */

console.log("Escolha a data do Evento:");
var data = new Date;
var dia = data.getDate();
console.log(dia);
if (dia >= 6) {
    console.log("Informe a sua idade:");
} else {
    return console.log("Data Inválida! Por Favor ecolha um evento posterior a data atual");
}

//Na segunda parte eu pergunto a idade do usuário para checar se o mesmo é maior de idade.

const idade = 33;
console.log(idade);
if (idade >= 18) {
    console.log("-Selecione um evento - Lista de Participantes e Palestrantes por evento")
} else {
    return console.log("Atenção! Cadastro apenas para maiores de 18 anos")
}

/*Na terceira parte eu peço ao usuário para escolher um evento com um palestrante 
em específico para checar se a palestra não está cheia.*/

evento = "#4";
console.log(evento);
switch(evento){
    case "#1":
         return console.log("Atenção! O número de participantes excedeu o limite no evento #1 -Escolha outro evento-")
        break;
    case "#2":
        console.log("Parabéns! Cadastro Realizado com Sucesso no evento #2!")
        break;
    case "#3":
         return console.log("Atenção! O número de participantes excedeu o limite no evento #3 -Escolha outro evento-")
        break;
    case "#4":
        console.log("Parabéns! Cadastro Realizado com Sucesso no evento #4!")
        break;
    case "#5":
        console.log("Parabéns! Cadastro Realizado com Sucesso no evento #5!")
        break;
    case "#6":
         return console.log("Atenção! O número de participantes excedeu o limite no evento #6 -Escolha outro evento-")
        break;
    case "#7":
         return console.log("Atenção! O número de participantes excedeu o limite no evento #7 -Escolha outro evento-")
        break;

}