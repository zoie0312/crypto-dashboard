//import React from 'react';
import React, { useState } from 'react'

import './Sidebar.css';
import Logo from '../../imgs/logo.png';

import { SidebarData } from '../../Data/Data.js';
import {UilSignOutAlt} from "@iconscout/react-unicons";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const Sidebar = () => {
    const [selected, setSelected] = useState(0);
    const [expanded, setExpanded] = useState();

    const sidebarVariants = {
        true: {
          left : '0',
        },
        false:{
          left : '-60%',
        }
    };
    console.log(window.innerWidth);
    return (
        <>
            <div 
                className="bars" 
                style={expanded?{left: '60%'}:{left: '5%'}} 
                onClick={()=>setExpanded(!expanded)}
            >
                <UilBars />
            </div>
            <motion.div className='Sidebar'
                variants={sidebarVariants}
                animate={window.innerWidth<=768?`${expanded}`:''}
            >
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
            </motion.div>
        </>
    )
}

export default Sidebar;
