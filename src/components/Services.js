import React from 'react'
import styled from 'styled-components';
export default function Services() {
    const email ="";
    return (
        <Section>
           <div className="services">
                <h3> Join our newsletter and get 20% off</h3>
              <div className="service11">
                <p>Lorem ipsumdolor sit amet consectetur adipisicing elit.
                Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?
                </p>
            
             <form className="Form">
                <input type="email" name="email"  value={email} placeholder="Enter Email" id="email"/>
                <input type="button" value="Subscribe" id ="submit"/>
             </form>
             </div>
             </div>
        </Section>
    )
}
const Section = styled.section`
  
   display:flex;
   flex-direction:row;
   justify-content:space-around;
   height:320px;

`;                                                                        