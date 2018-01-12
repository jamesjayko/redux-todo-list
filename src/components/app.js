import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Addform from "./add_form";
import List from "./list";
import { Route } from "react-router-dom";

const App = () => (
  <div className="container">
      <Route exact path="/" component={List}/>
      <Route path="/add-item" component={Addform}/>
  </div>
);

export default App;
