import React from 'react'
import JuryList from '../Jury Members/JuryListPage'
import AddJuryMemberForm from '../Jury Members/AddJuryMemberForm'
import UpdateJuryMemberForm from '../Jury Members/UpdateJuryMemberForm'
import MeetingListPage from '../Meetings/MeetingListPage'
import ScheduleMeeting from '../Meetings/ScheduleMeeting'
import RescheduleMeeting from '../Meetings/RescheduleMeeting'
import MeetingDetails from '../Meetings/MeetingDetails'
import Sidebar from '../SideBar/Sidebar'
import Header from '../Header/Header'
import { Route, Routes } from 'react-router-dom'
function AppRoutes() {
    return (
        <div className="flex h-screen">
            <Sidebar/>
            <div className="flex-1 flex flex-col">
                <Header />
                <div className='p-10'>
                    <Routes>
                        <Route path="/Juries" element={<JuryList />} />
                        <Route path="/add-jury" element={<AddJuryMemberForm />} />
                        <Route path="/Update/:id" element={<UpdateJuryMemberForm />} />
                        <Route path="/MeetingListPage" element={<MeetingListPage />} />
                        <Route path="/ScheduleMeeting" element={<ScheduleMeeting />} />
                        <Route path="/RescheduleMeeting/:id" element={<RescheduleMeeting />} />
                        <Route path='/MeetingDetails/:id' element={<MeetingDetails/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}
export default AppRoutes