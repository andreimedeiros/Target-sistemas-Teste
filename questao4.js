const SP = 67836.43;
const RJ = 36678.66;
const MG = 29229.88;
const ES = 27165.48;
const Outros = 19849.53;

const valorTotal = SP + RJ + MG + ES + Outros;

const repSP = (SP / valorTotal) * 100;
const repRJ = (RJ / valorTotal) * 100;
const repMG = (MG / valorTotal) * 100;
const repES = (ES / valorTotal) * 100;
const repOutros = (Outros / valorTotal) * 100;

console.log(`Valor total mensal da distribuidora: R$${valorTotal.toFixed(2)}`);
console.log(`Percentual de representação SP: ${repSP.toFixed(2)}%`);
console.log(`Percentual de representação RJ: ${repRJ.toFixed(2)}%`);
console.log(`Percentual de representação MG: ${repMG.toFixed(2)}%`);
console.log(`Percentual de representação ES: ${repES.toFixed(2)}%`);
console.log(`Percentual de representação Outros: ${repOutros.toFixed(2)}%`);