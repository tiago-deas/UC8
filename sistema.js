var numeroDeAlunos = 10;

var contador = 0;

while (contador <= numeroDeAlunos) {
    if (contador == 0) {
            console.log("O número atual é zero")
          } else if (contador % 2 == 0){
               console.log("O número " + contador + " é par")
          } else {
         console.log(`O número ${contador} é Impar`)
         } 
         contador++;
}

for (var contador = 0; contador <= numeroDeAlunos; contador++) {
    //console.log(contador)

    if (contador == 0) {
        console.log("O número atual é zero")
    } else if (contador % 2 == 0){
        console.log("O número " + contador + " é par")
    } else {
        console.log(`O número ${contador} é Impar`)
    }
   
}

