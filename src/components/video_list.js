import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videos = props.videos; //Value passed down from parent component index to child component VideoList is passed in props parameter
    const videoItems = videos.map((video) => { //Map is a javascript function on arrays that evaluates every item in the array - basically a for loop
        return <VideoListItem 
            // onVideoSelect is passed to videoList from the index component
            onVideoSelect = {props.onVideoSelect}
            key={video.etag}
            video={video} /> //For each video item in videoList array, we need to make a jsx tag in the array 
        //Once this map function is done array will look something like [<VideoListItem video=1/>, <VideoListItem video=2/>, <VideoListItem video=3/>...]
    })
    return (
        <ul className="col-md-4 list-group">
            {/* REACT is very smart - even though we aren't doing any loop, ngFor or ng-repeat here, since we are passing an array into a ul, it will 
                take each item in the array and display it as it's own li*/}
            {videoItems}
        </ul>
    )

}

export default VideoList;