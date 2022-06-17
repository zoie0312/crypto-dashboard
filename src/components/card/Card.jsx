import React, { useState } from 'react';
import './Card.css';
import { AnimateSharedLayout } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ReactApexChart from 'react-apexcharts'

const CompactCard = ({param}) => {
    const {
        png: Png,
        barValue,
        value,
        series,
        color
    } = param;
    //console.log('barValue series= ', barValue);
    const options = {
        labels: ['a'],
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        show: true
                    }
                },
            }
        },        
        chart: {
            type: 'radialBar'
        }
    }
    return (
        <div className="CompactCard"
            style={{
                background: color.backGround,
                boxShadow: color.boxShadow
            }}
        >
            
            <div className="chartContainer" >
                <CircularProgressbar
                    value={barValue}
                    text={`${barValue}%`}
                />

            </div>
            <div className="detail">
                <Png/>
                <span>${value}</span>
                <span>Last 24 hours</span>
            </div>
        </div>
        
    );
};

function Card(props) {
    const [expanded, setExpanded] = useState(false);

    return (
        <AnimateSharedLayout>
            {
                expanded ? (
                    'Expanded'//<ExpandedCard/>
                ) : (
                    <CompactCard param={props}/>
                )
            }
        </AnimateSharedLayout>
    );
}

export default Card;
