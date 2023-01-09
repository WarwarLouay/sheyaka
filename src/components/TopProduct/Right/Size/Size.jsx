import React from 'react';
import classes from '../Right.module.css';

const Size = () => {

  const sizes = [
    {
      id: 1,
      size: 'S'
    },
    {
      id: 2,
      size: 'M'
    },
    {
      id: 3,
      size: 'L'
    },
    {
      id: 4,
      size: 'XL'
    }
  ];

  const [selectedSize, setSelectedSize] = React.useState(2);

  return (
    <React.Fragment>
      <div className={classes.size}>
        <div className={classes.header}>
          <b>Size: </b>
          <div>
            <p>Find Your Fit<span> ? | </span> Show Size Chart</p>
          </div>
        </div>
        <div className={classes.sizes}>
          {sizes.map((size) => {
            return (
              <p className={selectedSize === size.id ? `${classes.selected}` : ''} onClick={() => {setSelectedSize(size.id); console.log(selectedSize)}}>{size.size}</p>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Size
