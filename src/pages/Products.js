import React,{useContext,useState} from 'react'
import {FilterContext} from '../utils/filterContext';
import {ProductContext} from '../utils/ProductContext.js';
import {CartContext} from '../utils/CartContext.js';
import Filter from '../components/Filter';
import {FiGrid ,FiList} from "react-icons/fi";
import { Link } from 'react-router-dom';
export default function Products() {
    
    const pro = useContext(FilterContext);
    const [amount,setMount] = useState(1);
    const CartProduct = useContext(CartContext)
    const {products_loading} = useContext(ProductContext);
    if(products_loading == true)
    {
        return <h1>Loading ...</h1>
    }
    return (
        <div>
            <h1>Home/Products</h1>
           {  <section className="section-bd">
                <Filter/>
                <div className="product-part"> 
                <div className="display-pt">
                  <div className="icon-view"> 
                    <button name="listgrid" onClick={pro.listGrid} type="button"><FiGrid ></FiGrid></button>
                    <button name="listview" onClick={pro.listView} type="button"><FiList /></button>
                   </div>
                   <div>
                    <p className="p-product">{pro.filtered_products.length} Products Found</p>
                   </div>
                   <div className="hr-hr"></div>
                   <div className="sort-pt">
                    <span>Sort By </span>
                    <select name="sort" id="sort" value={pro.sort} onChange={pro.updateSort}>
                        <option value="price-lowest">Price(Lowest)</option>
                        <option value="price-greatest">Price(Greatest)</option>
                        <option value="name-a">Name (A-Z)</option>
                        <option value="name-z">Name (Z-A)</option>
                    </select>
                  </div>
                  </div>
               
                <div className="featur-product1">

                    {pro.filtered_products.map((i) =>{
                        var Img = i.image;
                        var Name = i.name;
                        var Price = i.price;
                        var Id = i.id;
                        var product = i ;
                        var color = i.color;
                    return(
                        
                       
                            <div>
                                
                                    <img src={Img} alt="" width="300px" height="175px"/>
                                
                          
                                <div>
                                <button onClick={()=>CartProduct.addtocart(product,Id,color,amount)}>Add to Cart </button>
                                    <span className="namee">{Name}</span>
                                    <span style={{color:'#ab7a5f'}}>{Price}</span>
                                </div>
                            </div>
                        
                            )
                    })}
                </div> 
               </div> 
            </section>}           

        </div>
    )
}
