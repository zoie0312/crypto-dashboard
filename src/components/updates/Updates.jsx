import React from 'react';
import './Updates.css';
import { UpdatesData } from "../../Data/Data";


function Updates() {
  return (
    <div className="Updates">
      {UpdatesData.map((update, idx) => {
        return (
          <div className="update" key={idx}>
            <img src={update.img} alt="profile" />
            <div className="noti">
              <div  style={{marginBottom: '0.5rem'}}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
                <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Updates