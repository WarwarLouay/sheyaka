import React from 'react';
import classes from './Look.module.css';
import { Col, Row } from 'react-bootstrap';
import { FiHeart } from 'react-icons/fi';
import { BiLock } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { GoCircleSlash } from 'react-icons/go';

import i7 from '../../assets/i7.png';
import i8 from '../../assets/i8.png';
import i9 from '../../assets/i9.png';
import i10 from '../../assets/i10.png';

const Look = () => {

  const products = [
    {
      image: i7,
      title: 'Green Shoe',
      description: 'No Lace, Small Heel',
      price: 150,
      colors: [
        'gray',
        'black',
        'white'
      ]
    },
    {
      image: i8,
      title: 'Coco Channel',
      description: '150 ml, mist',
      price: 180
    },
    {
      image: i9,
      title: 'Gucci Hand Bag',
      description: 'Magnetic Clothing',
      price: 400,
      colors: [
        'brown',
        'black'
      ]
    },
    {
      image: i10,
      title: 'Gucci Sunglasses',
      description: 'Black Shades',
      price: 185
    },
  ];

  return (
    <div>
      <h4 className={classes.title}>COMPLETE THE LOOK</h4>
      <Row>

        {products.map((product) => {
          return (
            <Col>
              <div className={classes.card}>
                <img src={product.image} alt='' />
                <h6>{product.title}</h6>
                <p>{product.description}</p>

                <div className={classes.price}>
                  <div>
                    {product.oldPrice && <del style={{ color: 'gray' }}>{product.oldPrice} USD</del>}
                    <small style={{ color: product.oldPrice ? 'red' : '#015f65' }}>{product.price} USD</small>
                  </div>
                  <div>
                    <FiHeart size={20} />
                    <BiLock size={20} />
                  </div>
                </div>

                <hr />

                <div className={classes.rating}>
                  <div>
                    <AiFillStar color='goldenrod' />
                    <AiFillStar color='goldenrod' />
                    <AiFillStar color='gray' />
                    <AiFillStar color='gray' />
                    <AiFillStar color='gray' />
                  </div>
                  2.00
                </div>

                <hr />

                {
                  product.colors ?
                    <div className={classes.cardColors}>
                      {product.colors.map((color) => {
                        return (
                          <div className={classes.colors} style={{ backgroundColor: color }}></div>
                        )
                      })}
                    </div>
                    : <GoCircleSlash size={15} />
                }
              </div>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default Look
