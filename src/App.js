import React from "react";
import Header from "./components/Header.js";
import CardGrid from "./components/CardGrid";
import MostPlayed from "./components/MostPlayed";
import Mood from "./components/Mood";
import Footer from "./components/Footer";
import queryString from "query-string";
import "./App.css";

let parsed = queryString.parse(window.location.search);

const App = () => {
  return (
    <>
      <Header accessToken={parsed.access_token} />
      <div className="container">
        <CardGrid accessToken={parsed.access_token} />
        <MostPlayed accessToken={parsed.access_token} />
        <Mood accessToken={parsed.access_token} />
      </div>
      <Footer />
    </>
  );
};

export default App;
