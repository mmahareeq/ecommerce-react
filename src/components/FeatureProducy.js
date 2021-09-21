import React,{useContext} from 'react'
import {ProductContext}  from '../utils/ProductContext.js'
import styled from 'styled-components';
import {formatPrice} from '../utils/helper'
import {Link} from 'react-router-dom' 
export default function FeatureProducy(props) {
    const Productss = useContext(ProductContext);

    
    if(Productss.product.length !== 0){
        const size = 3 ;
        var item = Productss.product.slice(0,size);
        console.log(item)
        
     
    }
    //const Img = Productss.Product[0].image;
    return (
        <Wrapper>
            <h2>Feature Products</h2>
            <hr width="100px" />
            <div className="featur-product">
                {Productss.product.slice(0,3).map((i) =>{
                    var Img = i.image;
                    var Name = i.name;
                    var Price = i.price;
                  return(
                       <div> <img src={Img} alt="" width="350px" height="225px"/>
               
                        <Frame>
                            <span className="namee">{Name}</span>
                            <span style={{color:'#ab7a5f'}}>{formatPrice(Price)}</span>
                        </Frame></div>
                        )
                })}
            </div> 
            <Link to="/products"><Buttons>ALL PRODUCTS</Buttons></Link>
        </Wrapper>
    )
}
const Wrapper = styled.div`
display:flex;
flex-direction:column;
text-align:center;
justify-content:center`;
const Frame = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
margin-top:1rem;
`;

const Buttons = styled.button`
  color:white;
  width: 200px;
  height: 45px;
  cursor:pointer;
  background-color: #ab7a5f;
  margin-left:1rem;
  border:none;
  font-size: 1.2rem;
  border-radius: 0.2rem;
  `;
/* <img src={Productss.Product[0].image} alt="" width="350px" height="225px"/>
                <Frame>
                    <span>{Productss.Product[0].name}</span>
                    <span>{Productss.Product[0].price}</span>
                </Frame> */