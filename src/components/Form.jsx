import React, { useRef, useState, useEffect } from "react";
import { Button, DropdownButton, Dropdown } from "react-bootstrap";

export default function Form({ leader, member, addTeam }) {
  const currentLeader = leader.find((usr) => usr.select === false);
  const currentActive = member.find((usr) => usr.select === false);
  let currentSelectedMember = "";

  return (
    <div className="input-group mb-3 margin-md" style={{ margin: "20px" }}>
      <select className="custom-select col-3">
        {currentLeader ? (
          <option value={currentLeader.name}>{currentLeader.name}</option>
        ) : (
          <option>N/A</option>
        )}
      </select>

      <select
        className="custom-select col-3"
        onChange={(e) => (currentSelectedMember = e.target.value)}
      >
        {member.some((usr) => usr.select === false) ? (
          member.map((usr, index) => (
            <option
              key={index}
              value={usr.name}
              disabled={usr.select}
              style={{ color: usr.select ? "red" : "black" }}
            >
              {usr.name}
            </option>
          ))
        ) : (
          <option>N/A</option>
        )}
      </select>
      <div className="input-group-append">
        <button
          className="btn btn-primary"
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
    </div>
  );
}
