import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import AddMemberForm from "./components/AddMembers";

function App() {
  const [members, setMembers] = useState([
    { name: "Doğan", email: "dgnyngz@gmail.com", rol: "Fullstack Web Dev" },
    { name: "Doğan", email: "dgnyngz@gmail.com", rol: "Fullstack Web Dev" },
    { name: "Doğan", email: "dgnyngz@gmail.com", rol: "Fullstack Web Dev" },
  ]);
  function addMember(member) {
    console.log("member", member);
    setMembers([...members, member]);
  }
  return (
    <div className="App">
      {" "}
      <ul>
        {members.map((member, i) => {
          return (
            <li key={i}>
              <a className="App-link" href={`mailto:${member.email}`}>
                {member.name} - {member.rol}
              </a>
            </li>
          );
        })}
      </ul>
      <AddMemberForm addMember={addMember} />
    </div>
  );
}

export default App;
