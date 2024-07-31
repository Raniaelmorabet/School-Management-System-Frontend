import React, { useEffect, useState } from 'react';
import {Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login/Login.jsx'; 
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import AppRoutes from './Components/Routing/AppRoutes.jsx';
import Loading from './Components/Loading/Loading.jsx';
function App() {
    [flag,setFlag] = useState("loading");
    useEffect(()=>{
        setFlag("loading")
        var data = {
            token : localStorage.getItem("token"),
            user : localStorage.getItem("user"),
            role : localStorage.getItem("role")
        };
        if(data.token == undefined || data.user == undefined || data.role == undefined){
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
                    <Route path='/sms/*' element={<AppRoutes/>} />
                    <Route path='/' element={<Navigate to={'/sms'}/>} />
                    <Route path='/login' element={<Navigate to={'/sms'}/>} />
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