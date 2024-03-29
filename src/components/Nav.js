import React from 'react';
import styled from 'styled-components';
import { links } from '../utils/contents';
import { Link, NavLink } from 'react-router-dom';
import Login from '../components/Login.js';
import logo from '../assests/logo.221f6b13e6eaaad5828372464f73a1a4.svg'

export default function Nav() {
    return (
        <Header >
            <div>

                <img src={logo} alt="comfy sloth" />

            </div>
            <Ul>
                {links.map(link => {
                    return (
                        <Li key={link.id}><NavLink to={link.url} className="link">{link.text}</NavLink></Li>
                    )
                })}
            </Ul>

            <div>
                <Login />
            </div>
        </Header>
    )
}

const Header = styled.div`

    display:flex;
    flex-direction:row;
    justify-content:space-around;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
    .link
    {
        text-decoration: none;
        color: #324d67;
    }
`;

const Ul = styled.ul`
    list-style-type: none;
    display:flex;
    flex-direction:row;
`;

const Li = styled.li`
    margin:10px;
    
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing:0.1rem;
    
`;

