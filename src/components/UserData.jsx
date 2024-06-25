import React from "react";

function UserData() {
  return (
    <form id="user-input">
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input type="number" value={1200} />
        </div>
        <div>
          <label>Initial Investment</label>
          <input type="number" value={1200} />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input type="number" value={1200} />
        </div>
        <div>
          <label>Initial Investment</label>
          <input type="number" value={1200} />
        </div>
      </div>
    </form>
  );
}

export default UserData;
