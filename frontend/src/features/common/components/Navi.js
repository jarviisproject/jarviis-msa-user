import React from 'react';
import { Link } from 'react-router-dom'
import 'features/common/style/Header.scss'

export default function Navigation() {

  return (
    <div class="gnb">
      <ul>
        
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/users/login">로그인</Link></li>
        <li><Link to="/users/join" >회원가입</Link></li>
        <li><Link to="/users/dairy" >다이어리</Link></li>
        <li><Link to="/users/review">리뷰</Link></li>
        <li><Link to="/users/history">히스토리</Link></li>
        <li><Link to="/users/about" >추천</Link></li>
        <li><Link to="/users/task" >할일 목록</Link></li>
        <li><Link to="/users/calendar" >달력</Link></li>
        <li><Link to="/users/adminLogin" >admin</Link></li>
        
        
      </ul>
    </div>
  );
}