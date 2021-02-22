import React, { useRef, useState, useEffect } from "react";
import { Button, DropdownButton, Dropdown } from "react-bootstrap";

export default function Form({ leader, member, addTeam }) {
  const currentLeader = leader.find((usr) => usr.select === false);
  const currentActive = member.find((usr) => usr.select === false);
  let currentSelectedMember = "";

  return (
    <div>
      <select>
        {currentLeader ? (
          <option value={currentLeader.name}>{currentLeader.name}</option>
        ) : (
          <option>N/A</option>
        )}
      </select>

      <select onChange={(e) => (currentSelectedMember = e.target.value)}>
        {member.some((usr) => usr.select === false) ? (
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
          if (currentLeader && currentSelectedMember) {
            addTeam(currentLeader.name, currentSelectedMember);
            currentSelectedMember = "";
          }
        }}
      >
        Add Team
      </button>
    </div>
  );
}
