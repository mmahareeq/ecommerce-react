import { ThemeProvider } from 'styled-components';
import {
    LOAD_PRODUCTS,
    SET_LISTVIEW,
    SET_GRIDVIEW,
    UPDATE_SORT,
    SORT_PRODUCTS,
    UPDATE_FILTERS,
    FILTER_PRODUCTS,
    CLEAR_FILTERS,
  } from '../actions'

  const filterReducer = (state,action) =>{
    if (action.type === LOAD_PRODUCTS) {
        let maxPrice = 0
        return {
          ...state,
          all_products: action.payload,
          filtered_products:action.payload,
          filter: {...state.filter,max_price: maxPrice, price: maxPrice },
        }
      }
      if(action.type == SET_LISTVIEW)
        {
          return{...state ,listgrid:false}
        }
        if(action.type == SET_GRIDVIEW)
        {
          return{...state ,listgrid:true}
        }
      if(action.type == UPDATE_SORT)
      {
        return {...state,sort:action.payload}
      }
      if(action.type == SORT_PRODUCTS)
      {
         let {sort,filtered_products}=state;
         let temProduct=[]
         if(sort == 'price-lowest')
         {
           temProduct= filtered_products.sort((a,b)=>
           {return a.price - b.price})
         }
         if(sort == 'price-greatest')
         {
           temProduct= filtered_products.sort((a,b)=>
           {return b.price - a.price})
         }
         if(sort == 'name-a')
         {
           temProduct= filtered_products.sort((a,b)=>
           {return a.name.localeCompare(b.name)})
         }
         if(sort == 'name-z')
         {
           temProduct= filtered_products.sort((a,b)=>
           {return b.name.localeCompare(a.name)})
         }
         return {...state ,filtered_products:temProduct}
      }
      if(action.type === UPDATE_FILTERS)
      {
        let {name,value} = action.payload;
        console.log(state.filter)
        return {...state , filter:{...state.filter,[name] :value}}
      } 
    if(action.type === FILTER_PRODUCTS)
    {
      let {all_products}  = state;
      let {text, category, company, colors, shipping } = state.filter;
      let temProduct = all_products

      if(category !== 'all')
       {
         temProduct= temProduct.filter(product =>
            product.category === category)
       }
       if(colors !== 'all')
       {
         temProduct.filter(product => {
          return  product.color.find(c=>c==colors)})
       }
       if(shipping)
       {
         temProduct.filter(product=>
          product.shipping == true)
       }
       if(company !== 'all')
       {
        temProduct= temProduct.filter(product=>product.company === company)

       }  console.log("hello")
          console.log(temProduct)
          return {...state ,filtered_products:temProduct}
    } 
    if(action.type === CLEAR_FILTERS)
    {
      return {
        ...state,
        ...state.filter,
        filter:{
          text:'',
          category:'all',
          company:"all",
          colors:'all',
          min_price:0,
          max_price:0,
          shipping:true,
          },
      }
    }
    
  }
/**= action.payload.map((p) => p.price)
        maxPrice = Math.max(...maxPrice) */
  export default filterReducer;