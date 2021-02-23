import React from "react";

export default function ShowUsersList({ users, titel }) {
  return (
    <div style={{ margin: "20px" }}>
      <h5>{titel}</h5>
      {users.map((usr, index) => (
        <div
          key={index}
          style={
            usr.select
              ? {
                  textDecoration: "line-through",
                  textDecorationColor: "red",
                  fontWeight: "bolder",
                }
              : {}
          }
        >
          {usr.name}
        </div>
      ))}
    </div>
  );
}
