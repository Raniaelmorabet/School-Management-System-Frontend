import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JuryList from "./Components/JuryListPage.jsx";
import Header from "./Components/Header.jsx";
import AddJuryMemberForm from "./Components/AddJuryMemberForm.jsx";
import UpdateJuryMemberForm from "./Components/UpdateJuryMemberForm.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import MeetingListPage from "./Components/MeetingListPage.jsx";
import ScheduleMeeting from "./Components/ScheduleMeeting.jsx";
import RescheduleMeeting from "./Components/RescheduleMeeting.jsx";
import GenerateInvitationsForm from "./Components/GenerateInvitationsForm.jsx";
import PVControlContinu1ereAnnee from "./Components/PV(Control continu 1ere annee).jsx";
import PrintTable from "./Components/PVModalitePassage.jsx";
import Login from './Components/Login/Login.jsx'; 
function App() {
    return (
        <Login/>
        // <Router>
        //     <div className="flex h-screen">
        //         <Sidebar/>
        //         <div className="flex-1 flex flex-col">
        //             <Header />
        //             <div className='p-10'>
        //                 <Routes>
        //                     <Route path="/Home" element={<JuryList />} />
        //                     <Route path="/add-jury" element={<AddJuryMemberForm />} />
        //                     <Route path="/Update/:id" element={<UpdateJuryMemberForm />} />
        //                     <Route path="/MeetingListPage" element={<MeetingListPage />} />
        //                     <Route path="/ScheduleMeeting" element={<ScheduleMeeting />} />
        //                     <Route path="/RescheduleMeeting/:id" element={<RescheduleMeeting />} />
        //                 </Routes>
        //             </div>
        //         </div>
        //
        //     </div>
        // </Router>
    );
}

export default App;