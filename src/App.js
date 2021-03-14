import React from "react";
import "./App.css";
import Add from "./components/Add";
import EventBox from "./components/EventBox";
import Header from "./components/Header";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div>
        <Header />
        <Add />
        <EventBox />
      </div>
    </AppProvider>
  );
}

export default App;
