
//  Questão 1  //

function soma() {
    let indice = 13;
    let soma = 0;
    
    for (k = 0; k < indice; k++) {
      soma = soma + k;
      console.log(soma, k)
    }
    
    console.log(soma);
}


//  Questão 2  //

function fibonacci() {
    const numeroDeFibonacci = 10;
    console.log(
      `O número informado: ${numeroDeFibonacci} para a sequência de Fibonacci não pertence a sequência!`
    );
  
    let numero;
    let penultimo = 0;
    let ultimo = 1;
    let count = 3;
  
    while (count <= numeroDeFibonacci) {
      numero = ultimo + penultimo;
      penultimo = ultimo;
      ultimo = numero;
      count++;
    }
  
    console.log(numero);
  }


//  Questão 5  //

const string = "Inverta essa frase";

function reverseString(string) {
  var novaString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    novaString += string[i];
  }

  return novaString;
}

function inverte() {
    console.log(reverseString(string))
}
