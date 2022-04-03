import { CountryId, CountryMetadata, COUNTRY_METADATA } from "./countries";

interface NetSalaryTable {
  country: CountryMetadata;
  socialSecurity: number;
  taxableIncome: number;
  incomeTax: number;
  otherTax: number;
  netSalary: number;
}

export function useNetSalary(
  grossAmount: number,
  countries: Set<CountryId>
): NetSalaryTable[] {
  return [...countries]
    .map((countryId) => COUNTRY_METADATA[countryId])
    .map((country) => {
      const { socialSecurity, taxableIncome, incomeTax, otherTax } =
        country.taxesAndDeductions(grossAmount);

      return {
        country,
        socialSecurity,
        taxableIncome,
        incomeTax,
        otherTax,
        netSalary: grossAmount - socialSecurity - incomeTax - otherTax,
      };
    });
}
