export default function Result({input}) {
    console.log(input);
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
                <tr>
                    <td>...1</td>
                    <td>...$3232</td>
                    <td>...$4343</td>
                    <td>...$344</td>
                    <td>...$3434</td>
                </tr>
            </tbody>
        </table>
    );
}
