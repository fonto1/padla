import React from "react";

export default function Teams({ teams }) {
  return (
    <div>
      <h1>FINAL TEAMS</h1>
      {teams.map((team, index) => (
        <div key={index}>{team}</div>
      ))}
    </div>
  );
}
