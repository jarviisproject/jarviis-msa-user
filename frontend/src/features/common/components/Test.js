
import React from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

export default function Test() {
  const CarouselUI = ({ children }) => <Container>{children}</Container>;
  const Carousel = makeCarousel(CarouselUI);
  
 return (
   <div>
  <h1>
  <Fade left cascade>
   = JARVIIS HOME = 
  </Fade>
</h1>
  <Carousel defaultWait={10000} /*wait for 1000 milliseconds*/ >
    <Slide right>
      <div>
      <img
        src={require("features/common/images/me.png").default}/> 팀장 안주현입니다
      </div>
    </Slide>
    <Slide right>
      <div>
      <img
          className="jarviis-img"
          src={require("features/common/images/Be with you-001.png").default}
        />
      </div>
    </Slide>
    <Slide right>
      <div>
      <img
          src={require("features/common/images/running.gif").default}
        />
      </div>
    </Slide>
  </Carousel>
   </div>
  
);
}
const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 1629px;
  height: 448px;
  right: 564px;
  top: 115px
  text-align: center;
`
