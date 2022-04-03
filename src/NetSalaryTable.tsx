import { CountryId } from "./countries";
import { useNetSalary } from "./useNetSalary";
import { formatCurrency } from "./utils/formatCurrency";

interface NetSalaryTableProps {
  grossSalary: number;
  countries: Set<CountryId>;
}

export function NetSalaryTable({
  grossSalary,
  countries,
}: NetSalaryTableProps) {
  const table = useNetSalary(grossSalary, countries);

  return (
    <table>
      <thead>
        <tr>
          <th>Country</th>
          <th>Social Security</th>
          <th>Income Tax</th>
          <th>Other Tax</th>
          <th>Net Salary</th>
        </tr>
      </thead>
      <tbody>
        {table.map(
          ({ country, socialSecurity, incomeTax, otherTax, netSalary }) => (
            <tr key={country.id}>
              <td>{country.name}</td>
              <td>{formatCurrency(socialSecurity)}</td>
              <td>{formatCurrency(incomeTax)}</td>
              <td>{formatCurrency(otherTax)}</td>
              <td>{formatCurrency(netSalary)}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
