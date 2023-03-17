
let arrayFib = [0,1]
let numero = 5; //Numero à verificar
let a = 0;
let b = 1;
let c = 0;

while (c < numero) {
    c = a + b;
    a = b;
    b = c;
    arrayFib.push(c)
}



// Verificar se o número informado pertence à sequência
if (c === numero) {
    console.log(`O número ${numero} pertence a sequência de Fibonacci`);
} else {
    console.log(`O número ${numero} não pertence a sequência de Fibonacci`);
}