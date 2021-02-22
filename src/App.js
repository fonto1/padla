import Form from "./components/Form";
import { useState, useEffect } from "react";
import Teams from "./components/Teams";
import AddPlayers from "./components/AddPlayers";

import "./App.css";
import ShowUsersList from "./components/ShowUsersList";

function App() {
  const [players, updatePlayers] = useState([]);
  const [leader, updateLeader] = useState([]);
  const [member, updateMember] = useState([]);
  const [teams, updateTeams] = useState([]);

  const addTeam = (selectLeader, selectMember) => {
    updateTeams((prev) => [...prev, `${selectLeader}/${selectMember}`]);

    updatePlayers((prev) => [
      ...prev.map((usr) =>
        usr.name === selectMember || usr.name === selectLeader
          ? { ...usr, select: true }
          : usr
      ),
    ]);
  };

  const addPlayer = (usr) => {
    updatePlayers((prev) => [...prev, { name: usr, select: false }]);
  };

  useEffect(() => {
    const use = [...players];
    const half = Math.ceil(use.length / 2);

    const firstHalf = use.splice(0, half);
    const secondHalf = use.splice(-half);

    updateLeader(() => firstHalf);
    updateMember(() => secondHalf);
  }, [players]);

  return (
    <div className="container">
      <div className="main">
        <div className="leftCenterTop">
          <AddPlayers addPlayer={addPlayer} />
        </div>
        <div className="rightTop">
          <Form leader={leader} addTeam={addTeam} member={member} />
        </div>
        <div className="leftBottem">
          <ShowUsersList users={leader} />
        </div>
        <div className="centerBottem">
          <ShowUsersList users={member} />
        </div>
        <div className="rightBottem">
          <Teams teams={teams} />
        </div>
      </div>
    </div>
  );
}

export default App;
