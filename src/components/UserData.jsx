import React from "react";

function UserData({ onChange,scheme }) {
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              onChange={(e) => onChange("initialInvestment", e.target.value)}
              required
              value={scheme.initialInvestment}
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              onChange={(e) => onChange("annualInvestment", e.target.value)}
              required
              value={scheme.annualInvestment}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input
              type="number"
              onChange={(e) => onChange("expectedReturn", e.target.value)}
              required
              value={scheme.expectedReturn}
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              onChange={(e) => onChange("duration", e.target.value)}
              required
              value={scheme.duration}
            />
          </p>
        </div>
      </section>
    </>
  );
}

export default UserData;
