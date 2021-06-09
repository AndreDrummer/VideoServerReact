import React from "react";
import { useDispatch } from 'react-redux';
import { changeVideo } from '../store/videoSlice';
import ReactPlayer from "react-player";
import videoNames from "../database/filenames";

const VideoList = _ => {
    const dispatch = useDispatch();
    return (
        <aside>
            {
                videoNames.map((videoFilePath, index) => {
                    return <ul>
                        <li onClick={() => dispatch(changeVideo(index))}>
                            <div class="card" style={{ marginTop: "20px", width: "20rem" }}>
                                <ReactPlayer url={videoFilePath} width="100%" height="100%" controls={false} />

                                <div class="card-body" style={{ textAlign: "justify" }}>
                                    <h5 class="card-title">Nome do Vídeo</h5>
                                </div>
                            </div>
                        </li>
                    </ul>
                })
            }
        </aside>
    );
}

export default VideoList;