import { TaxesAndDeductions } from ".";
import { progressiveTax } from "../utils/progressiveTax";

const TAX_BRACKETS = [
  { floor: 80_882, rate: 0.48 },
  { floor: 36_967, rate: 0.45 },
  { floor: 25_075, rate: 0.37 },
  { floor: 20_322, rate: 0.35 },
  { floor: 10_732, rate: 0.285 },
  { floor: 7112, rate: 0.23 },
  { floor: 0, rate: 0.145 },
];

const SOLIDARITY_TAX_BRACKETS = [
  { floor: 250_000, rate: 0.05 },
  { floor: 80_000, rate: 0.025 },
];

export default function (grossSalary: number): TaxesAndDeductions {
  const socialSecurity = grossSalary * 0.11;

  const taxableIncome = grossSalary - Math.max(socialSecurity, 4_104);

  const incomeTax = progressiveTax(taxableIncome, TAX_BRACKETS);

  let otherTax = progressiveTax(taxableIncome, SOLIDARITY_TAX_BRACKETS);

  return { socialSecurity, taxableIncome, incomeTax, otherTax };
}
