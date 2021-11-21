import React from "react";
import 'features/common/style/image.scss'
import { Link } from 'react-router-dom';
import 'features/common/style/Button.scss'
import 'features/common/style/MyPage.scss'

export default function mypage() {
    const sessionUser = localStorage.getItem("sessionUser")
    // const history = useHistory()
    const logout = e => {
        e.preventDefault()
        localStorage.setItem('sessionUser','')
        history.push('/')
    }
    return (
        <form className="mypage">
            <h3>***님 안녕하세요!</h3>
            <img className='snoopy-img' src={require("../images/snoopy.jpg").default} /><br />
            <h5>be with you</h5>
            <div>
            <Link className="arrow-btn" to="/qna/QnaList">QnA</Link><br />
             <Link className="arrow-btn" to="/">로그아웃</Link><br />
             </div>
        </form>
    )
}