import React from "react";

export default function Teams({ teams }) {
  return (
    <div style={{ margin: "20px" }}>
      <h5>Teams</h5>
      {teams.map((team, index) => (
        <div key={index}>{team}</div>
      ))}
    </div>
  );
}
