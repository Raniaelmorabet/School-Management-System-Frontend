import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './Components/Login/Login.jsx'; 
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import AppRoutes from './Components/Routing/AppRoutes.jsx';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Components/Loading/Loading.jsx';
import { loadingTrue } from './Components/Slices/LoadingSlice.js';
import { logout } from './Components/Slices/AuthSlice.js';
import { Api } from './Components/Tools/Api.js';

const authBaseUrl = import.meta.env.VITE_AUTH_BASE_URL;

function App() {
    const [flag, setFlag] = useState("loading");
    const dispatch = useDispatch();
    const token = useSelector(state => state.authentication.token);
    const user = useSelector(state => state.authentication.user);
    const role = useSelector(state => state.authentication.role);
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        const validateToken = async () => {
            try {
                const response = await Api(`${authBaseUrl}/TokenExpiration`, 'get', '', token);
                console.log(response);

                if (response.httpStatus === 401) {
                    dispatch(loadingTrue());
                    dispatch(logout());
                    navigate('/login');
                } else {
                    setFlag("authorize");
                }
            } catch (error) {
                console.error('Error validating token:', error);
                dispatch(logout());
                navigate('/login');
            }
        };

        if (token && user && role) {
            validateToken();
        } else {
            setFlag("login");
        }
    }, [token, user, role, dispatch, navigate]);

    return (
        <Routes>
            {flag === "authorize" ? (
                <>
                    <Route path='/SMS/*' element={<AppRoutes />} />
                    <Route path='/' element={<Navigate to='/SMS' />} />
                    <Route path='/login' element={<Navigate to='/SMS' />} />
                    <Route path='/*' element={<ErrorPage />} />
                </>
            ) : flag === "loading" ? (
                <Route path='/*' element={<Loading />} />
            ) : (
                <>
                    <Route path='/login' element={<Login />} />
                    <Route path='/*' element={<Navigate to='/login' />} />
                </>
            )}
        </Routes>
    );
}

export default App;
