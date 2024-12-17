import React from 'react';
import Display1 from './Display1';
import Display2 from './Display2';
import Display3 from './Display3';
import Display4 from './Display4';

function App() 
{
  const n = "revanth"
  return (
    <div>
      <Display1 name={n}/>
      <Display2 course="Java Full Stack Developer"/>
      <Display3 skills="Java Full Stack Developer"/>
      <Display4 project1="Student Management System" project2="E-Commerce Application"/>
      
    </div>
  );
}

export default App;

