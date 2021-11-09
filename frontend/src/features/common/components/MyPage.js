import React from "react";
import 'features/common/style/image.scss'

export default function mypage(){
    return(
        <form>
        <h3>***님 안녕하세요!</h3>
        <img className='snoopy-img' src={require("../images/snoopy.jpg").default}/><br/>
        <button>환경설정</button><br/>
        <button>FnQ</button><br/>
        <button>QnA</button><br/>
        <button>로그아웃</button><br/>
        </form>
    )
}