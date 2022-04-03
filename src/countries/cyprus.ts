import { TaxesAndDeductions } from ".";
import { progressiveTax } from "../utils/progressiveTax";

const MAX_SOCIAL_SECURITY_INCOME = 57_408;
const MAX_GHS_INCOME = 180_000;

const TAX_BRACKETS = [
  { floor: 60_001, rate: 0.35 },
  { floor: 36_301, rate: 0.3 },
  { floor: 28_001, rate: 0.25 },
  { floor: 19_501, rate: 0.2 },
  { floor: 0, rate: 0 },
];

export default function (grossSalary: number): TaxesAndDeductions {
  const ghs = Math.min(grossSalary, MAX_GHS_INCOME) * 0.0265;

  const socialSecurity =
    Math.min(grossSalary, MAX_SOCIAL_SECURITY_INCOME) * 0.083 + ghs;

  const taxableIncome = grossSalary - socialSecurity;

  const incomeTax = progressiveTax(taxableIncome, TAX_BRACKETS);

  const otherTax = 0;

  return { socialSecurity, taxableIncome, incomeTax, otherTax };
}
