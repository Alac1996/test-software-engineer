function convertToInteger(an) {
  const alienNumerical = { A: 1, B: 5, Z: 10, L: 50, C: 100, D: 500, R: 1000 };

  let answer = 0;

  for (let i = 0; i < an.length; i++) {
    const currentAlienNumerical = alienNumerical[an[i]];
    const nextAlienNumerical = alienNumerical[an[i + 1]];
    if (i < an.length - 1 && currentAlienNumerical < nextAlienNumerical) {
      answer -= currentAlienNumerical;
    } else {
      answer += currentAlienNumerical;
    }
  }
  return answer;
}

console.log(convertToInteger("DLAB"));
console.log(convertToInteger("RCDZL"));
console.log(convertToInteger("ZAAA"));
