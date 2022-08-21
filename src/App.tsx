import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Error404 } from './components/error404/Error404';
import { Login } from './components/login/Login';
import { NewPassword } from './components/new-password/NewPassword';
import { PasswordRecovery } from './components/password-recovery/PasswordRecovery';
import { Profile } from './components/profile/Profile';
import { Registration } from './components/registration/Registration';
import { Test } from './components/test/Test';

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path='registration' element={<Registration />} />
            <Route path='login' element={<Login />} />
            <Route path='new-password' element={<NewPassword />} />
            <Route path='password-recovery' element={<PasswordRecovery />} />

            <Route path='profile' element={<Profile />} />
            <Route path='/' element={<Test />} />

            <Route path='*' element={<Error404 />} />
         </Routes>
      </div>
   );
}

export default App;
