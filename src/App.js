import React, { useState, useEffect } from "react";
import CardGrid from "./components/CardGrid";
import Nav from "./components/Nav";
import Mood from "./components/Mood";
import queryString from "query-string";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

let parsed = queryString.parse(window.location.search);

const App = () => {
  return (
    <Router>
      <div className="container">
        <Nav accessToken={parsed.access_token} />
        <Switch>
          <Route path="/" exact>
            <CardGrid accessToken={parsed.access_token} />
          </Route>
          <Route path={`/mood`}>
            <Mood accessToken={parsed.access_token} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

/*async function getUser(token) {
    const response = await fetch(
      "https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=10&offset=0",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const data = await response.json();
    const vals = await data.items;
    return vals;
  }

  const data = getUser(accessToken); */
