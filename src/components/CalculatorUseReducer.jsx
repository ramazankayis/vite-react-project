import { useReducer } from "react";
import "./Calculator.css";
import { initialState, reducer } from "../reducers/reducerCalculator";


const CalculatorUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state2", state);

  const handleNumber1Change = (e) => {
    dispatch({ type: "SET_NUMBER1", payload: Number(e.target.value) });
  };
  const handleNumber2Change = (e) => {
    dispatch({ type: "SET_NUMBER2", payload: Number(e.target.value) });
  };
  const handleAddition = () => {
    dispatch({ type: "SET_RESULT", payload: state.number1 + state.number2 });
  };
  const handleClear = () => {
    dispatch({ type: "SET_CLEAR", payload: 0 });
  };
  return (
    <div className="calculator-container">
      <h1>useReducer</h1>
      <div className="form-container">
        <div className="form-group">
          <label className="form-label" htmlFor="number1">
            Number1
          </label>
          <input
            className="form-input"
            type="number"
            id="number1"
            onChange={handleNumber1Change}
            value={state.number1}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="number2">
            Number2
          </label>
          <input
            className="form-input"
            type="number"
            id="number2"
            onChange={handleNumber2Change}
            value={state.number2}
          />
        </div>
        <button className="form-button" onClick={handleAddition}>
          Add
        </button>
        <button className="form-button" onClick={handleClear}>
          Clear
        </button>
        <div className="form-group">
          <label className="form-label" htmlFor="result">
            Result
          </label>
          <input
            className="form-input"
            type="number"
            id="result"
            value={state.result}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default CalculatorUseReducer;
