import React from 'react';
import classes from './Left.module.css';
import i11 from '../../../assets/i11.png';
import i12 from '../../../assets/i12.png';
import i13 from '../../../assets/i13.png';
import i14 from '../../../assets/i14.png';
import i15 from '../../../assets/i15.png';

const Left = () => {

  const tabs = [
    {
      id: 1,
      title: 'Description'
    },
    {
      id: 2,
      title: 'Highlights'
    },
    {
      id: 3,
      title: 'Material & Care'
    },
    {
      id: 4,
      title: 'About Vendor'
    }
  ];

  const [selectedTab, setSelectedTab] = React.useState(1);

  return (
    <div className={classes.left}>
        <div className={classes.parentImage}>
          <img  src={i11} alt=''/>
        </div>

        <div className={classes.childImage}>
          <img  src={i12} alt=''/>
          <img  src={i13} alt=''/>
          <img  src={i14} alt=''/>
          <img  src={i15} alt=''/>
        </div>

        <div className={classes.tab}>
          {tabs.map((tab) => {
            return (
              <p className={selectedTab === tab.id ? `${classes.selected}` : ''} onClick={() => setSelectedTab(tab.id)}>{tab.title}</p>
            )
          })}
        </div>
      </div>
  )
}

export default Left
