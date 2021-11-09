import React from 'react';
import {Home}from 'features/common';
import { CheckList, ForgotPassword, UserLogin, UserRegister} from 'features/user'
import {Route, Routes} from 'react-router-dom'; //21-11-06 v6로 버전업이후 switch -> routes / component -> element= {<Home/>}/>
import { Dairy } from 'features/dairy';
import { Review } from 'features/review';
import { History } from 'features/history';
import { About } from 'features/todo';
import { Calendar } from 'features/calendar';
import { AdminLogin, AdminPage } from 'features/admin';
import { AppTasks } from 'features/task';

//Attempted import error: 'Action' is not exported from 'history'. histroy 버전 5로 업.



const App= () => {
  return (
    <div className="App">
        <Routes>
              <Route path='/' element= {<Home/>}/>
              <Route path='/home' element= {<Home/>}/>
              <Route path='/users/login' element={<UserLogin/>}/>
              <Route path='/users/for-got-pwd' element={<ForgotPassword/>}/>
              <Route path='/users/register' element={<UserRegister/>}/>
              <Route path='/users/dairy' element={<Dairy/>}/>
              <Route path='/users/review' element={<Review/>}/>
              <Route path='/users/history' element={<History/>}/>
              <Route path='/users/checkList' element={<CheckList/>}/>
              <Route path='/users/about' element={<About/>}/>
              <Route path='/users/calendar' element={<Calendar/>}/>
              <Route path='/users/task' element={<AppTasks/>}/>
              <Route path='/users/adminLogin' element={<AdminLogin/>}/>
              <Route path='/users/admin' element={<AdminPage/>}/>
              
          </Routes>
          
    </div>
  );
}
      

export default App;