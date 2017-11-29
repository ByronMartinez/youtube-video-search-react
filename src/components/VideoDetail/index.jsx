import React , { Component } from "react";


const VideoDetail = (props) => {
    if(!props.video) {
        return <div>Loading video...</div>
    }
      
    const videoId = props.video.id.videoId;    
    const uri = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-items" src={uri}></iframe>
            </div>

            <div className="details">
                <div>{props.video.snippet.title}</div>
                <div>{props.video.snippet.description}</div>
            </div>
      </div>
    );
};

export default VideoDetail;