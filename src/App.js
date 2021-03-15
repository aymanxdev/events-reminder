import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

import { AppProvider } from "./context/AppContext";

import "./App.css";

function App() {
  return (
    <AppProvider>
      <div>
        <Header />
        <Home />
      </div>
    </AppProvider>
  );
}

export default App;
