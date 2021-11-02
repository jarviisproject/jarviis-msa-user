import React from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";
const Navi = () => (
    <div>
        <Ul>
            <Li><Link to='./Home'style={{ textDecoration:'none' }}>Home</Link></Li>
            <Li><Link to='./UserRegister'style={{ textDecoration:'none' }}>UserRegister</Link></Li>
            <Li><Link to='./UserLogin'style={{ textDecoration:'none' }}>userLogin</Link></Li>
        </Ul>
        </div>
)

export default Navi

const Ul = styled.ul`
background-color: #FFDAB9;
text-decoration:none
text-align: center;


`
const Li = styled.li`
float: left;
margin-left: 1em;
font-size:20px;
text-align:center;
display:inline-block;


`

