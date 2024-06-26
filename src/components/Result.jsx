import { calculateInvestmentResults } from "../util/investment";
export default function Result({scheme}) {

let resultData = calculateInvestmentResults(scheme);
console.log(resultData);

    return (<>
    <p>Results!!!</p>
    </>)

}