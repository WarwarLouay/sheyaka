/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classes from '../Right.module.css';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

const AddToCart = () => {

  const [favorite, setFavorite] = React.useState(false);
  var [qty, setQty] = React.useState(1);

  return (
    <React.Fragment>
      <div className={classes.addToCart}>
        <div className={classes.header}>
          <b>Discount</b>
          <div>
            <input type='radio' />
            Apply 8 Dollars Discount
          </div>
        </div>

        <div className={classes.body}>
          <div className={classes.qty}>
            <b>Quantity: </b>
            <p>{qty}</p>
            <div className={classes.changeQty}>
              <p onClick={() => setQty(qty += 1)}>+</p>
              <p onClick={() => { if (qty > 1) { setQty(qty -= 1) } }}>-</p>
            </div>
          </div>

          <div className={classes.button}>
            <button>ADD TO CART</button>
            <div onClick={() => setFavorite(!favorite)}>
              {favorite ? <FaHeart size={25} color='goldenrod' style={{ cursor: 'pointer' }} /> : <FiHeart size={25} color='goldenrod' style={{ cursor: 'pointer' }} />}
            </div>
          </div>
        </div>

        <div className={classes.footer}>
          <a>Order Now to get it by <b>Thu, Feb 12</b></a>
          <a href='#'>Change Area</a>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AddToCart
