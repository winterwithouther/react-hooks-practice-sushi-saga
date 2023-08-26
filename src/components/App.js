import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import MoreCash from "./MoreCash";

const API = "http://localhost:3001/sushis";

const allSushis = [];

function App() {
  const [sushis, setSushis] = useState([]);
  const [cash, setCash] = useState(100);
  const [plates, setPlates] = useState([]);

  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then(data => {
      data.forEach(sushi => {
        allSushis.push(sushi);
      })
    })
  }, [])

  function moreSushi() {
    const newSushis = [];

    while (newSushis.length < 4) {
      newSushis.push(allSushis.pop());
    }

    setSushis(newSushis);
  }
  
  function handleCash(sushiPrice) {
    if (cash >= sushiPrice) {
      setCash(cash - sushiPrice);
      plates.push("empty");
      return true;
    } else {
      return false;
    }
  }

  function addCash(addedCash) {
    setCash(cash + addedCash)
  }
  

  return (
    <div className="app">
      <SushiContainer sushis={sushis} moreSushi={moreSushi} handleCash={handleCash}/>
      <Table plates={plates} cash={cash}/>
      <MoreCash addCash={addCash}/>
    </div>
  );
}

export default App;
