//coin change
export function makeMinimumChange(n) {
  let count = 0;
  [500, 100, 50, 10].forEach((coin) => {
    count += Math.floor(n / coin);
    n %= coin;
  });
  return count;
}

//console.log("coin change", makeMinimumChange(1240));

//law-of-large-numbers

export function makeBiggestNumber(n, m, k) {
  let sum = 0;

  n.sort((a, b) => b - a);
  let first = n[0];
  let second = n[1];

  while (true) {
    for (let i = 0; i < k; i++) {
      if (m === 0) break;
      sum += first;
      m -= 1;
    }
    if (m === 0) break;
    sum += second;
    m -= 1;
  }
  return sum;
}
// console.log("Biggest number", makeBiggestNumber([6, 5, 6, 4, 5, 6], 7, 3));

//make-number-1
export function makeNumber1(n, k) {
  let count = 0;
  while (n > 1) {
    if (n % k === 0) n /= k;
    else n--;
    count++;
  }
  return count;
}
//IDK => inputs..!?
export const inputs = [
  [25, 5],
  [17, 4]
];

// inputs.forEach(([n, k]) => console.log("make number 1", makeNumber1(n, k)));
