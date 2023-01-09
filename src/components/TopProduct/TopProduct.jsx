import React from 'react';
import Left from './Left/Left';
import Right from './Right/Right';
import classes from './TopProduct.module.css';

const TopProduct = () => {
  return (
    <div className={`${classes.top} container`}>
      <Left />
      <Right />
    </div>
  )
}

export default TopProduct
