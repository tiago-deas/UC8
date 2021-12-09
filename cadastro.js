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

var evento = ["pessoa1", "pessoa2", "pessoa3", "pessoa4", "pessoa5", "pessoa6", "pessoa7"];
 if (evento.length < 100){
     console.log("Cadastro realizado com sucesso!");
      } else {
          return console.log("Atenção! O número de participantes excedeu o limite - Escolha outro Evento -")
      }
