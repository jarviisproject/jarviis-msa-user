import React from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components";

export default function Navigation() {

  return (
    <div>
      <Ul>
        <Li><Link to="/home" style={{ textDecoration: 'none' }}>Home</Link></Li>
        <Li><Link to="/users/login" style={{ textDecoration: 'none' }}>로그인</Link></Li>
        <Li><Link to="/users/join" style={{ textDecoration: 'none' }}>회원가입</Link></Li>
        <Li><Link to="/users/dairy" style={{ textDecoration: 'none' }}>다이어리</Link></Li>
        <Li><Link to="/users/review" style={{ textDecoration: 'none' }}>리뷰</Link></Li>
        <Li><Link to="/users/history" style={{ textDecoration: 'none' }}>히스토리</Link></Li>
        <Li><Link to="/users/about" style={{ textDecoration: 'none' }}>추천</Link></Li>
        <Li><Link to="/users/task" style={{ textDecoration: 'none' }}>할일 목록</Link></Li>
        <Li><Link to="/users/calendar" style={{ textDecoration: 'none' }}>달력</Link></Li>
        <Li><Link to="/users/adminLogin" style={{ textDecoration: 'none' }}>admin</Link></Li>
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