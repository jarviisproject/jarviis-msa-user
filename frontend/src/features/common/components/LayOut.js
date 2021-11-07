import * as React from 'react';
import {Header} from 'features/common';
import {Footer} from 'features/common';
import 'features/common/style/LayOutStyle.css'





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
        <span class="item1"><Header/></span>
        <span class="item2">2</span>
        <span class="item3"> {props.children}</span>
        <span class="item4">4</span>
        <span class="item5">5</span>
        <span class="item6"><Footer/></span>
      </div>
    </div>
  );
}
export default LayOut

