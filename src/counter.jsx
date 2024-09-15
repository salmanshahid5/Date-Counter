import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="counter-container">
      <div className="step">
        <button className="step-btn" onClick={() => setStep((c) => c - 1)}>
          -
        </button>
        <span className="heading">Step:{step}</span>
        <button className="step-btn" onClick={() => setStep((c) => c + 1)}>
          +
        </button>
      </div>
      <div className="step">
        <button className="step-btn" onClick={() => setCount((c) => c - step)}>
          -
        </button>
        <span className="heading">Count:{count}</span>
        <button className="step-btn" onClick={() => setCount((c) => c + step)}>
          +
        </button>
      </div>
      <p>
        <span>
          {count == 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${count} days ago was`}
        </span>
        <span>{`${date.toDateString()}`}</span>
      </p>
    </div>
  ); 
}
export default Counter;
