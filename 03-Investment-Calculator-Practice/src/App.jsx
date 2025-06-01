import { useState } from "react";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleInputChange(id, value) {
    setInputValues((prevValues) => ({
      ...prevValues,
      [id]: parseFloat(value),
    }));
  }

  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <UserInput
            id="initialInvestment"
            label="INITIAL INVESTMENT"
            value={inputValues.initialInvestment}
            onValueChange={handleInputChange}
          />
          <UserInput
            id="annualInvestment"
            label="ANNUAL INVESTMENT"
            value={inputValues.annualInvestment}
            onValueChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <UserInput
            id="expectedReturn"
            label="EXPECTED RETURN"
            value={inputValues.expectedReturn}
            onValueChange={handleInputChange}
          />
          <UserInput
            id="duration"
            label="DURATION"
            value={inputValues.duration}
            onValueChange={handleInputChange}
          />
        </div>
      </div>

      <Result inputValues={inputValues} />
    </>
  );
}

export default App;
