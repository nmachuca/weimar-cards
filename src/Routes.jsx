import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import App from './App.jsx'
import { Gallery } from './Gallery.jsx';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" element={<App />} />
      <Route exact path="/gallery" element={<Gallery />} />
      <Route path="*" render={() => <Redirect to={"/"} />} />
    </Switch>
  );
};

export default Routes;