const data = require('./faturamento.json')

let menor = data[0];
let maior = data[0];
let soma = 0;
for (let i = 0; i < data.length; i++) {
    if (data[i].valor < menor.valor) {
        menor = data[i];
    } else if (data[i].valor > maior.valor) {
        maior = data[i];
    }
    soma += data[i].valor;
}
const media = soma / data.length;
let diasMaiorMedia = 0;
for (let i = 0; i < data.length; i++) {
    if (data[i].valor > media) {
        diasMaiorMedia++;
    }
}
console.log(`O menor valor de faturamento diário foi: ${menor.valor}`);
console.log(`O maior valor de faturamento diário foi: ${maior.valor}`);
console.log(`O número de dias em que o faturamento foi maior do que a média mensal foi: ${diasMaiorMedia}`);