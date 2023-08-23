import React from 'react';
import './App.css';
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import {Router,Route, useLocation} from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div>
      <h1>React app</h1>
    
    <Router>
      <Route path ="/" element = {<Home/>}/>
      <Route path="project" element={<About />} />
      <Route path= "about" element={<Contact/>} />
      <Route path= "contact" element= {<Project/>} />
       
    </Router>

    </div>
  );
}

export default App;
