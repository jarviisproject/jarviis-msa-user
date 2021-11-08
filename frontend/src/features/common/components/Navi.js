import React from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components";

export default function Navigation() {
  
  return (
    <div>
        <Ul>
            <Li><Link to="/home" style={{textDecoration:'none'}}>Home</Link></Li>
            <Li><Link to="/users/login"style={{textDecoration:'none'}}>로그인</Link></Li>
            <Li><Link to="/users/register"style={{textDecoration:'none'}}>회원가입</Link></Li>
            <Li><Link to="/users/dairy"style={{textDecoration:'none'}}>다이어리</Link></Li>
            <Li><Link to="/users/review"style={{textDecoration:'none'}}>리뷰</Link></Li>
        </Ul>
    </div>
  );
}

const Ul = styled.ul`
background-color: #FFDAB9;
text-decoration:none
text-align: center;=



`
const Li = styled.li`
float: left;
margin-left: 1em;
font-size:20px;
text-align:center;
display:inline-block;
font-family: 'UhBeeRami';
`