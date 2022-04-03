import { useState } from "react";
import { useSet } from "react-use";
import { CountryId, COUNTRY_METADATA } from "./countries";
import { NetSalaryTable } from "./NetSalaryTable";

export function App() {
  const [grossSalary, setGrossSalary] = useState(50000);

  const [
    selectedCountries,
    { add: selectCountry, remove: deselectCountry, has: isCountrySelected },
  ] = useSet(
    new Set(
      Object.keys(COUNTRY_METADATA).map(
        (countryId) => parseInt(countryId) as unknown as CountryId
      )
    )
  );

  return (
    <div>
      <label htmlFor="grossSalary">Gross salary</label>
      <input
        type="number"
        id="grossSalary"
        value={grossSalary}
        onChange={(ev) => setGrossSalary(parseFloat(ev.target.value))}
      />

      {Object.values(COUNTRY_METADATA).map((country) => (
        <label key={country.id}>
          <input
            type="checkbox"
            checked={isCountrySelected(country.id)}
            onChange={(ev) => {
              if (ev.target.checked) {
                selectCountry(country.id);
              } else {
                deselectCountry(country.id);
              }
            }}
          />
          {country.name}
        </label>
      ))}

      <NetSalaryTable grossSalary={grossSalary} countries={selectedCountries} />
    </div>
  );
}
