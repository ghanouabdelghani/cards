import React, { useEffect, useState } from "react";
import products from "./data.json";
import ShopingCard from "./ShopingCard";

const container = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "20px",
  padding: "16px",
};
const bntcheck = {
  position: "relative",
  left: "1300px",
  bottom: "200px",
  width: "200px",
  height: "100px",
  fontSize: "24px",
  borderRadius: "10px",
};
const header = {
  fontSize: "24px",
  textAlign: "center",
};

function ShoppingList() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(20000);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setData(products);
  }, []);

  const sendTotalPrice = (quantity, price) => {
    if (!isNaN(quantity) && !isNaN(price)) {
      setTotal((prevTotal) => prevTotal + price );
    }
  };

  const checkout = () => {
    if (total > 0) {
      let chek = count - total;
      if (chek >= 0) {
        setCount(chek);
        setTotal(0);
      } else {
        alert("khlassou drahmek kho !");
      }
    }
  };

  return (
    <div>
      <div style={header}>
        <p>Current credit: {count}$</p>
        <p>Total: {total}$</p>
        <p></p>
      </div>
      <div style={container}>
        {data.map((item, index) => (
          <ShopingCard
            key={index}
            name={item.name}
            description={item.description}
            price={item.price}
            sendTotalPrice={sendTotalPrice}
          />
        ))}
      </div>
      <button style={bntcheck} onClick={checkout}>
        Checkout
      </button>
    </div>
  );
}

export default ShoppingList;
