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
        // <PrintTable/>
        <Router>
            <div className="flex h-screen">
                <Sidebar/>
                <div className="flex-1 flex flex-col">
                    <Header />
                    <div className='p-10'>
                        <Routes>
                            <Route path="/Home" element={<JuryList />} />
                            <Route path="/add-jury" element={<AddJuryMemberForm />} />
                            <Route path="/Update/:id" element={<UpdateJuryMemberForm />} />
                            <Route path="/MeetingListPage" element={<MeetingListPage />} />
                            <Route path="/ScheduleMeeting" element={<ScheduleMeeting />} />
                            <Route path="/RescheduleMeeting/:id" element={<RescheduleMeeting />} />
                        </Routes>
                    </div>
                </div>

            </div>
        </Router>
    );
}

export default App;