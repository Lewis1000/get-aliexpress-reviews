import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

// Components
import Navigation from './components/Navigation';

// Pages
import Home from './pages/Home';
import Results from './pages/Results';
import Extra from './pages/Extra';

const App = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState(null);

  function toggle() {
      if (isToggle) {
          setIsToggle(false);
      } else {
          setIsToggle(true);
      };
  };

  function mobile() {
    if (window.innerWidth < 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    };
  };

  function send(value) {
    axios.post("/reviews", {url: value})
    .then((response) => {
      setResults(response);
      window.location.href = "/results";
    })
    .catch((err) => {
      setErrors(err);
      window.location.href = "/";
    });
  };

  useEffect(() => {
    window.addEventListener("resize", () => mobile());
    mobile();
  });

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navigation toggle={() => toggle()} isToggle={isToggle} isMobile={isMobile} />
          {!isToggle ? <Home isMobile={isMobile} send={(value) => send(value)} /> : null}
        </Route>
        <Route path="/results">
          <Navigation toggle={() => toggle()} isToggle={isToggle} isMobile={isMobile} />
          {!isToggle ? <Results isMobile={isMobile} results={results} /> : null}
        </Route>
        <Route path="/extra">
          <Navigation toggle={() => toggle()} isToggle={isToggle} isMobile={isMobile} />
          {!isToggle ? <Extra isMobile={isMobile} /> : null}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
