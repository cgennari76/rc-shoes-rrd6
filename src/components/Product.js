import React from 'react';
import { useParams } from 'react-router-dom';

export const Product = ({products}) => {
  const params = useParams();
  const selected = params.id

  const filtered = Object.keys(products)
    .filter(key => selected.includes(key))
    .reduce((obj, key) => {
        obj[key] = products[key];
        return obj;
  }, {});  

  return (
    <div>
      <h2>This is the Product Detail component</h2>
      {Object.entries(filtered).map(([id, {name,img}]) => (
        <li key={id}>
          <h3>Brand: {name}</h3>
          <img src={img}  alt={name}/>
        </li>
      ))}
    </div>
  )
}
