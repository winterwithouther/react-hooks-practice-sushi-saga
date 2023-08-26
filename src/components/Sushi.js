import React, { useState } from "react";

function Sushi({name, img_url, price, handleCash}) {
  const [eaten, setEaten] = useState(false);

  function handleEaten() {
    const success = handleCash(price)
    if (success) {
      setEaten(true);
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEaten}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
