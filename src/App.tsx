// Data
import sampleFishes from "./sample-fishes";

// styles
import { useState } from "react";
import "./App.css";

// components
import { Divider } from "primereact/divider";

import Header from "./Components/Header";
import Order from "./Components/Order";
import Inventory from "./Components/Inventory";
import Fish from "./Components/Fish";

// types
import type { Fish as FishType, Fishes } from "./Components/AddFishForm.types";

function App() {
  const [fishes, setFishes] = useState<Fishes>({});

  const addFish = (fish: FishType) => {
    const newFishes = { ...fishes };
    newFishes[`fish${Date.now()}`] = fish;
    setFishes(newFishes);
  };

  const loadSampleFishes = () => {
    setFishes(sampleFishes);
  };

  return (
    <>
      <div className="catch-of-the-day">
        <div
          className="menu"
          style={{ overflow: "auto", paddingRight: "20px", width: "550px" }}
        >
          <Header heading="Catch of the Day" tagline="Fresh Seafood Market" />
          {Object.keys(fishes).map((key) => (
            <Fish key={key} details={fishes[key]} />
          ))}
        </div>
        <Divider layout="vertical" />
        <Order />
        <Divider layout="vertical" />
        <Inventory addFish={addFish} loadSampleFishes={loadSampleFishes} />
      </div>
    </>
  );
}

export default App;
