


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';

const RenderVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
          q: 'music',
          part: 'snippet,id',
          regionCode: 'US',
          maxResults: '50',
          order: 'date',
        },
        headers: {
          'X-RapidAPI-Key': 'a3ed46aa82msh4279d5f36473c8fp1300f2jsn2612b7b8ae0e',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        const datas = response.data.items;
        console.log(datas);
        setVideos(datas);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="videosCard">
      {videos.map((item) => (
        <div key={item.id}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${item.id.videoId}`}
            controls
            width="100%"
            height="auto"
          />
          <h3>{item.snippet.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default RenderVideos;
