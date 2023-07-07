import { Link, Routes, Route } from "react-router-dom";

import Notes from "./views/Notes";
import Create from "./views/Notes/components/Form/create";
import Edit from "./views/Notes/components/Form/edit";
import Detail from "./views/Notes/components/Form/detail";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="nav">
        <Link to={"/"}>
          <button className="menu-item">List Notes</button>
        </Link>
        <Link to={"/create"}>
          <button className="menu-item">Create note</button>
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
