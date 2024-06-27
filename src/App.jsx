import Header from "./components/Header";
import UserData from "./components/UserData";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [scheme, setScheme] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = scheme.duration >=1;

function handleChange(inputIdentifier, newValue){
  setScheme((ps) => {
    return {
      ...ps,
      [inputIdentifier]: +newValue,
    }
  })
}


  return (
    <>
      <Header />
      <UserData onChange= {handleChange}  scheme = {scheme}/>
      {!inputIsValid && <p className="center">Please Enter the duration greater than Zero</p>}
      {inputIsValid && <Result scheme = {scheme}/>}
    </>
  );
}

export default App;
