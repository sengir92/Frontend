import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";

import StarshipList from "./components/StarshipList";

function App() {
  return (
    <>
      <StarshipList />
    </>
  );
}

export default App;