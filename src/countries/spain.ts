import { progressiveTax } from "../utils/progressiveTax";

const MIN_SOCIAL_SECURITY_INCOME = 1629.3 * 12;
const MAX_SOCIAL_SECURITY_INCOME = 4139.4 * 12;

const FEDERAL_TAX_BRACKETS = [
  { floor: 300_000, rate: 0.245 },
  { floor: 60_000, rate: 0.225 },
  { floor: 35_200, rate: 0.185 },
  { floor: 20_200, rate: 0.15 },
  { floor: 12_450, rate: 0.12 },
  { floor: 0, rate: 0.095 },
];

const STATE_TAX_BRACKETS = [
  { floor: 53_407, rate: 0.21 },
  { floor: 33_007, rate: 0.179 },
  { floor: 17_707, rate: 0.133 },
  { floor: 12_450, rate: 0.112 },
  { floor: 0, rate: 0.09 },
];

export default function (grossSalary: number) {
  const socialSecurity =
    Math.min(
      Math.max(grossSalary, MIN_SOCIAL_SECURITY_INCOME),
      MAX_SOCIAL_SECURITY_INCOME
    ) * 0.0635;

  const allowance = 5550;

  const taxableIncome = Math.max(grossSalary - socialSecurity - allowance, 0);

  const federalTax = progressiveTax(grossSalary, FEDERAL_TAX_BRACKETS);
  const stateTax = progressiveTax(grossSalary, STATE_TAX_BRACKETS);

  const incomeTax = federalTax + stateTax;

  const otherTax = 0;

  return { socialSecurity, taxableIncome, incomeTax, otherTax };
}
