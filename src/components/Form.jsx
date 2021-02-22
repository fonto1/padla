import React from "react";
import { Button, DropdownButton, Dropdown } from "react-bootstrap";

export default function Form({ leader, member, addTeam }) {
  const currentLeader = leader.find((usr) => usr.select === false);
  let currentMember = "";
  return (
    <div>
      <select>
        {currentLeader ? (
          <option value={currentLeader.name}>{currentLeader.name}</option>
        ) : (
          <option>N/A</option>
        )}
      </select>

      <select onChange={(e) => (currentMember = e.target.value)}>
        {member.length >= 1 ? (
          member.map((usr, index) => (
            <option key={index} value={usr.name} disabled={usr.select}>
              {usr.name}
            </option>
          ))
        ) : (
          <option>N/A</option>
        )}
      </select>

      <button
        onClick={() => {
          if (currentLeader && currentMember)
            addTeam(currentLeader.name, currentMember);
        }}
      >
        Add Team
      </button>
    </div>
  );
}
