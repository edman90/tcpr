import React from "react";
import Tabs from "./components/Tabs";
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";

function App() {
  return (
    
    <div className="App">
      <Tabs>
        <div label="Basketball Power Rankings">
          <b>As of July 30th, 2021</b>
          <br></br>
          <br></br>
          <br></br>
        <b>1. Kyle Brown (98 Overall)</b><br></br>
        <b>2. Graem Stickann (96 Overall)</b><br></br>
        <b>3. Sasa Zdrnja (96 Overall)</b><br></br>
        <b>4. Nathan Tuskan (95 Overall)</b><br></br>
        <b>5. Brian Burbridge (94 Overall)</b><br></br>
        <b>6. Cristian Zendejas (93 Overall)</b><br></br>
        <b>7. Justin Davis (91 Overall)</b><br></br>
        <b>8. Conrad Alegre (87 Overall)</b><br></br>
        <b>9. Estevan Ramirez (84 Overall)</b><br></br>
        <b>10. Edward Pedroza (82 Overall)</b><br></br>
        <b>11. Tristan Celmer (82 Overall)</b><br></br>
        <b>12. Joseph Salazar (80 Overall)</b><br></br>
        <b>13. Angel Tirado (78 Overall)</b><br></br>
        <b>14. Joey Silva (76 Overall)</b><br></br>
        <b>15. Lucas Guerra (68 Overall)</b><br></br>
        <b>16. Nolan (25 Overall)</b><br></br>
        </div>

        <div label="Coach Stick's Expert Analysis">

        </div>

        <div label="Admin Login">
        </div>
      
      </Tabs>
        
    </div>
  );
}

export default App;
