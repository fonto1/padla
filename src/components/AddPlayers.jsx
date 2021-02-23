import React, { useRef } from "react";

export default function AddPlayers({ addPlayer, status, players }) {
  let currentPlayer = "";
  const value = useRef();

  return (
    <form
      style={{ display: "flex" }}
      onSubmit={(e) => {
        e.preventDefault();
        if (
          currentPlayer &&
          value.current.value &&
          !players.some((usr) => usr.name == currentPlayer)
        ) {
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
