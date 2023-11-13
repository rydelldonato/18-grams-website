import React from "react";
import "./menuLayout.css";

export default function MenuLayout(props) {
  const { menu } = props;

  return (
    <>
      {menu.map((drink, index) => (
        <div className="menuItemDiv" key={index}>
          {index === 0 || drink.category !== menu[index - 1].category ? (
            <div className="categoryDiv">
              <div>
                <img alt="coffee-beans" src="./icons-coffee-beans.png" />
              </div>
              <h3 className="category">{drink.category}</h3>
            </div>
          ) : null}
          <p>Name: {drink.name}</p>
          <p>Info: {drink.info}</p>
          <p>Price: ${drink.price}</p>
        </div>
      ))}
    </>
  );
}
