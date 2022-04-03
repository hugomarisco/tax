export interface Bracket {
  floor: number;
  rate: number;
}

export function progressiveTax(amount: number, brackets: Bracket[]) {
  return brackets.reduce((acc, { floor, rate }, i) => {
    return (
      acc +
      Math.max(
        Math.min(amount, brackets[i - 1]?.floor ?? Infinity) - floor,
        0
      ) *
        rate
    );
  }, 0);
}
