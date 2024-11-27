import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Home from "./components/Home";
import Video from "./components/Video";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/signin" Component={Signin} />
        <Route path="/" Component={Home} />
        <Route path="/video" Component={Video} />
      </Routes>
    </div>
  );
};

export default App;
