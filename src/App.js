import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import Profileview from './components/Profileview'; 
import AddNewTimesheet from './components/AddNewTimesheet';
import ViewExistingTimesheet from './components/ViewExistingTimesheet';
import MyApprovals from './components/MyApprovals';
import TimesheetReport from './components/TimesheetReport.jsx';
import ApprovalReport from './components/ApprovalReport.jsx';
import ScheduleReports from './components/ScheduleReports.jsx';
import Users from './components/Users';
import Clients from './components/Clients';
import Projects from './components/Projects';
import Tasks from './components/Tasks';


function App() {

  return (
    <div style={{fontFamily:"Poppins,sans-serif"}}>
      
    <Router>
       
            <Routes>
              
                <Route path="/users" element={<Users />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/clients" element={<Clients />} />
               
                
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path='/settings' element={<Settings/>}/>
                <Route path='/profileview' element={<Profileview/>}/>
                <Route path='/clients' element={<Clients/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/tasks' element={<Tasks/>}/>
                <Route path='/users' element={<Users/>}/>
                <Route path='/addnewtimesheet' element={<AddNewTimesheet/>}/>
                <Route path='/viewexistingtimesheet' element={<ViewExistingTimesheet/>}/>
                <Route path='/myapprovals' element={<MyApprovals/>}/>
                <Route path='/timesheetreport' element={<TimesheetReport/>}/>
                <Route path='/approvalreport' element={<ApprovalReport/>}/>
                <Route path='/schedulereports' element={<ScheduleReports/>}/>

             
              
            </Routes>
          
        </Router>

    </div>

  );
}

export default App;