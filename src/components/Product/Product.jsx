import React from 'react';
import classes from './Product.module.css';
import { Col, Row } from 'react-bootstrap';
import { FiHeart } from 'react-icons/fi';
import { BiLock } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { GoCircleSlash } from 'react-icons/go';

import i2 from '../../assets/i2.png';
import i3 from '../../assets/i3.png';
import i4 from '../../assets/i4.png';
import i5 from '../../assets/i5.png';

const Product = () => {

  const products = [
    {
      image: i2,
      title: 'White Blazer',
      description: 'Long Blazer with buttons',
      price: 345,
      colors: [
        'gray',
        'black',
        'white'
      ]
    },
    {
      image: i3,
      title: 'Gucci Long Coat',
      description: 'Long with no buttons',
      price: 135,
      colors: [
        'red',
        'blue'
      ]
    },
    {
      image: i4,
      title: 'Levi\'s Sport Shoes',
      description: 'Multi colored with lace',
      oldPrice: 245,
      price: 190
    },
    {
      image: i5,
      title: 'Gucci Coat',
      description: 'Long Beige, 3/4 sleeve',
      price: 600,
      colors: [
        'teal',
        'pink'
      ]
    },
  ];

  return (
    <div>
      <h4 className={classes.title}>YOU MAY ALSO LIKE</h4>
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

export default Product
