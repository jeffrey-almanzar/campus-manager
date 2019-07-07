import React from 'react';
import logo from './logo.svg';
import './App.css';

import CampusCard from './CampusCard';
import StudentCard from './StudentCard';
import ShowCampus from './ShowCampus';
import ShowStudent from './ShowStudent';
import Home from './Home';

function App() {
  return (
    <div>
      < CampusCard campName = "Lehman College"/>
      < StudentCard name = "Alice Wang" campName ="Lehman College"/>
      < ShowCampus campName = "Lehman College"/>
      < ShowStudent name= "Alice" gpa="3.5" campName ="Hostos"/>
      <Home />
      
    </div>
  );
}

export default App;
