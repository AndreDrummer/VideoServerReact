import React, { useReducer } from "react";
import ReactPlayer from "react-player";
import { initialState, reducer } from '../store';
import { changeVideo } from '../store/actions';
import videoNames from "../database/filenames";

const VideoList = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <aside>
            {
                videoNames.map((videoFilePath, index) => {
                    return <ul>
                        <li onClick={() => changeVideo(dispatch, index)}>
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