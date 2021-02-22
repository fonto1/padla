import React, { useRef } from "react";

export default function AddPlayers({ addPlayer }) {
  let currentPlayer = "";

  const value = useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addPlayer(currentPlayer);
        currentPlayer = "";
        value.current.value = "";
      }}
    >
      <input ref={value} onChange={(e) => (currentPlayer = e.target.value)} />
      <input type="submit" value="Add Player" />
    </form>
  );
}
