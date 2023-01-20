import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
export default function PageHero(props) {
    return (
        <Wrapper>
        
            <h3>
               <Link to='/'> Home</Link> / {props.tittle} 
            </h3>
        
        </Wrapper>
    )
}

const Wrapper = styled.section`

background-color:#EADED7;
font-size: 1.4rem;
text-align:center;
width:100%;
display:flex;
padding-left:2rem;
h2
{
    color:#453227;
}
a
{
    color:#795744;
    text-decoration: none;

}

`
