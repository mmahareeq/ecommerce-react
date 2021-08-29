import React from 'react'
import styled from 'styled-components'
export default function Loading() {
    return (
        <Load className="page">
            <h1>Loading ...</h1>
        </Load>
    )
}

const Load = styled.div`
  h1
  {
      font-weight:bold;
      font-size:3.5rem;
      color:black;
      -webkit-animation:spinner .6s linear infinite;
     
  }
  animation:spinner 6s linear infinite
  @keyframes spinner {
    from {left: 40%;}
    to {left: 100%;}
  }
  height:200px;
  margin-left:40%;
  margin-top:15%;
  

`
