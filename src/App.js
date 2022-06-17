import React from 'react';
import './App.css';
import Sidebar from './components/sideBar/Sidebar';
import MainDash from './components/mainDash/MainDash';

function App() {
    return (
        <div className="App">
            
            <div className="AppGlass">
              <Sidebar/>
              <MainDash/>

              <div></div>
            </div>
        </div>
    );
}

export default App;
