import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from 'axios';

// Components
import Navigation from './components/Navigation';
import Loading from './components/Loading';

// Pages
import Home from './pages/Home';
import Results from './pages/Results';

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

class App extends Component {
  state = {
    isToggle: false,
    isMobile: false,
    isLoading: true,
    errors: null
  };

  toggle = () => {
      if (this.state.isToggle) {
          this.setState({isToggle: false});
      } else {
          this.setState({isToggle: true});
      };
  };

  mobile = () => {
    if (window.innerWidth < 600) {
      this.setState({isMobile: true});
    } else {
      this.setState({isMobile: false});
    };
  };

  send = (value) => {
    this.setState({isLoading: true});
    axios.post("/reviews", {producturl: value})
    .then((response) => {
      this.props.dispatch({type: "SET", data: response.data});
      window.location.href = "/results";
      this.setState({isLoading: false});
    })
    .catch((err) => {
      this.setState({isLoading: false, errors: err});
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.mobile);
    this.mobile();
    this.setState({isLoading: false});
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {!this.state.isLoading ?
        <React.Fragment>
          <Router>
            <Switch>
              <Route exact path="/results">
                <Navigation toggle={this.toggle} isToggle={this.state.isToggle} isMobile={this.state.isMobile} />
                <Results isMobile={this.state.isMobile} results={this.props.results} />
              </Route>
              <Route exact path="/">
                <Navigation toggle={this.toggle} isToggle={this.state.isToggle} isMobile={this.state.isMobile} />
                {!this.state.isToggle ? <Home isMobile={this.state.isMobile} send={(value) => this.send(value)} /> : null}
              </Route>
            </Switch>
          </Router>
        </React.Fragment> :
        <Loading />
        }
      </ThemeProvider>
    );
  }
};

const mapStateToProps = (state) => ({
  results: state.results
});

export default connect(mapStateToProps)(App);
