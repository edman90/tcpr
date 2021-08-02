import React from "react";
import Tabs from "./components/Tabs";
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";
import edImage from './images/ed.jpg';
import sasaImage from './images/sasa.jpg';
import graemImage from './images/graem.jpg';
import kyleImage from './images/kyle.jpg';
function App() {
  return (
    
    <div className="App">
      <div>
        <b style={{fontSize:"70px"}}>Tuskerdoo Crew Power Rankings</b>
      </div>
      <Tabs>
        <div label="Basketball Power Rankings">
          <b style={{fontSize:"50px"}}>Updated July 30th, 2021</b>
          <br></br>
          <br></br>
          <br></br>
        <b style={{fontSize:"50px"}}>1. Kyle Brown (<b style={{color: 'green'}}>98</b> Overall)</b><br></br>
        <b style={{fontSize:"50px"}}>2. Graem Stickann (<b style={{color: 'green'}}>97</b> Overall)</b><br></br>
        <b style={{fontSize:"50px"}}>3. Sasa Zdrnja (<b style={{color: 'green'}}>96</b> Overall)</b><br></br>
        <b style={{fontSize:"50px"}}>4. Nathan Tuskan (<b style={{color: 'green'}}>95</b> Overall)</b><br></br>
        <b style={{fontSize:"50px"}}>5. Brian Burbridge (<b style={{color: 'green'}}>94</b> Overall)</b><br></br>
        <b style={{fontSize:"50px"}}>6. Justin Davis (<b style={{color: 'SpringGreen'}}>91</b> Overall)</b><br></br>
        <b style={{fontSize:"50px"}}>7. Cristian Zendejas (<b style={{color: 'SpringGreen'}}>90</b> Overall)</b><br></br>
        <b style={{fontSize:"50px"}}>8. Conrad Alegre (<b style={{color: 'GreenYellow'}}>87</b> Overall)</b><br></br>
        <b style={{fontSize:"50px"}}>9. Joseph Salazar (<b style={{color: 'GreenYellow'}}>86</b> Overall)</b><br></br>
        <b style={{fontSize:"50px"}}>10. Estevan Ramirez (<b style={{color: 'GreenYellow'}}>84</b> Overall)</b><br></br>
        <b style={{fontSize:"50px"}}>11. Tristan Celmer (<b style={{color: 'GreenYellow'}}>81</b> Overall)</b><br></br>
        <b style={{fontSize:"50px"}}>12. Edward Pedroza (<b style={{color: 'GreenYellow'}}>80</b> Overall)</b><br></br>
        <b style={{fontSize:"50px"}}>13. Angel Tirado (<b style={{color: 'Yellow'}}>77</b> Overall)</b><br></br>
        <b style={{fontSize:"50px"}}>14. Joey Silva (<b style={{color: 'Yellow'}}>76</b> Overall)</b><br></br>
        <b style={{fontSize:"50px"}}>15. Lucas Guerra (<b style={{color: 'Orange'}}>72</b> Overall)</b><br></br>
        <b style={{fontSize:"50px"}}>16. Nolan (<b style={{color: 'Red'}}>25</b> Overall)</b><br></br>
        </div>

        <div label="Coach Stick's Expert Analysis">
          <b style={{fontSize:"50px"}}> Updated July 30th, 2021</b>
          <br></br>
          <br></br>
          <br></br>
          
          <div>
          <b style={{fontSize:"50px"}}>Edward Pedroza</b><br></br>
          <div>
          <img src={edImage} alt="Edward Pedroza" width = "300px" ></img>
          </div>
          <b>Outside Scoring: B-</b><br></br>
          <b>Inside Scoring: B</b><br></br>
          <b>Playmaking: C-</b><br></br>
          <b>Interior Defense: B</b><br></br>
          <b>Perimeter Defense: B-</b><br></br>
          <b>Ball Handle: C+</b><br></br>
          <b>Rebounding: A-</b><br></br>
          <b>Athleticism: B</b><br></br>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <b style={{fontSize:"50px"}}>Sasa Zdrnja</b><br></br>
          <div>
          <img src={sasaImage} alt="Sasa Zdrnja" width = "300px" ></img>
          </div>
          <b>Outside Scoring: B+</b><br></br>
          <b>Inside Scoring: B</b><br></br>
          <b>Playmaking: C+</b><br></br>
          <b>Interior Defense: B</b><br></br>
          <b>Perimeter Defense: B+</b><br></br>
          <b>Ball Handle: C+</b><br></br>
          <b>Rebounding: A-</b><br></br>
          <b>Athleticism: B+</b><br></br>
          <br></br>
          <br></br>
          <br></br>
          <b style={{fontSize:"50px"}}>Graem Stickann</b><br></br>
          <div>
          <img src={graemImage} alt="Graem Stickann" width = "300px" ></img>
          </div>
          <b>Outside Scoring: A+</b><br></br>
          <b>Inside Scoring: B+</b><br></br>
          <b>Playmaking: A-</b><br></br>
          <b>Interior Defense: D+</b><br></br>
          <b>Perimeter Defense: C+</b><br></br>
          <b>Ball Handle: A</b><br></br>
          <b>Rebounding: C-</b><br></br>
          <b>Athleticism: A</b><br></br>
          <br></br>
          <br></br>
          <br></br>
          <b style={{fontSize:"50px"}}>Kyle Brown</b><br></br>
          <div>
          <img src={kyleImage} alt="Kyle Brown" width = "300px" ></img>
          </div>
          <b>Outside Scoring: B+</b><br></br>
          <b>Inside Scoring: A</b><br></br>
          <b>Playmaking: B-</b><br></br>
          <b>Interior Defense: A</b><br></br>
          <b>Perimeter Defense: B</b><br></br>
          <b>Ball Handle: B+</b><br></br>
          <b>Rebounding: A+</b><br></br>
          <b>Athleticism: A+</b><br></br>
        </div>

      
      </Tabs>
        
    </div>
  );
}



export default App;
