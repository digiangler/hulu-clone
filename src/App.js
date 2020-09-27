import React, { useState } from "react";

import "./App.css";
import requests from "./requests";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Results from "./components/Results";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="app">
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
