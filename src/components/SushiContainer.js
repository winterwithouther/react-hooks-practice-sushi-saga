import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushis, moreSushi, handleCash}) {
  const displayedSushi = sushis.map(sushi => {
    return <Sushi 
    key={sushi.id} 
    name={sushi.name} 
    img_url={sushi.img_url} 
    price={sushi.price} 
    handleCash={handleCash}/>
  })

  return (
    <div className="belt">
      {displayedSushi}
      <MoreButton moreSushi={moreSushi}/>
    </div>
  );
}

export default SushiContainer;
