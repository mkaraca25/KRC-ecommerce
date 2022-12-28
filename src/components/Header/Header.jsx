import React from 'react'
import './header.css'
import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'
import { Container,Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import {motion} from 'framer-motion'
const nav__links=[
  {
    path:'home',
    display:'Home',
  },
  {
    path:'shop',
    display:'Shop',
  },
  {
    path:'cart',
    display:'Cart',
  },
]
const Header = () => {
  return <><header className="header"></header>
  <Container>
    <Row>
      <div className="nav__wrapper">
        <div className="logo">
          <img src={logo} alt="logo" />
          <div>
            <h1>Multimart</h1>
            <p>Since 1994</p>
          </div>
        </div>
        <div className="navigation">
          <ul className="menu">
            {nav__links.map((item,index)=>(
              <li className="nav__item" key={index}>
                <NavLink to={item.path} className={(navClass)=>
                navClass.isActive? "nav__active":""}>
                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav__icons">

          <span className='fav__icon'><i className="ri-heart-line"></i>
          <span className='badge'>1</span></span>
          <span className='cart_icon'><i className="ri-shopping-bag-line"></i>
          <span className='badge'>1</span></span>
          <span><motion.img whileTap={{scale:1.2}} src={userIcon} alt="userIcon" /></span>
        </div>
        <div className="mobile__menu">
          <span><i className="ri-menu-line"></i></span>
        </div>
      </div>
    </Row>
  </Container>
  </>
}

export default Header