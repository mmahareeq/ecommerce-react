import React ,{useContext}from 'react'
import {CartContext} from '../utils/CartContext.js';
import styled from 'styled-components';
import {formatPrice} from '../utils/helper'
export default function TotalCart() {
    const CartTotal = useContext(CartContext)
    return (
        <Wrapper>
           <div className="totalcart">
               <div className="totaldiv">
                    <h5>Subtotal: <span>{formatPrice(CartTotal.total_price)}</span></h5>
                    <h5>Shipping fee : <span>{formatPrice(CartTotal.shipping_fee)}</span></h5>
                    <hr/>
                    <h4>Order Total :  <span>{formatPrice(CartTotal.total_price+CartTotal.shipping_fee) }</span></h4>
              </div> 
           </div>
            
        </Wrapper>
    )
}
const Wrapper = styled.div`
   
   .totalcart
   {
       display:flex;
       justify-content:flex-end;       
   }
   .totaldiv
   {
    border:1px solid #9eb2c7;
    width:30%; 
    padding:1.3rem;
    margin:-7px; 
   
   }
   h4
   {
       font-weight:bold;
       font-size:1.5rem
   }
   h5
   {
       font-size:1rem;
   }
   span
   {
       margin-left:1rem;
   }
   width:100%;
   margin:3rem 2rem 3rem 0rem;


   `;
