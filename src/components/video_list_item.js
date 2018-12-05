import React from 'react';
//This component is basically each video li that is displayed to the user that the user can play - not much logic here just a lot of html

//Functional Component - whenever no state is needed on the component. Functional components are super lightweight and super fast
const VideoListItem = (props) => {
    const video = props.video;
    const onVideoSelect = props.onVideoSelect; //passed from the video list component
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
     <li onClick={() => onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={imageUrl} />
            </div>

            <div className="media-body">
                <div className="media-heading">
                    {video.snippet.title}
                </div>
            </div>
        </div>     
     </li>
    );
};

export default VideoListItem;