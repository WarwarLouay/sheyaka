import React from 'react';
import classes from '../Right.module.css';
import { AiFillStar } from 'react-icons/ai';

const Price = () => {
  return (
    <React.Fragment>
      <div className={classes.price}>
        <div className={classes.left}>
          <header>
            <p><del>250 USD</del></p>
            <h5>190 USD</h5>
            <p>VAT Included</p>
          </header>

          <p style={{color: 'red'}}>23% off</p>
          <p style={{color: '#015f65'}}><b>You Saved:</b> 60 USD</p>
        </div>
        <div className={classes.review}>
          <AiFillStar color='goldenrod' />
          <AiFillStar color='goldenrod' />
          <AiFillStar color='goldenrod' />
          <AiFillStar color='goldenrod' />
          <AiFillStar color='gray' />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Price
