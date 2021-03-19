import React from "react";
import Home from "./pages/Home";
import Signup from "./components/Signup";
import { AppProvider } from "./context/AppContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Router>
        <AppProvider>
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Home} />
          </Switch>
        </AppProvider>
      </Router>
    </div>
  );
}

export default App;
