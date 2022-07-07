import React from 'react'
import './Cards.css'
import {CardsData} from '../../Data/Data';
import Card from '../card/Card';


function Cards() {
    const series = [44, 50, 11, 3, 23];
    const options = {
        labels: ['a', 'b', 'c', 'd', 'e']
    }
    return (
        <>
            <h3>My NFTs</h3>
            <div className="Cards">
                
                {
                    CardsData.map((card, idx) => {
                        return (
                            <div className="parentContainer" key={idx}>
                                <Card
                                    title={card.title}
                                    color={card.color}
                                    barValue={card.barValue}
                                    value={card.value}
                                    png={card.png}
                                    series={card.series}
                                />
                            </div>
                        )
                    })
                    // <ReactApexChart 
                    //     type="pie" 
                    //     series={series} 
                    // />
                }
            </div>
    </>
  )
}


export default Cards