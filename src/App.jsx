import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JuryList from "./Components/Jury Members/JuryListPage.jsx";
import Header from "./Components/Header/Header.jsx";
import AddJuryMemberForm from "./Components/Jury Members/AddJuryMemberForm.jsx";
import UpdateJuryMemberForm from "./Components/Jury Members/UpdateJuryMemberForm.jsx";
import Sidebar from "./Components/SideBar/Sidebar.jsx";
import MeetingListPage from "./Components/Meetings/MeetingListPage.jsx";
import ScheduleMeeting from "./Components/Meetings/ScheduleMeeting.jsx";
import RescheduleMeeting from "./Components/Meetings/RescheduleMeeting.jsx";
import Convocation from "./Components/Convocation/Convocation.jsx";
import PVControlContinu from "./Components/PV Documents/PVControlContinu.jsx";
import PrintTable from "./Components/PV Documents/PVModalitePassage.jsx";
import Login from './Components/Login/Login.jsx'; 
function App() {
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