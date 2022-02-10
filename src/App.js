import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";
import Home2 from "./Home2";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateName from "./updateName";
import CreateBlog from "./CreateBlog";
import WrongPath from "./WrongPath";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />

      <div className="content">
        <Routes>
          <Route exact path="/update-name" element= {<UpdateName/>}></Route>
          <Route path="/" element ={<Home2/>}></Route>
          <Route path="/create" element ={<CreateBlog/>}></Route>
          <Route path="*" element ={<WrongPath/>}></Route>

          </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
