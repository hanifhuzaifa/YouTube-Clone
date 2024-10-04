import React, { useEffect, useState } from "react";
import "./Feed.css";

import { Link } from "react-router-dom";
import { API_KEY } from "../../data";
import { value_convarter } from "../../data";
import moment from "moment";

const Feed = ({ cetagory }) => {
  const [Data, setData] = useState([]);

  const fetchData = async () => {
    const Video_List_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${cetagory}&key=${API_KEY}`;
    await fetch(Video_List_URL)
      .then((res) => res.json())
      .then((Data) => setData(Data.items))
      .catch((error) => console.error("Error fetching data:", error));
  };
  // console.log(Data)
  // console.log(Data[1].id)
  useEffect(() => {
    fetchData();
  }, [cetagory]);

  return (
    <div className="feed">
      {Data.map((item, index) => {
        // Console Each Id
        // console.log(item.id, "each iD");

        return (
          <Link
            key={item.id}
            to={`Video/${item.snippet.categoryId}/${item.id}`}
            className="card"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {value_convarter(item.statistics.viewCount)} Views &bull;
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
