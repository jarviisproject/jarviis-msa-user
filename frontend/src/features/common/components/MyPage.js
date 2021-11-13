import React from "react";
import 'features/common/style/image.scss'
import { Link } from 'react-router-dom';
import 'features/common/style/Button.scss'

export default function mypage() {
    return (
        <form>
            <h3>***님 안녕하세요!</h3>
            <img className='snoopy-img' src={require("../images/snoopy.jpg").default} /><br />
            <Link className="arrow-btn" to="/users/bord">FnQ</Link><br />
            <Link className="arrow-btn" to="/">QnA</Link><br />
             <Link className="arrow-btn" to="/">로그아웃</Link><br />
        </form>
    )
}