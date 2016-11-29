import React from 'react';
import classnames from 'classnames';
import './Grocery.css';

  const Grocery = ({ name, quantity, notes, purchased, starred, onPurchase, onStar, onDelete }) => {
    return (
      <article className={classnames('Grocery', { starred, purchased })}>
        <h3>{name}</h3>
        { quantity && <p className="Grocery-quantity">Quantity: {quantity}</p> }
        { notes && <p className="Grocery-notes">Notes:{notes}</p> }
        { purchased && <button
        className="Grocery-purchase">Unpurchase</button>}
        { onPurchase && <button
        className="Grocery-purchase">Purchase</button>}
      </article>
    );
  };

  export default Grocery;
