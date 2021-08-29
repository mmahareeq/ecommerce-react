import React ,{useContext,useEffect} from 'react'
import {ProductContext}  from '../utils/ProductContext.js'
import { Link,useParams,useHistory } from 'react-router-dom'
import { single_product_url as url } from '../utils/contents.js';
import AddtoCart from './AddtoCart.js';
export default function DetailsProduct() {

    const { products_loading,single_product,singleFetch,products_error} = useContext(ProductContext);
    const {Id} = useParams();
    const history = useHistory();
   
    useEffect(() => {
       singleFetch(`${url}${Id}`)
    }, [Id])

    /*useEffect(() => {
        if (products_error) {
          setTimeout(() => {
            history.push('/')
          }, 3000)
        }
        // eslint-disable-next-line
      }, [products_error])*/
   
    if( products_loading == true)
     {
         return <h1>Loading ...</h1>
     }
     if(products_error == true)
     {
       return <h1>ERROR ........</h1>
     }
     const {
        name,
        price,
        description,
        stock,
        stars,
        reviews,
        id: sku,
        company,
        colors,
        images,
      } = single_product
    return (
            <div>
                 
                 <div>
                    <button>Back to product</button> 
                    <img src={images[0].url}  width='100px' height='100px' /> 
                </div> 
                
                <div>
                    <p>name : {name}</p>
                    <p>star</p>
                    <p>price : {price}</p>
                    <p>descrption :{description}</p>
                    <p>Shipping</p>
                    
                </div>
              {/* 
                <div>
            
                    
                    <button>Back to product</button>
                    <img src={single_product.images[0].url} />
                    
                </div>
                 
                <div>
                    <p>name : {single_product.name}</p>
                    <p>star</p>
                    <p>price : {single_product.price}</p>
                    <p>descrption :{single_product.description}</p>
                    <p>Shipping</p>
                    <AddtoCart PProduct={single_product}/>
                </div>
                 */ } 
            </div>
        )
    
}
