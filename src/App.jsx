import Header from "./components/Header";
import UserData from "./components/UserData";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [scheme, setScheme] = useState({
    initial: 1000,
    final: 1200,
    return: 6,
    duration: 10,
  });

function handleChange(inputIdentifier, newValue){
  setScheme((ps) => {
    return {
      ...ps,
      [inputIdentifier]: newValue,
    }
  })
}

  return (
    <>
      <Header />
      <UserData onChange= {handleChange}  scheme = {scheme}/>
      <Result scheme = {scheme}/>
    </>
  );
}

export default App;
