import React from 'react';
import classes from '../Right.module.css';

const Color = () => {

  const colors = [
    {
      id: 1,
      color: 'black'
    },
    {
      id: 2,
      color: 'darkBlue'
    },
    {
      id: 3,
      color: 'grey'
    },
    {
      id: 4,
      color: 'wheate'
    }
  ];

  const [selectedColor, setSelectedColor] = React.useState(1);

  return (
    <div className={classes.color}>
      <b>Color: </b>
      {colors.map((color) => {
        return (
          <div onClick={() => setSelectedColor(color.id)} className={`${classes.colorBall} ${selectedColor === color.id ? classes.selected : ''}`} style={{backgroundColor: color.color}}></div>
        )
      })}
    </div>
  )
}

export default Color
