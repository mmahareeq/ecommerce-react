import React,{useContext} from 'react'
import TotalCart from './TotalCart';
import ItemCart from './ItemCart';
import {CartContext} from '../utils/CartContext.js';
import ColCart from './ColCart';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
export default function CartContent() {
    const CartProduct = useContext(CartContext)
    console.log(CartProduct.cart)
    if(CartProduct.cart.length == 0 )
    {
        return (
        <Rapper>
            <div className="empty">
                <h4>Your Cart is empty</h4>
                <Link to="/products"> <button className="fillit">FILL IT</button></Link>
            </div>
        </Rapper>)
    }
    
    return (
        <Wrapper>
            <ColCart></ColCart>
            {CartProduct.cart.map((item) =>{ 
            return <ItemCart  key={item.id} {...item}/>
            }
            )}
            
            <hr/>
            <div className="btn-cart">
                <Link to='products'><button className="shopping">Continue Shopping</button></Link>
                <button className="clearcart" onClick={CartProduct.clearcart} >Clear Shopping Cart</button>

            </div>
            <TotalCart/>
        </Wrapper>
    )
}
const Wrapper = styled.div`

    .shopping
    {
        background:#ab7a5f;
        color:white;
        border:none;
        font-size:1rem;
        font-weight:400;
        height:2rem;
        border-radius:0.3rem;
        cursor:pointer;
    }
    .clearcart
    {
        background:black;
        color:white;
        border:none;
        font-size:1rem;
        font-weight:400;
        height:2rem;
        border-radius:0.3rem;
        cursor:pointer;
    }
    .btn-cart
    {
        display:flex;
        justify-content:space-between;
        margin-top:1rem;

    }
    margin: 0 auto;
    max-width:1170px;
    min-height:60%;
    height: auto;
`;

const Rapper = styled.div`
.empty
{
    text-align:center;
    
   
}


h4
{
    font-size:2rem;
    font-weight:bold;
}
.fillit
{
        background:#ab7a5f;
        color:white;
        border:none;
        font-size:1rem;
        font-weight:400;
        height:2rem;
        border-radius:0.3rem;
}
`;