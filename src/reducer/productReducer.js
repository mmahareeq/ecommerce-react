import {GET_PRODUCT_ERROR
    ,GET_PRODUCT_BIGIN,
    GET_SINGLE_PRODUCT_LOAD,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR,
    LOAD_PRODUCTS,ADD_TO_CART} from '../actions'
/*
    isSidebarOpen: false,
    products_loading: false,
    products_error: false,
    products: [],
    featured_products: [],
    single_product_loading: false,
    single_product_error: false,
    single_product: {},
 */
 const productReducer = (state,action) =>
{
   if(action.type === GET_PRODUCT_ERROR ){
       return{
           ...state
           ,products_loading: false,
           products_error: true
       }

   }
   if(action.type === GET_PRODUCT_BIGIN){
    return{
        ...state
        ,products_loading: true,
        products_error:false
    }
   }
   if(action.type === GET_SINGLE_PRODUCT_LOAD){
    return{
        ...state
        ,products_loading: true,
        products_error:false
    }
   }
   if(action.type === GET_SINGLE_PRODUCT_SUCCESS){
    return{
        ...state
        ,products_loading:false,
        single_product :action.payload,

       
    }
   }
   if(action.type === GET_PRODUCT_SUCCESS){

    return{
        ...state
        ,products_loading:false,
        product:action.payload,

    }

   }
   if(action.type === GET_SINGLE_PRODUCT_ERROR ){
    return{
        ...state
        ,products_loading: false,
        products_error: true
    }
   }

}
export default productReducer;