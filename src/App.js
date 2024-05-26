import "./App.css";
import React, { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import axios from "axios";

function App() {
  const [news, setNews] = useState([]);
  const options = {
    method: "GET",
    url: `${process.env.REACT_APP_API_URL}`,
    headers: {
      "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
      "X-RapidAPI-Host": `${process.env.REACT_APP_API_HOST}`,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        const data = response.data.data[0].screen_data.news;
        setNews(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

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
