import React from "react";
import {  LayOut } from "..";
import styled from "styled-components";
import "features/common/font/font.scss";
import Test from "../components/Test";



export default function Home() {
  return (
    <LayOut>
      <Main>
        <Test/>
        {/* <img
          className="jarviis-img"
          src={require("features/common/images/Be with you-001.png").default}
        /> */}
      </Main>
      {/* <img src={require("../imges/running.gif").default}/> */}
    </LayOut>
  );
}
const Main = styled.div`
width: 500px;
margin: 0 auto;
text-decoration:none
text-align: center;
font-family: 'UhBeeRami';
`;
