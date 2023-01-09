import React from 'react';
import Color from './Color/Color';
import Price from './Price/Price';
import AddToCart from './AddToCart/AddToCart';
import classes from './Right.module.css';
import Size from './Size/Size';
import Title from './Title/Title';
import Ads from './Ads/Ads';

const Right = () => {
  return (
    <div className={classes.right}>
      <Title />
      <hr />
      <Price />
      <hr />
      <Color />
      <hr />
      <Size />
      <hr />
      <AddToCart />
      <hr />
      <Ads />
      <hr />
    </div>
  )
}

export default Right
