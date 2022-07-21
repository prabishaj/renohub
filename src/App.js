import React from "react";
import { useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ThemeProvider } from 'styled-components';
import config  from './config/config';
import {GlobalStyles} from './assets/styles/js/GlobalStyles';
import { Landing } from "./components/Pages/Landing";

const { theme,darktheme } = config;

const App = () => {
  const darkmode = useSelector((state) => state.Layout.darkmode);
 
  return (
    <div className="App">
      <ThemeProvider theme={darkmode ? darktheme : theme} >
      <GlobalStyles />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
        
            <Route exact path="/" component={Landing}/>
            {/* <Route path="/" component={Layout}></Route> */}
        </Switch>
      </Router>
      </ThemeProvider>
    </div>
  );
}
export default App;

