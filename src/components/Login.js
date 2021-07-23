import React,{useContext} from 'react'
import { FaUserPlus ,FaCartPlus } from "react-icons/fa";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {CartContext} from '../utils/CartContext.js';

export default function Login() {

    const cartProduct = useContext(CartContext);
    return (
        <div>
            <Link to='/Cart'>
                <Button >
                    <span style={{margin:"8px"}}>Cart</span>
                    <FaCartPlus/>
                    <Span className="count">{cartProduct.cart.length}</Span>
                </Button>
                
            </Link>
            <Button>
                <span style={{margin:"8px"}}>Login</span>
                <FaUserPlus/>
            </Button>
            
        </div>
    )
}

const Button = styled.button`
    margin:10px;
    color: #324d67;
    font-size: 1.3rem;
    text-transform: capitalize;
    letter-spacing:0.1rem;
    border:none;
    background-color:white;
    margin-top:22px;
    font-weight:bold;
    cursor:pointer;
    
`;
const Span = styled.span`
 
  position: absolute;
  top:10px;
  background:#ab7a5f;
  color:white;
  border-radius:50%;
  font-size:0.8rem;
  padding:3px;
  width:12px;
  height:16px;
  

  
`;

//local storage : 
// 1. in beginng  read of state (begining of app) from local storage 
// 2. to make async with the change of state
// decleration function : 
 // const state = localStorage.getItem('cart')
 // if(state !== null)
 // return JSON.parse(state)
 //localStorage.setItem('cart',JSON.stringify(state))


 //stroe.subscribe(function name)