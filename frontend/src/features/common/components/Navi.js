import React from 'react';
import { Link } from 'react-router-dom'
import 'features/common/style/Navi.scss'

export default function Navigation() {

  return (
    <div class="gnb">
      <div>
      <ul>
        <li><Link to="/home"><span>Home</span></Link></li>
        <li><Link to="/users/login"><span>로그인</span></Link></li>
        <li><Link to="/users/join" ><span>회원가입</span></Link></li>
        <li><Link to="/users/dairy" ><span>다이어리</span></Link></li>
        <li><Link to="/users/review"><span>리뷰</span></Link></li>
        <li><Link to="/users/history"><span>히스토리</span></Link></li>
        <li><Link to="/users/about" ><span>추천</span></Link></li>
        <li><Link to="/users/task" ><span>할일 목록</span></Link></li>
        <li><Link to="/users/calendar" ><span>달력</span></Link></li>
        <li><Link to="/users/adminLogin" ><span>admin</span></Link></li>
        
        
      </ul>
      </div>
    </div>
  );
}