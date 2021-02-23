import React from "react";

export default function Teams({ teams }) {
  return (
    <div>
      <h2>Teams</h2>
      {teams.map((team, index) => (
        <div key={index}>{team}</div>
      ))}
    </div>
  );
}
