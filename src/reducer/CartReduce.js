import React from 'react'
import {ADD_TO_CART,REMOVE_CART_ITEM,TOGGLE_CART_ITEM_AMOUNT,CLEAR_CART,COUNT_CART_TOTALS
} from '../actions.js';
export default function CartReduce(state,action) {
    if(action.type == ADD_TO_CART)
     {
         const {product,id,color,amount} = action.payload;
         const tempItem = state.cart.find((i)=>i.id == id +color)
         if(tempItem)
         {
            const tempcart = state.cart.map((cartItem) =>
            {
                if(cartItem.id === id + color)
                {
                    let newAmount = cartItem.amount + amount ;
                    if(newAmount> cartItem.max)
                     { newAmount = cartItem.max}
                    
                     return {...cartItem, amount : newAmount}
                }
                else{
                    return {...cartItem}
                }

            })
           return {...state , cart:tempcart}
         }
         else{
             const newItem = {
                 id:id+color,
                 name :product.name,
                 color:product.colors[0],
                 amount ,
                 image :product.image,
                 price: product.price,
                 max:product.stock
             }
             return {...state , cart:[...state.cart,newItem]}
         }
     }

     if(action.type === REMOVE_CART_ITEM){
         const tempcart = state.cart.filter(item => item.id !== action.payload)
         return {...state,cart:tempcart}
     }
     if(action.type === TOGGLE_CART_ITEM_AMOUNT)
     {
         const {id , value } = action.payload ;
         const tempcart = state.cart.map( item => {
             if(item.id === id)
             {
                 if(value === 'inc')
                {
                    let newAmount = item.amount + 1;
                    if(newAmount> item.max)
                       newAmount= item.max;
                    return { ...item ,amount:newAmount}
                }
                else
                {
                    let newAmount = item.amount - 1;
                    if(newAmount<1)
                       newAmount= 1;
                    return { ...item ,amount:newAmount}
                }
               
             }
            return item
         }
         )
         return {...state,cart:tempcart}
     }
     if(action.type === CLEAR_CART)
     {
         return {...state,cart:[]}
     }
     if(action.type ===COUNT_CART_TOTALS)
     {   
         let {total_item,total_price} = state.cart.reduce((total,cartItem) =>
            {
                 const {amount,price} = cartItem
                 total.total_item += amount
                 total.total_price += (price * amount)
                 return total 
            },{total_item:0,total_price:0})

            return {...state,total_item,total_price}
     }
    
}
