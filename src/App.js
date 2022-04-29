import './App.css';
import  {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Title from './Components/Title/Title'
import PlantData from "./Components/PlantData/PlantData";
import LastMeasure from "./Components/LastMeasure/LastMeasure";
import {useState} from "react";

function App() {

  return (
    <div className="App">
        <Navbar />
        <Title title={"Helecho"} />
        <PlantData />
        <LastMeasure />
    </div>
  );
}

export default App;
