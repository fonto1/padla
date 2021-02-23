import React from "react";

export default function ShowUsersList({ users, titel }) {
  return (
    <div>
      <h2>{titel}</h2>
      {users.map((usr, index) => (
        <div
          key={index}
          style={
            usr.select
              ? { textDecoration: "line-through", textDecorationColor: "red" }
              : {}
          }
        >
          {usr.name}
        </div>
      ))}
    </div>
  );
}
