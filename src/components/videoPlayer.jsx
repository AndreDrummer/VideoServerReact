import React from "react";
import ReactPlayer from "react-player";
import videoNames from "../database/filenames";
import { useSelector } from 'react-redux';

const VideoPlayer = _ => {
    const videoBeingPlayed = useSelector((state) => state.video.videoBeingPlayed)
    return (
        <div class="card" style={{ marginTop: "50px", marginLeft: "100px", width: "40rem" }}>
            <ReactPlayer url={videoNames[videoBeingPlayed]} width="100%" height="100%" controls={true} />

            <div class="card-body" style={{ textAlign: "justify" }}>
                <h5 class="card-title">Nome do Vídeo </h5>
            </div>
        </div>
    );
}

export default VideoPlayer;