import "./App.css";
import React from "react";
import TopGrid from "../TopGrid/TopGrid";
import MainGrid from "../MainGrid/MainGrid";
import { AppProvider } from "../../Context";

function App() {
  return (
    <AppProvider>
      <div>
        <TopGrid />
        <MainGrid />
      </div>
    </AppProvider>
  );
}

export default App;
