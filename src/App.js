import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";

function App() {
  return (
    <Switch>
    <Route exact path="/" component={ Home } />
    <Route exact path="/projects" component={ Projects } />
    <Route exact path="/about" component={ About } />
    <Route exact path="/contact" component={ Contact } />
    <Route exact path="/skills" component={ Skills } />
    </Switch>
  );
}

export default App;
