import React from 'react';
import StudentCard from './components/StudentCard.jsx';
import './App.css';
import ReactLogo from './assets/eye.svg';


function App() {
  return (
    <div className="App">
      <StudentCard 
        name="popuri nithin" 
        registrationNumber="21003942"
        photo={ReactLogo}
      />
    </div>
  );
}

export default App;
