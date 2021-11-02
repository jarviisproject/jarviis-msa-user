import React from "react";
import 'features/common/style/LayOutStyle.css'
import { UserLogin, UserRegister } from "features/user";
import { Navi,Home } from "features/common";
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Redirect, Switch } from 'react-router';


export default function LayOut(){
    return <div className="grid-container">
    <Router>
       <div class="item1">
       <Navi/>
       </div>
       <div class="item3"> <Switch>
            <Route exact path='/' component= {Home}/>
            <Redirect from='/home' to ={'/'}/>
            <Route exact path='/userLogin' component={UserLogin}/>
            <Route exact path='/userRegister' component={UserRegister}/>
        </Switch></div>  
       <div class="item5">이건 풋터야!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
       </Router>
   </div>
  
   
   

}


