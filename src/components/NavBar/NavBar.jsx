import React from 'react';
import classes from './NavBar.module.css';
import logo from '../../assets/logo.png';
import { VscSearch } from 'react-icons/vsc';
import { FiHeart } from 'react-icons/fi';
import { FaRegUser, FaBars } from 'react-icons/fa';
import { BiLock } from 'react-icons/bi';
import { MdLanguage, MdClose } from 'react-icons/md';
import { AiOutlineDollarCircle } from 'react-icons/ai';

const NavBar = () => {

  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <div className={classes.nav}>
        <div className={classes.header}>
          Just To Let You Know, We're Running As Usual & Working Hard To Keep You Safe With Contact-Free Delevery
        </div>

        <div className={classes.body}>
          <div className={classes.logo}>
            <img src={logo} alt='' />
          </div>

          <div className={classes.category}>
            <p>Women</p>
            <p>Men</p>
            <p>Children</p>
            <p>Gift Registries</p>
          </div>

          <div className={classes.action}>
            <div className={classes.search}>
              <input type='text' />
              <VscSearch className={classes.searchIcon} />
            </div>
            <FiHeart color='white' size={20} className={classes.icon} />
            <FaRegUser color='white' size={20} className={classes.icon} />
            <BiLock color='white' size={20} className={classes.icon} />
          </div>
        </div>

        <div className={`${classes.footer} container`}>
          <div className={classes.subCategory}>
            <p>New In</p>
            <p>Shop By</p>
            <p>Designers</p>
            <p>Clothing</p>
            <p>Shoes</p>
            <p>Bages</p>
            <p>Accessories</p>
            <p>Sale</p>
          </div>

          <div className={classes.footerIcon}>
            <AiOutlineDollarCircle color='#015f65' size={20} className={classes.icon} />
            <MdLanguage color='#015f65' size={20} className={classes.icon} />
          </div>
        </div>
      </div>

      <div className={classes.mobileNav}>
        <div className={classes.header}>
          Just To Let You Know, We're Running As Usual & Working Hard To Keep You Safe With Contact-Free Delevery
        </div>

        <div className={classes.body}>
          <FaBars color='goldenrod' size={20} style={{ cursor: 'pointer' }} onClick={() => setOpen(true)} />
          <img src={logo} alt='' />

          {open && <div className={classes.openedNav}>
            <div className={classes.openNavHeader}>
              <MdClose color='goldenrod' size={25} style={{ cursor: 'pointer' }} onClick={() => setOpen(false)} />
              <div className={classes.action}>
                <FiHeart color='white' size={20} className={classes.icon} />
                <FaRegUser color='white' size={20} className={classes.icon} />
                <BiLock color='white' size={20} className={classes.icon} />
              </div>
            </div>

            <div className={classes.openNavBody}>
              <p>Women</p>
              <p>Men</p>
              <p>Children</p>
              <p>Gift Registries</p>
            </div>

            <div className={`${classes.openNavFooter} container`}>
                <p>New In</p>
                <p>Shop By</p>
                <p>Designers</p>
                <p>Clothing</p>
                <p>Shoes</p>
                <p>Bages</p>
                <p>Accessories</p>
                <p>Sale</p>
            </div>

          </div>}
        </div>
      </div>
    </React.Fragment>
  )
}

export default NavBar
