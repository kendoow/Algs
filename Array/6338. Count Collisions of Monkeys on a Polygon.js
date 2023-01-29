var monkeyMove = function (n) {
  let answer = (BigInt(Math.pow(2, n)) % BigInt(Math.pow(10, 9) + 7));
  console.log(answer)
  answer -= BigInt(2);
  if (answer < 0) answer += BigInt(Math.pow(10, 9) + 7);
  return answer;
};

console.log(monkeyMove(3)); // -> 6
console.log(monkeyMove(500000003)); // -> 14

