import React, { useReducer } from "react";
import ReactPlayer from "react-player";
import videoNames from "../database/filenames";
import { initialState, reducer } from '../store';

const VideoPlayer = _ => {
    const [state] = useReducer(reducer, initialState);
    return (
        <div class="card" style={{ marginTop: "50px", marginLeft: "100px", width: "40rem" }}>
            <ReactPlayer url={videoNames[state.videoBeingPlayed]} width="100%" height="100%" controls={true} />

            <div class="card-body" style={{ textAlign: "justify" }}>
                <h5 class="card-title">Nome do Vídeo</h5>
            </div>
        </div>
    );
}

export default VideoPlayer;