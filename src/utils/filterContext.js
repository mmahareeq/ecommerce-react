import React ,{ useState,useContext,useReducer,useEffect} from 'react'
import {ProductContext}  from '../utils/ProductContext.js'
import  reducer from '../reducer/filterReducer'
import { LOAD_PRODUCTS, UPDATE_FILTERS,FILTER_PRODUCTS,UPDATE_SORT,SORT_PRODUCTS,SET_GRIDVIEW,CLEAR_FILTERS ,SET_LISTVIEW} from '../actions.js';


const initalState = {
  filtered_products:[],
 all_products:[],
 sort:'price-lowest',
 listgrid:true,
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


export const FilterContext=React.createContext();

export function FilterProvider(props)

{  const {product} = useContext(ProductContext);
  
  
   let [state,dispatch] = useReducer(reducer,initalState)
   useEffect(() => {
     dispatch({type:LOAD_PRODUCTS,payload:product})
     
   }, [product])

  
   useEffect(() => {
      
      dispatch({type:FILTER_PRODUCTS})
      dispatch({type:SORT_PRODUCTS})
   }, [state.sort,state.filter])
   
   const updateSort = (e) =>
   {
    const value = e.target.value;
     dispatch({type:UPDATE_SORT,payload:value})

   }
   const listGrid = () => {
     dispatch({type:SET_GRIDVIEW})
   }
   const listView =() =>{
     dispatch({type:SET_LISTVIEW})
   }
   const updatesFilter = (e) =>
   {
     let name = e.target.name;
     let value = e.target.value;
     if(name === 'category'){
        value = e.target.textContent}
     if(name === 'color')
     {
       value = e.target.dataset.color;
     }
     if( name === 'shipping'){
       value = e.target.checked

     }
     dispatch({type :UPDATE_FILTERS , payload:{name,value}})
   }
   const ClearFilter =()=>{
     dispatch({type:CLEAR_FILTERS})
   }
   
    
    
    

      return (
        <FilterContext.Provider
          value={{
            ...state,
            updatesFilter,
            updateSort,
            listGrid,
            listView,
            ClearFilter
        
                    }}
        >
         {props.children}
        </FilterContext.Provider>
      )
    }


/*LOAD_PRODUCTS */
