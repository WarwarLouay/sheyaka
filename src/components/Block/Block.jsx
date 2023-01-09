import React from 'react';
import classes from './Block.module.css';
import { AiFillStar } from 'react-icons/ai';

const Block = () => {

  const [ratingComment, setRatingComment] = React.useState();
  const [ratingCommentLength, setRatingCommentLength] = React.useState(0);

  return (
    <React.Fragment>
      <div className={classes.block}>
        <div className={classes.leftBlock}>
          <div className={classes.content}>
            <div className={classes.left}>
              <div className={classes.rating}>
                <h3>4.30</h3>
                <p>1 Rating</p>
              </div>

              <div className={classes.list}>
                <div className={classes.item}>
                  5
                  <AiFillStar color='goldenrod' />
                  <div className={classes.line}></div>
                  100%
                </div>

                <div className={classes.item}>
                  4
                  <AiFillStar color='goldenrod' />
                  <div className={classes.line}></div>
                  0%
                </div>

                <div className={classes.item}>
                  3
                  <AiFillStar color='goldenrod' />
                  <div className={classes.line}></div>
                  0%
                </div>

                <div className={classes.item}>
                  2
                  <AiFillStar color='goldenrod' />
                  <div className={classes.line}></div>
                  0%
                </div>

                <div className={classes.item}>
                  1
                  <AiFillStar color='goldenrod' />
                  <div className={classes.line}></div>
                  0%
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.rightBlock}>
          <div className={classes.content}>
            <div className={classes.header}>
              <h6>Tell your opinion by assigning a rating</h6>
              <p style={{ color: ratingCommentLength <= 150 ? 'black' : 'red' }}>{ratingCommentLength}/150 characters</p>
            </div>

            <div className={classes.body}>
              <textarea placeholder='Type Here'
                value={ratingComment}
                onChange={(e) => {
                  setRatingComment(e.target.value);
                  setRatingCommentLength(e.target.textLength)
                }}>
              </textarea>
            </div>

            <br />

            <div className={classes.footer}>
              <div>
                <div className={classes.stars}>
                  <AiFillStar color='goldenrod' size={25} />
                  <AiFillStar color='goldenrod' size={25} />
                  <AiFillStar color='goldenrod' size={25} />
                  <AiFillStar color='gray' size={25} />
                  <AiFillStar color='gray' size={25} />
                  <p>3/5</p>
                </div>
              </div>

              <button>Rate The Product</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Block
