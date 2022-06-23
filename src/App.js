import React from 'react';
import './App.css';
import Sidebar from './components/sideBar/Sidebar';
import MainDash from './components/mainDash/MainDash';
import RightSide from './components/rightSide/RightSide';

function App() {
    return (
        <div className="App">
            
            <div className="AppGlass">
              <Sidebar/>
              <MainDash/>
                <RightSide/>
              <div></div>
            </div>
        </div>
    );
}

export default App;
