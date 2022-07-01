import React from 'react';
import './News.css';
import { NewsData } from "../../Data/Data";
import useCryptoNews from "../../api/UseCryptoNews";


function News() {
  const [{data, isError, isLoading}, setRunning] = useCryptoNews(NewsData);
  
  return (
    <div className="News">
      {/* <button onClick={() => setRunning(false)}>Stop fetching ...</button> */}
      <div className="newsContainer">
      {isError && <div>Something went wrong...</div>}
      {
        isLoading ? (
          <div>Loading ... </div>
        ) : (
              data.map((news, idx) => {
                const {title, image, url} = news;
                return (
                  <div className="news-item" key={title}>
                    <img src={image} alt="profile" />
                    <div className="noti">
                      <div  style={{marginBottom: '0.1rem'}}>
                        <div>{title}</div>
                      </div>
                      <a href={url} target="_blank" rel="noreferrer">Source </a>
                    </div>
                  </div>
                );
              })
          
        )
      }
      </div>
    </div>
  )
}

export default News