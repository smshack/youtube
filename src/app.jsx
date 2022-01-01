import React, { Component,useState ,useEffect } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

const App = (props) => {
  const [videos, setVideos] = useState([]);
  useEffect(()=>{
    const requestOptions ={
      method:'GET',
      redirect:'follow'
    };
    fetch(
      'https://www.googleapis.com/youtube/v3/search?q=bts&part=snippet&maxResults=25&key=AIzaSyCkgJsSX6Ii4TUZJzSDM6l7rrrOCB1cH5U',
      requestOptions
    )
    .then(response => response.json())
    .then(result => setVideos(result.items))
    .catch(error => console.log(error,'error'))
  },[])
  return (
    <>
    <VideoList videos={videos}/>
    </>
  )
};

export default App;
