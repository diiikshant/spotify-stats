import React from "react";
import CardGrid from "./components/CardGrid";
import Footer from "./components/Footer";
import Mood from "./components/Mood";
import queryString from "query-string";
import "./App.css";

let parsed = queryString.parse(window.location.search);

const App = () => {
  return (
    <>
      <div className="container">
        <CardGrid accessToken={parsed.access_token} />
        <Mood accessToken={parsed.access_token} />
      </div>
      <Footer />
    </>
  );
};

export default App;
