import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ inputValues }) {
  const results = calculateInvestmentResults(inputValues);

  results.forEach((result) => {
    result.investedCapital =
      inputValues.initialInvestment +
      inputValues.annualInvestment * result.year;
    result.totalInterest = result.valueEndOfYear - result.investedCapital;
  });

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <tr key={index}>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>{formatter.format(result.totalInterest)}</td>
            <td>{formatter.format(result.investedCapital)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
