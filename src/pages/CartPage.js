import React ,{useContext}from 'react'
import CartContent from '../components/CartContent';
import {CartContext} from '../utils/CartContext.js';
export default function CartPage() {
    const CartProduct = useContext(CartContext)
    {console.log(CartProduct)}
    
    return (
        <div className="page section-body" style={{justifyContent:'center'}}>
            {console.log(CartProduct.cart)}
            <CartContent></CartContent>
           
        </div>
    )
}
