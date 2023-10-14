import React from 'react';
import ColourPicker from './components/ColourPicker';
import './App.css';


const App = () => {
  const colors = [
    "Red",            
    "Chartreuse",    
    "Blue",           
    "Yellow",    
    "Magenta",        
    "Aqua",     
    "Orange",     
    "DarkMagenta",         
    "Pink",          
    "ForestGreen",
    "Salmon",         
    "MediumTurquoise",
    "Brown",         
    "DarkOrange",    
    "SteelBlue",    
    "Yellow",         
];

  return (
   <div className="app-container">
      <h1>Color Picker</h1>
      <ColourPicker Colours={colors} />
    </div>
  );
};

export default App;
