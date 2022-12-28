import React,{useEffect,useState} from 'react'
import Helmet from '../components/Helmet/Helmet'

import {Container,Row,Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import '../styles/home.css'
import { Link} from 'react-router-dom'
import { motion } from 'framer-motion'
import Services from '../services/Services'
import ProductsList from '../components/UI/ProductsList'
import products from '../assets/data/products'
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../components/UI/Clock'
const Home = () => {
  const year =new Date().getFullYear()

  const [trendingProducts,setTrendingProducts]= useState([]);
  const [bestSalesProducts,setBestSalesProducts]= useState([]);

  useEffect (()=>
  {
    const filterdTrendingProducts=products.filter((item)=>item.category==='chair');
    const filterdBestSalesProducts=products.filter((item)=>item.category==='sofa');
    setTrendingProducts(filterdTrendingProducts);
    setBestSalesProducts(filterdBestSalesProducts);

  },[])
  return  <><Helmet title={'Home'}> </Helmet>
     <section className='hero__section'>
       <Container>
         <Row>
           <Col lg='6' md='6'>
             <div className="hero__content">
               <p className='hero__subtitle'>Trending product in {year}</p>
               <h2>Make Your Interior More Minimalistic & Modern</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Error eum et praesentium voluptatum deserunt sit iure quod natus illum quo.</p>
                 <motion.button whileTap={{scale:1.2}} className="buy__btn">
                   <Link to='/shop'>SHOP NOW</Link>
                 </motion.button>
             </div>
           </Col>
           <Col lg='6' md='6'>
             <div className="hero__img">
               <img src={heroImg} alt="heroImg" />
             </div>
           </Col>
         </Row>
       </Container>
     </section>
     <Services/>
     <section>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section__title'>Trending Products</h2>
          </Col>
          <ProductsList data={trendingProducts}/>
        </Row>
      </Container>
     </section>
     <section>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section__title'>Best Sales</h2>
          </Col>
          <ProductsList data={bestSalesProducts}/>
        </Row>
      </Container>
     </section>
     <section className="timer__count">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='clock__top-content'><h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
            <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3></div><Clock/>
            <motion.button whileTap={{scale:1.2}} className='buy__btn,  store__btn'><Link to='/shop'> Visit Store</Link></motion.button></Col>
          <Col lg='6' md='6' className='text-end'>
            <img src={counterImg} alt="" />
          </Col>
        </Row>
      </Container>
     </section>
</>
  
}

export default Home