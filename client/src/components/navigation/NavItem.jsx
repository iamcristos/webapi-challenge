import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Nav = styled.nav`
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: center;
    align-items: center;
    background-color: #393D48;
    div{
        color:#D4D7DD ;
        span {
            color:#D4D7DD;
            text-decoration: none; 
            margin: 10px;
        }
    }
`;

const Link = styled(NavLink)`
    text-decoration: none;
    cursor: pointer;
`;

const NavBar = ()=>{
    return (
        <Nav>
            <div>
               <Link to="/"><span>
                    Project
                    </span>
                    </Link> 
               <Link to="/add-project">
                   <span>
                     Add Project
                   </span>
                   </Link>
            </div>
        </Nav>
    )
}

export default NavBar;