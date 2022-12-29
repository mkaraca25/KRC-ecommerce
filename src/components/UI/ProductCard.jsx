import React from 'react'
import { Col } from 'reactstrap'
import '../../styles/product-card.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'
import { toast } from 'react-toastify';
const ProductCard = ({item}) => {
  const dispatch=useDispatch();
  const addToCart =()=>{
    dispatch(cartActions.addItem({
      id: item.id,
      productName: item.productName,
      price: item.price,
      image: item.imgUrl,
    }));
    toast.success(item.productName+' Product added successfully');
  }
  return (
    <Col lg='3' md='4'>
        <div className='product__item'>
            <motion.img whileTap={{scale:1.1}} src={item.imgUrl} alt='Product'/>
        </div>
        <div className='p-2 product__info'>
        <h3 className='product__name'><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
        <span>{item.category}</span>
        </div >
        <div className='product__card-bottom d-flex align-items-center justify-content-between p-2'>
            <span className='price'>${item.price}</span>
            <motion.span whileTap={{scale:1.2}} onClick={addToCart}>
                <i className='ri-add-line'></i>
            </motion.span>
        </div>

    </Col>
  )
}

export default ProductCard