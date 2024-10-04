import React, { useEffect, useState } from "react";
import "./Recommended.css";

import { API_KEY, value_convarter } from "../../data";
import { Link } from "react-router-dom";

const Recommended = ({ catogoryId }) => {
  const [apidata, setApidata] = useState([]);

  const fetching_Data = async () => {
    const related_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategoryId=${catogoryId}&key=${API_KEY}`;
    await fetch(related_Url)
      .then((res) => res.json())
      .then((Data) => setApidata(Data.items));
  };

  useEffect(() => {
    fetching_Data();
  }, []);
  return (
    <div className="recommended">
      {apidata.map((item,index) => {
        return (
          <Link to={`/Video/${item.snippet.categoryId}/${item.id}`} key={index} className="site-vedio-list">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
              <h4>
                {item.snippet.title}
              </h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_convarter(item.statistics.viewCount)} Views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
