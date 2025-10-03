import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const project = [
    {name:'AI Assitant',description:'dekh ban diya na.'},
    {name:'E-commerce',description:'ha sahi kaha bhai bana diya.'},
    {name:'chat-bot',description:'aur bol bano.'}
  ]
  return (
    <div id="main" >
     {
      project.map((proj,idx)=>
        <div className="ns-wrapper" key={idx}>
         <h1 data-ns-test="project-name">{proj.name}</h1>
         <h6 data-ns-test="project-description">{proj.description}</h6>
         </div>
        )
     }
    </div>
  )
}


export default App;
