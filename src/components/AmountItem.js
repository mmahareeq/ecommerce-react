import React from 'react'
import styled from 'styled-components'

export default function AmountItem({amount,increace,decrease}) {
   
    return (
        <Wrapper>
        <div>
           <button onClick={increace}>+</button>
           <span>{amount}</span>
           <button onClick={decrease}>-</button> 
        </div>
        </Wrapper>
    )
}


const Wrapper = styled.div`
 font-size:1.5rem;
 font-weight:bold;

 button
 {   font-size:1.1rem;
    margin:0.7rem;
    cursor:pointer;
     border:none;
     background:white;
 }
`;