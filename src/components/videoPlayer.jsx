import React from "react";
import ReactPlayer from "react-player";
import videoNames from "../database/filenames";
import { useSelector } from 'react-redux';

const VideoPlayer = _ => {
    const videoBeingPlayed = useSelector((state) => state.video.videoBeingPlayed)
    return (
        <div class="card" style={{ marginTop: "50px", marginLeft: "100px", width: "40rem", height: "26rem", backgroundColor: "#008000" }}>
            <ReactPlayer url={videoNames[videoBeingPlayed]["file"]} controls={true} />

            <div class="card-body" style={{ color: "#fff", textAlign: "justify" }}>
                <h5 class="card-title">{videoNames[videoBeingPlayed]["filename"]}</h5>
            </div>
        </div>
    );
}

export default VideoPlayer;