import { progressiveTax } from "../utils/progressiveTax";

const HRK_EUR_EXCHANGE_RATE = 0.13;

const MAX_SOCIAL_SECURITY_INCOME = 686_664 * HRK_EUR_EXCHANGE_RATE;

const TAX_BRACKETS = [
  { floor: 360_000 * HRK_EUR_EXCHANGE_RATE, rate: 0.3 },
  { floor: 0, rate: 0.2 },
];

export default function (grossSalary: number) {
  const socialSecurity =
    Math.min(grossSalary, MAX_SOCIAL_SECURITY_INCOME) * 0.2;

  const allowance = 4_200 * HRK_EUR_EXCHANGE_RATE * 12;

  const taxableIncome = grossSalary - socialSecurity - allowance;

  const incomeTax = progressiveTax(grossSalary, TAX_BRACKETS);

  const otherTax = 0;

  return { socialSecurity, taxableIncome, incomeTax, otherTax };
}
