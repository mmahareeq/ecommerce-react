import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
export default function PageHero(props) {
    return (
        <Wrapper>
        
            <h2>
               <Link to='/'> Home</Link> / {props.tittle} 
            </h2>
        
        </Wrapper>
    )
}

const Wrapper = styled.section`

background-color:#EADED7;
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
