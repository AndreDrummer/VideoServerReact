import React from "react";
import { useDispatch } from 'react-redux';
import { changeVideo } from '../store/videoSlice';
import ReactPlayer from "react-player";
import videoNames from "../database/filenames";

const VideoList = _ => {
    const dispatch = useDispatch();
    return (
        <aside style={{ display: "inline-block", marginTop: "90px" }}>
            {
                videoNames.map((video, index) => {
                    return <ul>
                        <li onClick={() => dispatch(changeVideo(index))}>
                            <div class="card" style={{ width: "20rem", height: "15rem", backgroundColor: "#008000" }}>
                                <ReactPlayer url={video["file"]} width="100%" height="80%" controls={false} />

                                <div class="card-body" style={{ color: "#fff", textAlign: "justify" }}>
                                    <h5 class="card-title">{video["filename"]}</h5>
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