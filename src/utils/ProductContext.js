import React ,{useEffect,useReducer ,useState} from 'react'
import {products_url as url} from './contents.js'
import reducer from '../reducer/productReducer'
import axios from 'axios'
import {GET_PRODUCT_ERROR
    ,GET_PRODUCT_BIGIN,
    GET_SINGLE_PRODUCT_LOAD,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR,
    LOAD_PRODUCTS,ADD_TO_CART} from '../actions'

const initialState = {
    isSidebarOpen: false,
    products_loading: false,
    products_error: false,
    product: [],
    featured_products: [],
    single_product_loading: false,
    single_product_error: false,
    single_product: {},
  }
export const ProductContext = React.createContext();

export function ProductProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const singleFetch = async (url) =>
    {    dispatch({type:GET_SINGLE_PRODUCT_LOAD})
        try{
        const response = await axios.get(url);
        const singlePeroduct = response.data;
        const nerSingle = singlePeroduct;
        dispatch({type:GET_SINGLE_PRODUCT_SUCCESS,payload:nerSingle})

        }catch(error){
            dispatch({type:GET_SINGLE_PRODUCT_ERROR})
             
        }
        
        

    }    
    
    const fetchProduct =
       async (url) => {
            dispatch({type:GET_PRODUCT_BIGIN})
            try{
           
            const response = await fetch(`${url}`)
            const data= await response.json()
            dispatch({type:GET_PRODUCT_SUCCESS,payload:data})
            }
            catch(erroe)
            { 
                dispatch({type:GET_PRODUCT_ERROR})
            }
        } 
   
        
    useEffect(() => {
        fetchProduct(url)
      },[])
      
    return (
        <ProductContext.Provider value={{...state,fetchProduct,singleFetch}}>
            {props.children}
        </ProductContext.Provider>
    )
}



