import React from "react" 
import Data from "./data.json";
import Navbar from "./Navbar.js";
import DisplayData from "./DisplayData.js";
import './App.css';

function App() {
  const jobArray = Data;
  const New = jobArray.new;
   return (
    <div className="App">
      <Navbar />
      <DisplayData array={jobArray} New={New}/>
    </div>
  );
}

export default App;
