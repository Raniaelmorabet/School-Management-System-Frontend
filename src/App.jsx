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
import FicheFormateur from "./Components/PV Documents/PVFicheFormateur.jsx";
import PVControlContinuMPCC from "./Components/PV Documents/PVControlContinuMPCC.jsx";
import PVControlContinuMPEFCFP from "./Components/PV Documents/PVControlContinuMPEFCFP.jsx";
import PVResultatValidations from "./Components/PV Documents/PVResultatValidations.jsx";
import Document from "./Components/PV Documents/PVReunion2.jsx";
import PVReunion1 from "./Components/PV Documents/PVReunion1.jsx";
import PVReunion3 from "./Components/PV Documents/PVReunion3.jsx";
function App() {
    return (
         // <PVReunion3 />
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