import React from 'react';

export default function MenuLayout(props) {
const {menu} = props

    return (
      <>
        {menu.map((drink, index) => (
          <div key={index}>
            <p>Name: {drink.name}</p>
            <p>Info: {drink.info}</p>
            <p>Price: ${drink.price}</p>
          </div>
        ))}
      </>
    );
  }
