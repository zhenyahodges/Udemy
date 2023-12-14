import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Result({ input }) {
    const resultsData = calculateInvestmentResults(input);
    const initialInvestment =
        resultsData[0].valueEndOfYear -
        resultsData[0].interest -
        resultsData[0].annualInvestment;
    return (
        <table id='result'>
            <thead id='result'>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody id='result'>
                {resultsData.map((r) => {
                    const totalInterestYear =
                        r.valueEndOfYear -
                        r.annualInvestment * r.year -
                        initialInvestment;

                    const totalAmountInvested =
                        r.valueEndOfYear - totalInterestYear;

                    return (
                        <tr key={r.year}>
                            <td>{r.year}</td>
                            <td>{formatter.format(r.valueEndOfYear)}</td>
                            <td>{formatter.format(r.interest)}</td>
                            <td>{formatter.format(totalInterestYear)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
