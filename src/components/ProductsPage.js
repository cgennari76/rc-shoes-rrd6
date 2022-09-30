import React from 'react';
import { Route, Link, useParams } from 'react-router-dom';
import { Product } from './Product';

export const ProductsPage = ({products}) => {
  
  return (
    <div className="product-box">
      <h2 className="title">Products Component</h2>
      <div className="box">
      {Object.entries(products).map(([id, {name,img}]) => (
        <li key={id}>
          <Link to={`/product/${id}`}>
            <h2 className="product-name">{name}</h2>
            <img src={img} alt={name}/>
          </Link>
        </li>
      ))}
      </div>
    </div>
  )
}
