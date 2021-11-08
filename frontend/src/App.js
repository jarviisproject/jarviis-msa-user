import React from 'react';
import {Home}from 'features/common';
import { ForgotPassword, UserLogin, UserRegister} from 'features/user'
import {Route, Routes} from 'react-router-dom'; //21-11-06 v6로 버전업이후 switch -> routes / component -> element= {<Home/>}/>
import { Dairy } from 'features/dairy';
import { Review } from 'features/review';
//Attempted import error: 'Action' is not exported from 'history'. histroy 버전 5로 업.



const App= () => {
  return (
    <div className="App">
        <Routes>
              <Route path='/' element= {<Home/>}/>
              <Route path='/home' element= {<Home/>}/>
              <Route path='/users/Login' element={<UserLogin/>}/>
              <Route path='/users/for-got-pwd' element={<ForgotPassword/>}/>
              <Route path='/users/Register' element={<UserRegister/>}/>
              <Route path='/users/dairy' element={<Dairy/>}/>
              <Route path='/users/review' element={<Review/>}/>
          </Routes>
          
    </div>
  );
}
      

export default App;