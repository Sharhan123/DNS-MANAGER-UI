import React from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import HomePage from '../pages/homePage'
import DomainPage from '../pages/domainPage'
import SignUpPage from '../pages/signUpPage'
import ProtectedRoute from './protectedRoute'
import { useSelector } from 'react-redux'
import SignInPage from '../pages/signInPage'
import RecordsPage from '../pages/recordsPage'
function UserRouters() {
  const isAuthenticated = useSelector((state) => state.token.token);
  console.log(isAuthenticated);
  return (
        <Routes>
            <Route path='/*' element={isAuthenticated?<HomePage/>:<Navigate to={'/signin'}/>} />
            <Route path='/signin' element={isAuthenticated?<Navigate to={'/'}/>:<SignInPage/>}/>
            <Route path='/signup' element={isAuthenticated?<Navigate to={'/'}/>:<SignUpPage/>}/>
            <Route path='/domain' element={isAuthenticated?<DomainPage/>:<Navigate to={'/'}/>}/>
            <Route path='/records' element={isAuthenticated?<RecordsPage/>:<Navigate to={'/'}/>}/>
        </Routes>
  )
}

export default UserRouters
