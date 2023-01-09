import React from 'react';
import classes from '../Right.module.css';

const Ads = () => {
  return (
    <React.Fragment>
      <div className={classes.ads}>
        <div className={classes.start}>
          <p>tabby</p>
        </div>

        <div className={classes.middle}>
          <h6>BUY NOW PAY LATER WITH TABBY!</h6>
        </div>

        <div className={classes.end}>
          <p>SHOP NOW</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Ads
