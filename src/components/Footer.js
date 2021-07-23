import React from 'react'
import styled from 'styled-components';
export default function Footer() {
    return (
        <Footerr>
            <span>@ 2021 </span>
            <Comfy> ComfySloth </Comfy>
            <span> All rights reserved</span>
        </Footerr>
    )
}
const Footerr = styled.div`
   display:flex;
   justify-content:center;
   background-color:black;
   color:white;
   height:80px;
   
`; 
const Comfy = styled.span`
  color: #ab7a5f;
  margin-left:0.2rem;
  
`;