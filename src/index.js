import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import baseStyle from "./globalStyle/index.scss";

import Delivery from "./Delivery";
import Nav from "./Nav";

const App = () => {
  return (
    <div>
      <Router>
        <Nav/>

        <Switch>
          <Route>
            <Delivery/>
          </Route>
        </Switch>
   
      </Router>

    </div>
  )
}

ReactDom.render(<App/>, document.getElementById('root'))