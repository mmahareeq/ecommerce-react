import React from 'react';
import styled from 'styled-components';

export default function ColCart() {
    return (
        <Wrapper>
           <div className='section'>
                   <h5>Item</h5>
                   <h5>Price</h5>
                   <h5>Quantity</h5>
                   <h5>Subtotal</h5>
                   <span></span>
            </div>
            <hr />
                
        </Wrapper>
    )
}

const Wrapper = styled.div`
  .section{
      display:grid;
      grid-template-columns: 316px 1fr 1fr 1fr auto;
      justify-items: center;
      column-gap: 1rem;
      
  }
h5
{   color: #9eb2c7;
    font-weight: 400;
    font-size:1rem
}
span
{
    width:2rem;
    height:2rem;
} 
hr
{
    margin-top: 1rem;
    margin-button:1rem;
}
`