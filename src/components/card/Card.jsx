import React, { useState } from 'react';
import './Card.css';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ReactApexChart from 'react-apexcharts';
import {UilTimes} from '@iconscout/react-unicons'

const CompactCard = ({param, setExpanded}) => {
    const {
        png: Png,
        title,
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
        <motion.div 
            className="CompactCard"
            style={{
                background: color.backGround,
                boxShadow: color.boxShadow
            }}
            onClick={setExpanded}
            layoutId='expandableCard'
        >
            
            <div className="barChart" >
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
        </motion.div>
        
    );
};

const ExpandedCard = function ({param, setExpanded}) {
    const {
        color,
        title,
        series
    } = param;

    const data = {
        options: {
            chart: {
                type: 'area',
                height: 'auto'
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.35
            },
            fill: {
                colors: ['#fff'],
                type: 'gradient'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                colors: ['white']
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                }
            },
            grid: {
                show: true
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    '2021-09-10T00:00:00.000Z',
                    '2021-09-10T01:30:00.000Z',
                    '2021-09-10T02:30:00.000Z',
                    '2021-09-10T03:30:00.000Z',
                    '2021-09-10T04:30:00.000Z',
                    '2021-09-10T05:30:00.000Z',
                    '2021-09-10T06:30:00.000Z',
                ]
            }
        }
    }
    return (
        <motion.div className="ExpandedCard"
            style={{
                background: color.backGround,
                boxShadow: color.boxShadow
            }}
            onClick={setExpanded}
            layoutId='expandableCard'
        >
            <div
                style={{
                    alignSelf: 'flex-end',
                    cursor: 'pointer',
                    color: 'white'
                }}
            >
                <UilTimes 
                    onClick={setExpanded}
                />
            </div>
            <span>{title}</span>
            <div className="chartContainer">
                <ReactApexChart
                    series={series}
                    type='area'
                    options={data.options}
                />
            </div>
            <span>Last 24 hours</span> 
        </motion.div>
    );
}

function Card(props) {
    const [expanded, setExpanded] = useState(false);

    return (
        <AnimateSharedLayout>
            {
                expanded ? 
                    <ExpandedCard param={props} setExpanded={() => setExpanded(false)}/>: 
                    <CompactCard param={props} setExpanded={() => setExpanded(true)}/>
                
            }
        </AnimateSharedLayout>
    );
}

export default Card;
