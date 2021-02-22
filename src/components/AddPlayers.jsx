import React, { useRef } from "react";

export default function AddPlayers({ addPlayer, status }) {
  let currentPlayer = "";

  const value = useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (currentPlayer && value.current.value) {
          addPlayer(currentPlayer);
          currentPlayer = "";
          value.current.value = "";
        }
      }}
    >
      <input ref={value} onChange={(e) => (currentPlayer = e.target.value)} />
      <input type="submit" value="Add Player" disabled={status} />
    </form>
  );
}
