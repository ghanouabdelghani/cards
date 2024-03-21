import React, { useEffect, useState } from "react";
import products from "./data.json";
import ShopingCard from "./ShopingCard";
const container = {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr) ",
  gap: "20px",
  padding: "16px",
};

function ShoppingLIste() {
  const [data, setdata] = useState([]);
  const [count, setcount] = useState(20000);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setdata(products);
  }, []);
  const sendtotalprice = (qantity, price) => {
    if (!isNaN(qantity) && !isNaN(price)) {
      setTotal(total + qantity * price);
    }
  };

  return (
    <div>
      <div>
        <p>current credit{count}$</p>
        <p>total {total}$</p>
      </div>
      <div style={container}>
        {data.map((item, index) => {
          return (
            <ShopingCard
              key={index}
              name={item.name}
              descreption={item.descreption}
              price={item.price}
              sendtotalprice={sendtotalprice}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ShoppingLIste;
