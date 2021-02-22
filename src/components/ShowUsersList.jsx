import React from "react";

export default function ShowUsersList({ users }) {
  return (
    <div>
      {users.map((usr, index) => (
        <div
          key={index}
          style={{ textDecoration: usr.select ? "line-through" : "none" }}
        >
          {usr.name}
        </div>
      ))}
    </div>
  );
}
