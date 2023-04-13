import React from "react";
import { Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import NotFound from "./Components/NotFound";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/skills" component={Skills} />
        <Route component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
