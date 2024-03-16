import {useState } from "react";
import "./App.css";
import AddUser from "./AddUser.jsx";
import Table from "./Table.jsx";

function App() {
  const [users, setUsers] = useState(true);
  const userCall = () => {
    setUsers(!users)
  };
  return (
    <div>
      <header>
        <h2>CRUD</h2>
      </header>
      <br />
      <div className="container">
        <div className="row ">
          <div className="col-5">
            <AddUser userCall={userCall} />
          </div>
          <div className="col-7">
            <Table  userRender={users}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
