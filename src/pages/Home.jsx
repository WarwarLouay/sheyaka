import React from 'react'
import About from '../components/About/About'
import Block from '../components/Block/Block'
import Look from '../components/Look/Look'
import NavBar from '../components/NavBar/NavBar'
import Product from '../components/Product/Product'
import TopProduct from '../components/TopProduct/TopProduct'

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className='container'>
        <TopProduct />
        <About />
        <hr />
        <Block />
        <hr />
        <Product />
        <hr />
        <Look />
        <hr />
      </div>
    </React.Fragment>
  )
}

export default Home
