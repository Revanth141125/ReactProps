import React from 'react';

function About(props){
  return <h1> {props.name} is a passionate and dedicated
   {props.course} with strong expertise 
   in {props.skills}. He has successfully completed 
   projects like a {props.project1} and an {props.project2};</h1>
}

function App() {
  return (
    <div>
      <About name="Simhadri Venkata Revanth" course="Java Full Stack Developer" skills="Java Full Stack Developer"
       project1="Student Management System" project2="E-Commerce Application"/>
    </div>
  );
}

export default App;

