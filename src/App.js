import "./App.css";
import React, { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import axios from "axios";

function App() {
  const [news, setNews] = useState([]);
  const options = {
    method: "GET",
    url: "https://investing-cryptocurrency-markets.p.rapidapi.com/coins/get-news?pair_ID=1057391&page=1&time_utc_offset&lang_ID=1",
    headers: {
      "X-RapidAPI-Key": "dfeee1f073msh5f9bc151904928cp1f3eddjsn35fd98560012",
      "X-RapidAPI-Host": "investing-cryptocurrency-markets.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        const data = response.data.data[0].screen_data.news;
        setNews(data);
        console.log(response.data.data[0].screen_data.news);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="header">
        <h1>
          Crypto News <span>App</span>
        </h1>
        <p>Stay Updated With Market Of Cryptocurrency</p>
      </div>
      <div className="news-container">
        {news.map((item, index) => (
          <Card key={item.news_ID}>
            <a href={item.news_link} target="_blank" rel="noopener noreferrer">
              <img src={item.related_image_big} alt="" />
              <h3>{item.HEADLINE}</h3>
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
