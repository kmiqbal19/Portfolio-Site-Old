import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home/homepage.component";
import ProjectsPage from "./pages/Projects/projects.components";
import SkillsPageComponent from "./pages/Skills/skills.component";
import AboutPage from "./pages/About/about.component";

function App() {
  return (
    <Router>
      <>
        <div className="App" id="App">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/home" exact component={HomePage} />
            <Route path="/projects" exact component={ProjectsPage} />
            <Route path="/skills" exact component={SkillsPageComponent} />
            <Route path="/about" exact component={AboutPage} />
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
