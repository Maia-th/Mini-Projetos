function isFibonacci(num) {
  let a = 0,
    b = 1;
  if (num === 0 || num === 1) return true;

  while (b < num) [a, b] = [b, a + b];

  return b === num;
}

let numero = 13;

if (isFibonacci(numero))
  console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
else console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
