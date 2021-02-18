import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from 'axios';

// Components
import Navigation from './components/Navigation';

// Pages
import Home from './pages/Home';
import Results from './pages/Results';
import Extra from './pages/Extra';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#E52F20"
    },
    secondary: {
      main: "#F79917"
    },
    type: "light"
  },
  typography: {
    fontFamily: "Public Sans",
    button: {
      textTransform: "none"
    }
  },
  mixins: {
    toolbar: {
      minHeight:110
    }
  }
});

const App = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
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
    setLoading(true);
    axios.post("/reviews", {producturl: value})
    .then((response) => {
      setResults(response.data);
      setLoading(false);
    })
    .catch((err) => {
      setErrors(err.message);
      setLoading(false);
    });
  };

  useEffect(() => {
    window.addEventListener("resize", () => mobile());
    mobile();
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation toggle={() => toggle()} isToggle={isToggle} isMobile={isMobile} />
      <Router>
        <Switch>
          <Route path="/results">
            {!isToggle ? <Results isMobile={isMobile} results={results} /> : null}
          </Route>
          <Route path="/extra">
            {!isToggle ? <Extra isMobile={isMobile} /> : null}
          </Route>
          <Route path="/">
            {!isToggle ? <Home isMobile={isMobile} send={(value) => send(value)} /> : null}
            {results ? <Redirect to="/results" /> : null}
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
