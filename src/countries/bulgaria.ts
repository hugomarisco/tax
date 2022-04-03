const BGN_EUR_EXCHANGE_RATE = 0.51;

const MAX_SOCIAL_SECURITY_INCOME = 3000 * BGN_EUR_EXCHANGE_RATE * 12;
const MIN_SOCIAL_SECURITY_INCOME = 650 * BGN_EUR_EXCHANGE_RATE * 12;

export default function (grossSalary: number) {
  const socialSecurity =
    Math.max(
      Math.min(grossSalary, MAX_SOCIAL_SECURITY_INCOME),
      MIN_SOCIAL_SECURITY_INCOME
    ) * 0.1378;

  const taxableIncome = grossSalary - socialSecurity;

  const incomeTax = 0.1 * taxableIncome;

  const otherTax = 0;

  return { socialSecurity, taxableIncome, incomeTax, otherTax };
}
