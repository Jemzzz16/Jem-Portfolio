import React from "react";
import Home from '../../Components/Home/Home'
import About from '../../Components/About/About'
import Projects from '../../Components/Projects/Projects'
import Contact from '../../Components/Contact/Contact'
import { Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <div>
    <Switch>
      <Route path='/about'>
          <About />
      </Route>

      <Route path='/projects'>
        <Projects/>
      </Route>

      <Route path='/contact'>
        <Contact />
      </Route>

      <Route path='/'>
        <Home />
      </Route>

    </Switch>
  </div>
  );
};

export default Routes;
