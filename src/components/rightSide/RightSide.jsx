import React from 'react';
import './RightSide.css';
import News from '../news/News';
import CustomerReview from '../customerReview/CustomerReview';

function RightSide() {
  return (
    <div className="RightSide">
        <div>
            <h3>News</h3>
            <News/>
        </div>
        <div>
            <h3>Customer Review</h3>
            <CustomerReview/>
        </div>
    </div>
  )
}

export default RightSide