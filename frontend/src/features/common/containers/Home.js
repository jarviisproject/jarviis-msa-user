import React from "react";
import { LayOut } from "..";
import styled from "styled-components";
import "features/common/font/font.css"

export default function Home () {
    return (
        <LayOut>
            <Main><h1>JARVIIS - HOME</h1></Main>
            {/* <img src={require("../imges/running.gif").default}/> */}
        </LayOut>
    )
}
const Main = styled.div`
width: 500px;
margin: 0 auto;
text-decoration:none
text-align: center;
font-family: 'UhBeeRami';
`