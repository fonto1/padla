import React, { useRef } from "react";

export default function AddPlayers({ addPlayer, status, players }) {
  let currentPlayer = "";
  const value = useRef();

  return (
    <form
      style={{ display: "flex", margin: "20px" }}
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
      <div className="form-group row">
        <input
          className="form-control col-6"
          ref={value}
          onChange={(e) => (currentPlayer = e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary col-6"
          value="Add Player"
          disabled={status}
        >
          Add Player
        </button>
      </div>
    </form>
  );
}
