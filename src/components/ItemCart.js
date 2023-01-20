import React ,{useContext}from 'react'
import { FaTrash } from 'react-icons/fa'
import AmountItem from './AmountItem'
import TotalCart from './TotalCart';
import {CartContext} from '../utils/CartContext.js';
import  styled from 'styled-components';
import {formatPrice} from '../utils/helper'

 const ItemCart =({id,  name, image,color, price,amount})=> {
    const cartProduct = useContext(CartContext);

    
    const increace = () =>{
        cartProduct.toggleamount(id,'inc')
    }
    const decrease =() => {
        cartProduct.toggleamount(id,'dec')
    }
    return (
      <Wrapper>
            
            <div className='tittle'>
                
                <img src={image} alt="image"/>
                                
                <div>
                    <h5 className="nameproduct">{name}</h5>
                    <p>Color:  <span style={{background:color, width:'20px', height: '20px', display: 'inline-block'}}>&nbsp; </span></p>  
                </div>
            </div>

            <h5 className="price">{formatPrice(price)}</h5>
            <AmountItem amount={amount} increace={increace} decrease={decrease}/>
            <h5 className="sub-price">{formatPrice(price * amount)}</h5>
            <button onClick={()=>cartProduct.removeitem(id)} className="trash">
                <FaTrash />
            </button>
            
            
        </Wrapper>
    )
}
const Wrapper = styled.div`


  display: grid;
  grid-template-columns:1fr 1fr 1fr 1fr auto;;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 5rem;
  align-items: center;
  font-weight:400;
img
{
    width:120px;
    height:120px;
    margin-right:1rem;
}
  .tittle
  {
      display:flex;
      flex-direction: row;
      margin-top:3rem
  }
  span
  {
      width:2rem;
      height:2rem;
  }
  .price
  {
    color: #ab7a5f;
    font-size:1rem;
    font-weight:400;

  }
  .sub-price
  {
      color:#9eb2c7;
      font-size:1rem;
      font-weight:400;

  }
  .nameproduct
  {
    text-transform: capitalize;
    line-height: 1.25;
    font-size:1rem;
  }
  p
  {
      color:#9eb2c7;
      font-size:0.88rem;
  }
  .trash
  {
      border:none;
      background-color:#bb2525;
      color:white;
      height:1.5rem;

      
  }
`;
export default ItemCart;