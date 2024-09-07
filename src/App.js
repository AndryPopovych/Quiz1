import React from "react";
import Quiz from "./components/Quiz";
import { MdOutlineVideogameAsset } from "react-icons/md";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="introName">
      <h1>Квіз гра<MdOutlineVideogameAsset/></h1>
      </div>
      <Quiz />
    </div>
  );
}
export default App;