import Form from "./components/Form";
import { useState, useEffect } from "react";
import Teams from "./components/Teams";
import AddPlayers from "./components/AddPlayers";

import "./App.css";
import ShowUsersList from "./components/ShowUsersList";

function App() {
  const [disableAddPlayerButton, setDisabledAddPlayerButton] = useState(false);
  const [players, updatePlayers] = useState([]);
  const [leader, updateLeader] = useState([]);
  const [member, updateMember] = useState([]);
  const [teams, updateTeams] = useState([]);

  const addTeam = (selectLeader, selectMember) => {
    if (!disableAddPlayerButton) {
      setDisabledAddPlayerButton(!disableAddPlayerButton);
    }

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

    updateLeader(use.splice(0, half));
    updateMember(use.splice(-half));
  }, [players]);

  return (
    <div className="container">
      <div className="main">
        <div className="leftCenterTop">
          <AddPlayers addPlayer={addPlayer} status={disableAddPlayerButton} />
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
