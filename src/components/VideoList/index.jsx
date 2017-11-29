import React, { Component } from "react";
import VideoListItem from "../VideoListItem";

const VideoList = (props) => {

    const items = props.videos.map(video => {
        return <VideoListItem 
            onClickVideo={props.onSelectVideo} 
            key={video.etag}
            video={video}
            />
    });

    return (
        <ul className="col-md-4 list-group">
            {items}
        </ul>
    );
}

export default VideoList;