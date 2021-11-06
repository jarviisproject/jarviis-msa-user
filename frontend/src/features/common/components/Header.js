import React from 'react';
import {Navi }from 'features/common';
import styled from 'styled-components'
const Header = () => {
    return (
      <><header>
        <Navi/><br/>
      </header>
      </>
    )
  }
const Span = styled.span`
    color: red;
    float: right;
    padding-right: 100px
`
const HR = styled.hr`
  border: 1px solid black;
  text-align: center;
`
  export default Header