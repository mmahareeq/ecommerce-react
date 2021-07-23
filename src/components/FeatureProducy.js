import React,{useContext} from 'react'
import {ProductContext}  from '../utils/ProductContext.js'
import styled from 'styled-components';
export default function FeatureProducy(props) {
    const Productss = useContext(ProductContext);

    
    if(Productss.product.length !== 0){
        const size = 3 ;
        var item = Productss.product.slice(0,size);
        console.log(item)
        
     
    }
    //const Img = Productss.Product[0].image;
    return (
        <div>
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
                            <span style={{color:'#ab7a5f'}}>{Price}</span>
                        </Frame></div>
                        )
                })}
            </div> 
            <Buttons>ALL PRODUCTS</Buttons>
        </div>
    )
}
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
  
  background-color: #ab7a5f;
  margin:1.5rem;
  border:none;
  font-size: 1.2rem;
  border-radius: 0.2rem;`;
/* <img src={Productss.Product[0].image} alt="" width="350px" height="225px"/>
                <Frame>
                    <span>{Productss.Product[0].name}</span>
                    <span>{Productss.Product[0].price}</span>
                </Frame> */