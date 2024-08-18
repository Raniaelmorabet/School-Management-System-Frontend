import React, { useEffect, useState } from 'react';
import {Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login/Login.jsx'; 
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import AppRoutes from './Components/Routing/AppRoutes.jsx';
import Loading from './Components/Loading/Loading.jsx';
import { useSelector } from 'react-redux';
function App() {
    const [flag,setFlag] = useState("loading");
    const token = useSelector(state=>state.authentication.token);
    const user = useSelector(state=>state.authentication.user);
    const role = useSelector(state=>state.authentication.role);
    useEffect(()=>{
        setFlag("loading")
        if(token == null || user == null || role == null){
            setFlag("login");
        }else{
            setFlag("authorize");
        }
    },[]);
    return (
        <Routes>
            {flag == "authorize" ? (
                <>
                    <Route path='/*' element={<ErrorPage/>} />
                    <Route path='/SMS/*' element={<AppRoutes/>} />
                    <Route path='/' element={<Navigate to={'/SMS'}/>} />
                    <Route path='/login' element={<Navigate to={'/SMS'}/>} />
                </>
            ) : flag == "loading" ? (
                <>
                    <Route to='/*' element={<Loading/>}/>
                </>
            ) : (
                <>
                    <Route path='/login' element={<Login/>} />
                    <Route path='/*' element={<Navigate to='/login'/>} />
                </>
            )}
        </Routes>
    );
}
export default App;