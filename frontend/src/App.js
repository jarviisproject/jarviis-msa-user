import React from 'react';
import {Home}from 'features/common';
import { UserLogin, UserRegister} from 'features/user'
import {Route, Routes} from 'react-router-dom'; //21-11-06 v6로 버전업이후 switch -> routes / component -> element= {<Home/>}/>



const App= () => {
  return (
    <div className="App">
      
        <Routes>
              <Route path='/' element= {<Home/>}/>
              <Route path='/home' element= {<Home/>}/>
              <Route path='/users/Login' element={<UserLogin/>}/>
              <Route path='/users/Register' element={<UserRegister/>}/>
          </Routes>
          
    </div>
  );
}
      

export default App;