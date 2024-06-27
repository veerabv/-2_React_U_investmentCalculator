import { calculateInvestmentResults , formatter } from "../util/investment";
export default function Result({scheme}) {

let resultData = calculateInvestmentResults(scheme);
console.log(resultData);
 let investedValue = resultData[0].valueEndOfYear - resultData[0].annualInvestment-resultData[0].interest;

    return (<>
    <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Invesment Value</th>
                <th>Intrest(year)</th>
                <th>Total Intrest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultData.map((yearData) => {
                const totalIntrest  = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - investedValue;
                const totalAmountInvested = yearData.valueEndOfYear - totalIntrest;
                return(
                    <tr key = {yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalIntrest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                )
            })}

        </tbody>
    </table>
    </>)

}