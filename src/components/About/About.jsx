import React from 'react';
import classes from './About.module.css';
import berry from '../../assets/berry.png'

const About = () => {
  return (
    <div className='container'>
      <div className={classes.about}>
        <div className={classes.description}> 
          <h4>Bluberry</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.rat lacus. Nulla lobortis condimentum magna sed fermentum. Donec eros ante, dictum ac augue ut, aliquam gravida augue. Duis consectetur leo sed tincidunt molestie.
          </p>
        </div>

        <div className={classes.image}>
          <img  src={berry} alt='' />
          <button>Follow+</button>
        </div>
      </div>
    </div>
  )
}

export default About
