import React,{useState,useReducer,useEffect} from 'react'
import {ADD_TO_CART,REMOVE_CART_ITEM,TOGGLE_CART_ITEM_AMOUNT,CLEAR_CART,COUNT_CART_TOTALS
} from '../actions.js';
import reducer from '../reducer/CartReduce.js'

const getLocalStroage = () =>
{
    const cart = localStorage.getItem('cart');
    if(cart)
    {
        return JSON.parse(localStorage.getItem('cart'));
    }
    else return [] ;
}

const initalState = {
    cart:getLocalStroage(),
    total_item:0,
    total_amount:0,
    shipping_fee : 534

}

export const CartContext = React.createContext();
export function CartProvider(props) {
    let [state,dispatch] = useReducer(reducer,initalState);
    const addd = ()=>{
        return console.log("jacob")
    }
    const addtocart = (product,id,color,amount)=>{
        dispatch({type:ADD_TO_CART,payload:{product,id,color,amount}})
    }
    const removeitem =(id) =>
    {
        dispatch({type:REMOVE_CART_ITEM,payload:id})
    }
    const toggleamount =(id,value)=>
    {
        dispatch({type:TOGGLE_CART_ITEM_AMOUNT,payload:{id,value}})
    }
    const clearcart= ()=>
    {
       dispatch({type:CLEAR_CART})
    }

    useEffect(() => {
       localStorage.setItem('cart',JSON.stringify(state.cart))
       dispatch({type:COUNT_CART_TOTALS})
    }, [state.cart])
    return (
        <CartContext.Provider value={{...state,addtocart,clearcart,toggleamount,removeitem}}>
            {props.children}
        </CartContext.Provider>
        
    )
}
