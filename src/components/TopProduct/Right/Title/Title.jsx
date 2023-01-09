import React from 'react';
import classes from '../Right.module.css';
import berry from '../../../../assets/berry.png'

const Title = () => {
  return (
    <React.Fragment>
      <div className={classes.title}>
        <div>
          <h4>BLUEBERRY</h4>
          <p>Dress Jumpsuit - Dress Jumpsuit in Origanic Cotton</p>
          <p>Exclusive</p>
        </div>

        <img src={berry} alt='' />
      </div>
    </React.Fragment>
  )
}

export default Title
