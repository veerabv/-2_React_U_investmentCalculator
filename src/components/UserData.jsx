import React, { useState } from "react";

function UserData() {
  const [scheme, setScheme] = useState({
    initial: 1000,
    final: 1200,
    return: 6,
    duration: 10,
  });
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              onChange={(e) =>
                setScheme((ps) => ({ ...ps, initial: e.target.value }))
              }
              required
              value={scheme.initial}
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              onChange={(e) =>
                setScheme((ps) => ({ ...ps, final: e.target.value }))
              }
              required
              value={scheme.final}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input
              type="number"
              onChange={(e) =>
                setScheme((ps) => ({ ...ps, return: e.target.value }))
              }
              required
              value={scheme.return}
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              onChange={(e) =>
                setScheme((ps) => ({ ...ps, duration: e.target.value }))
              }
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
