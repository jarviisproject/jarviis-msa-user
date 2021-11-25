import * as React from 'react';
import {Header} from 'features/common';
import {Footer} from 'features/common';
import { MyPage } from 'features/common';
import 'features/common/style/LayOutStyle.scss'
import 'features/common/style/Button.scss'

//const Item = styled(Paper)(({ theme }) => ({
//  ...theme.typography.body2,
//  padding: theme.spacing(1),
//  textAlign: 'center',
//  color: theme.palette.text.secondary,
//}));

const LayOut = (props) => {
  return (
    <div class="wrapper">
      <div class="container">
        <div class="header"><Header/></div>
        <div class="menu"><MyPage/></div>
        <div class="main">{props.children}</div>
        <div class="item1"><img class="pulsate-bck"
                                            style={{marginLeft: "159px", width: '30%', cursor: "pointer" }}
                                            src={require("features/common/images/chatbot.png").default} /></div>
        <div class="footer"><Footer/></div>
      </div>
    </div>
  );
}
export default LayOut

