import React, { useEffect, useState } from "react";
import "./PlayVideo.css";

import jeck from "../../assets/jack.png";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";

import user_profile from "../../assets/user_profile.jpg";
import { API_KEY, value_convarter } from "../../data";
import moment from "moment/moment";
import { useParams } from "react-router-dom";
const PlayVideo = () => {

  const {VideoId}= useParams()

  // fetching data from API
  const [apidata, setApidata] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setcommentData] = useState([]);

  const Fetching_data_from_Api = async () => {
    const vid_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${VideoId}&key=${API_KEY}`;
    await fetch(vid_URL)
      .then((res) => res.json())
      .then((Data) => setApidata(Data.items[0]))
      .catch((error) => console.error("Error fetching data:", error));
    // console.log(apidata,"jjjjjjjjj");
  };

  // Channals Api Function.....
  const Fetching_Channel_Data = async () => {
    const channel_Api_Url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelId}&key=${API_KEY} `;
    await fetch(channel_Api_Url)
      .then((res) => res.json())  
      .then((Data) => setChannelData(Data.items[0]))
      .catch((error) => console.error("Error fetching data:", error));
    // console.log(channelData,"ccccccc");

  // Comment_Api Function.....
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${VideoId}&key=${API_KEY}`;
    await fetch(comment_url)
      .then((res) => res.json())
      .then((Data) => setcommentData(Data.items))
      .catch((error) => console.error("Error ", error));
  };

  useEffect(() => {
    Fetching_data_from_Api();
  }, [VideoId]);

 

  useEffect(() => {
    // console.log("apidata:", apidata);
    if (apidata && apidata.snippet && apidata.snippet.channelId) {
      Fetching_Channel_Data();
    }
  }, [apidata]);

  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${VideoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3>{apidata ? apidata.snippet.title : "Title Here"}</h3>
      <div className="play-video-info">
        <p>
          {apidata ? value_convarter(apidata.statistics.viewCount) : "16k"}
          Views &bull;
          {apidata
            ? moment(apidata.snippet.publishedAt).fromNow()
            : "3 days ago"}
        </p>
        <div>
          <span>
            <img src={like} alt="" />
            {apidata ? value_convarter(apidata.statistics.likeCount) : 156}
          </span>
          <span>
            <img src={dislike} alt="" />4
            {/* {apidata?value_convarter(apidata.statistics.dislikeCount):45} */}
          </span>
          <span>
            <img src={share} alt="" />
            share
          </span>
          <span>
            <img src={save} alt="" />
            save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : jeck}
          alt=""
        />
        {/* channelData ? channelData.snippet.thumbnails.defualt.url : */}
        <div>
          <p>{apidata ? apidata.snippet.channelTitle : "Channel Name"}</p>
          <span>
            {channelData
              ? value_convarter(channelData.statistics.subscriberCount)
              : 8 }
            Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>
          {apidata
            ? apidata.snippet.description.slice(0, 240)
            : "Description Here"}
        </p>
        <hr />
        <h4>
          {apidata ? value_convarter(apidata.statistics.commentCount) : 165} 
           Comment
        </h4>

        {commentData.map((item, index) => {

          return (
            <div key={index} className="comment">
              <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
              <div>
                <h3>
                  {item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span>
                </h3>
                <p>
                  {item.snippet.topLevelComment.snippet.textDisplay.slice(0,200)}
                </p>
                <div className="comment-action">
                  <img src={like} alt="" />
                  <span>{value_convarter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                  <img src={dislike} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
