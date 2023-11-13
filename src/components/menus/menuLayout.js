import React from 'react';

export default function MenuLayout(props) {
const {menu} = props

    return (
      <>
      {menu.map((drink, index) => (
        <div key={index}>
          {index === 0 || drink.category !== menu[index - 1].category ? (
            <p>{drink.category}</p>
          ) : null}
          <p>Name: {drink.name}</p>
          <p>Info: {drink.info}</p>
          <p>Price: ${drink.price}</p>
        </div>
      ))}
    </>
    );
  }
