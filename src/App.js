import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import DataProvider from "./contexts/Data";
import ThemeProvider from "./contexts/Themes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Details from "./components/Details";
import Region from "./components/Region";

export default function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <div className="App">
          <Router>
          <Header />
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/details/:country" component={Details}/>
              <Route path="/region/:reg" component={Region} />
            </Switch>
          <Footer />
          </Router>
        </div>
      </DataProvider>
    </ThemeProvider>
  );
}