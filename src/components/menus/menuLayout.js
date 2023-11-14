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
              <h1 className="category">{drink.category}</h1>
            </div>
          ) : null}
          <p className="name">{drink.name}</p>
          {drink.info && <p className="info">{drink.info}</p>}
          <p className="price">{drink.price}</p>
        </div>
      ))}
    </>
  );
}
