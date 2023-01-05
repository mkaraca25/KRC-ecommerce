import React from 'react'
import '../styles/cart.css'
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container,Row,Col } from 'reactstrap';
import { motion } from 'framer-motion';
import { cartActions } from '../redux/slices/cartSlice';
import { useSelector ,useDispatch} from 'react-redux';


const Cart = () => {
  const cartItems =useSelector(state=>state.cart.cartItems)
  return <Helmet title='Cart'>
    <CommonSection title='Shopping Cart'/>
    <section>
    <Container>
      <Row>
        <Col lg='9'>
          {
            cartItems.length===0 ? <h2 className='fs-4 text-center'>No item added to the cart</h2>:
            <table className='table bordered'>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
             {
              cartItems.map((item,index)=>(
                <Tr item={item} key={index}/>
              ))
             }
            </tbody>
          </table>
          }
          
        </Col>
        <Col lg='3'>
          
        </Col>
      </Row>
    </Container>
    </section>
  </Helmet>
};
const Tr=({item})=>{
  const dispatch=useDispatch()
  const deleteProduct=()=>{
    dispatch(cartActions.deleteItem(item.id))
  }
  return <tr>
  <td><img src={item.image} alt='Product'/></td>
  <td>{item.productName}</td>
  <td>${item.price}</td>
  <td>{item.quantity}px</td>
  <motion.td whileTap={{scale:1.1}} onClick={deleteProduct}><i  className="ri-delete-bin-line"></i></motion.td>
</tr>
}
export default Cart;