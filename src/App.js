import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import TinderCard from "react-tinder-card";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/chat" element={<h1>I am the chatpage</h1>} />
          <Route path="/" element={<h1>I am homepage</h1>} />
          <TinderCard />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
