import React from "react";

export default function ShowUsersList({ users }) {
  return (
    <div>
      {users.map((usr, index) => (
        <div
          key={index}
          style={{ textDecoration: usr.select ? "line-through" : "inital" }}
        >
          {usr.name}
        </div>
      ))}
    </div>
  );
}
