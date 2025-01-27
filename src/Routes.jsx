import React from "react";
import { Route, Routes, Redirect } from "react-router-dom";
import App from './App.jsx'
import { Gallery } from './Gallery.jsx';

function Routes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="*" render={() => <Redirect to={"/"} />} />
    </Routes>
  );
};

export default Routes;