import { calculateInvestmentResults, formatter } from '../util/investment.js';
const Results = ({ input }) => {
    const result = calculateInvestmentResults(input);

    const initialInvestment =
        result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {result &&
                    result.map(row => {
                        const totalInterest2 = result
                            .filter(record => record.year <= row.year)
                            .reduce((a, currentValue) => a + currentValue.interest, 0);
                        const totalInterest =
                            row.valueEndOfYear -
                            row.annualInvestment * row.year -
                            initialInvestment;

                        const totalAmountInvested = row.valueEndOfYear - totalInterest;

                        return (
                            <tr key={row.year}>
                                <td>{row.year}</td>
                                <td>{formatter.format(row.valueEndOfYear)}</td>
                                <td>{formatter.format(row.interest)}</td>
                                <td>{formatter.format(totalInterest2)}</td>
                                <td>{formatter.format(totalAmountInvested)}</td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
};

export default Results;
