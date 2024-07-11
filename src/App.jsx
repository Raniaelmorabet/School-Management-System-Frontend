import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JuryList from "./Components/JuryListPage.jsx";
import Header from "./Components/Header.jsx";
import AddJuryMemberForm from "./Components/AddJuryMemberForm.jsx";
import UpdateJuryMemberForm from "./Components/UpdateJuryMemberForm.jsx";
import Sidebar from "./Components/Sidebar.jsx";

function App() {
    return (
        <Router>
            <div>
                <Header />
                {/*<Sidebar/>*/}
                <Routes>
                    <Route path="/Home" element={<JuryList />} />
                    <Route path="/add-jury" element={<AddJuryMemberForm />} />
                    <Route path="/Update/:id" element={<UpdateJuryMemberForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;