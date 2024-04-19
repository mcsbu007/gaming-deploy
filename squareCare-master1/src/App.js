import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Login/Login";
import Process from "./Process/Process";
import PatientInfo from "./PatientInfo/PatientInfo";

import Patients from "./Pages/Patients";
import Staffs from "./components/StaffManagement";
import MessagePage from "./Pages/Messages";

import AccountManagement from "./Pages/Account";
import Notification from "./components/Notification";
import Resources from "./components/Resources";

import DashboardPage from './Pages/DashboardPage';
import StaffManagementPage from './Pages/StaffManagementPage';

export const API_URL = "http://localhost:8000";


function App() {
  return (
    // <div className="App">
    //   <PatientInfo/>
    // </div>
    <Router>
      <Routes>
        <Route path="/" exact Component={Login} />
        <Route path="/patientInfo" Component={PatientInfo} />
        <Route path="/process" Component={Process} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/staffs" element={<Staffs />} />
        <Route path="/messages" element={<MessagePage />} />
        <Route path="/AccountManagement" Component={AccountManagement}/>
        <Route path="/Notification" Component={Notification}/>
        <Route path="/Resources" Component={Resources}/>
        <Route path='/DashBoard' Component={DashboardPage} />
	<Route path='/StaffManagementPage' Component={StaffManagementPage} />
      </Routes>
    </Router>
  );
}

export default App;
