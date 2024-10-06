const quantidadeDeA = string => string.toLowerCase().split('a').length - 1;
let texto = 'Goiabada';
let contagem = quantidadeDeA(texto);

console.log(`A letra 'a' aparece ${contagem} vezes na string: ${texto}.`);
