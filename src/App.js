import React from "react";
import { HashRouter, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";


function App() {
  return (
    <HashRouter basename="/">
    <Route  path="/" component={ Home } />
    <Route  path="/projects" component={ Projects } />
    <Route  path="/about" component={ About } />
    <Route  path="/contact" component={ Contact } />
    <Route  path="/skills" component={ Skills } />
    </HashRouter>
  );
}

export default App;
