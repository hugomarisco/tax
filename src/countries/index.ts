import bulgariaTaxesAndDeductions from "./bulgaria";
import portugalTaxesAndDeductions from "./portugal";
import spainTaxesAndDeductions from "./spain";
import croatiaTaxesAndDeductions from "./croatia";
import maltaTaxesAndDeductions from "./malta";
import cyprusTaxesAndDeductions from "./cyprus";

export enum CountryId {
  PORTUGAL,
  BULGARIA,
  SPAIN,
  CROATIA,
  MALTA,
  CYPRUS,
}

export interface TaxesAndDeductions {
  socialSecurity: number;
  taxableIncome: number;
  incomeTax: number;
  otherTax: number;
}

export interface CountryMetadata {
  id: CountryId;
  name: string;
  taxesAndDeductions(grossSalary: number): TaxesAndDeductions;
}

export const COUNTRY_METADATA: Record<CountryId, CountryMetadata> = {
  [CountryId.PORTUGAL]: {
    id: CountryId.PORTUGAL,
    name: "Portugal",
    taxesAndDeductions: portugalTaxesAndDeductions,
  },
  [CountryId.BULGARIA]: {
    id: CountryId.BULGARIA,
    name: "Bulgaria",
    taxesAndDeductions: bulgariaTaxesAndDeductions,
  },
  [CountryId.SPAIN]: {
    id: CountryId.SPAIN,
    name: "Spain",
    taxesAndDeductions: spainTaxesAndDeductions,
  },
  [CountryId.CROATIA]: {
    id: CountryId.CROATIA,
    name: "Croatia",
    taxesAndDeductions: croatiaTaxesAndDeductions,
  },
  [CountryId.MALTA]: {
    id: CountryId.MALTA,
    name: "Malta",
    taxesAndDeductions: maltaTaxesAndDeductions,
  },
  [CountryId.CYPRUS]: {
    id: CountryId.CYPRUS,
    name: "Cyprus",
    taxesAndDeductions: cyprusTaxesAndDeductions,
  },
};
