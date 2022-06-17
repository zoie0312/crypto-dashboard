//import React from 'react';
import React, { useState } from 'react'

import './Sidebar.css';
import Logo from '../../imgs/logo.png';

import { SidebarData } from '../../Data/Data.js';
import {UilSignOutAlt} from "@iconscout/react-unicons";

const Sidebar = () => {
    const [selected, setSelected] = useState(0);
    
    return (
        <div className="Sidebar">
            <div className="header">
                <img src={Logo} alt="" />
                <span>
                    Cr<span>yp</span>to
                </span>
            </div>

            <div className="menu">
                {
                    SidebarData.map((item, idx) => {
                        return (
                            <div 
                                className={"menuItem" + (selected === idx ? " active" : "")} 
                                key={idx}
                                onClick={() => setSelected(idx)}>
                                <item.icon/>
                                <span>{item.heading}</span>
                            </div>
                        )
                    })
                }
                <div className="menuItem">
                    <UilSignOutAlt/>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Sidebar;
