import { TaxesAndDeductions } from ".";
import { progressiveTax } from "../utils/progressiveTax";

const TAX_BRACKETS = [
  { floor: 60_001, rate: 0.35 },
  { floor: 19_501, rate: 0.25 },
  { floor: 14_501, rate: 0.25 },
  { floor: 9101, rate: 0.15 },
  { floor: 0, rate: 0 },
];

function calculateSocialSecurity(grossSalary: number) {
  const weeklySalary = grossSalary / 52;

  if (weeklySalary < 182.84) {
    return Math.min(weeklySalary * 0.1, 18.28) * 52;
  } else if (weeklySalary < 499.74) {
    return weeklySalary * 0.1 * 52;
  } else {
    return 49.97 * 52;
  }
}

export default function (grossSalary: number): TaxesAndDeductions {
  const socialSecurity = calculateSocialSecurity(grossSalary);

  const taxableIncome = grossSalary - socialSecurity;

  const incomeTax = progressiveTax(taxableIncome, TAX_BRACKETS);

  let otherTax = 0;

  return { socialSecurity, taxableIncome, incomeTax, otherTax };
}
