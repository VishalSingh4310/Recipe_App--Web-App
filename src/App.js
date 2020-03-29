import React from "react";
import Recipe_Api from "./Recipe_Api";
import Specific_recipe from './Specific_recipe';
import Footer from './footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import "./App.css";

function App() {
   return (
      <Router>
         <div className="App">
            <Nav />
            <Switch>
               <Route path="/" exact component={Recipe_Api} />
               <Route path="/:id" component={Specific_recipe} />
            </Switch>
            <Footer />
         </div>
      </Router>
   );
}

export default App;
