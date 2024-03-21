import React, { useState } from "react";

const container = {
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  border: "2px solid #ccc",
  borderRadius: "5px",
  padding: "10px",
};

const button = {
  display: "flex",
  gap: "15px",

  height: "100px",
};

const totalPriceStyle = {
  border: "2px solid #ccc",
  borderRadius: "5px",
  fontSize: "30px",
};

export default function ShopingCard({
  name,
  description,
  price,
  sendTotalPrice,
  check,
}) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div style={container}>
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      <p>Price: {price}</p>

      <div style={button}>
        <p style={totalPriceStyle}>{price * quantity}</p>
        <button
          onClick={() => {
            setQuantity((ghanou) => ghanou + 1);
            sendTotalPrice(1, price);
          }}
        >
          +
        </button>
        <p>{quantity}</p>

        <button
          onClick={() => {
            if (quantity > 0) {
              setQuantity((prevQuantity) => prevQuantity - 1);
              sendTotalPrice(1, -price);
            }
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}
