import React from "react";
import NAvBar from "../src/components/NAvBar";
import Baner from "../src/components/Baner";
import Skills from "../src/components/Skills"
// import Projects from "./components/projects";
import './App.css'
 const App = () => {
  return (
    <div>
     <NAvBar />
     <Baner />
     <Skills />
     {/* <Projects/> */}
    </div>
  )
}

export default App;
