import { createSlice } from "@reduxjs/toolkit";

export const videoSlice = createSlice({
    name: 'video',
    initialState: {
        videoBeingPlayed: 0,
    },
    reducers: {
        changeVideo: (state, action) => {
            console.log(`Payload ${action.payload}`)
            state.videoBeingPlayed = action.payload;
        }
    }
});

export const { changeVideo } = videoSlice.actions

export default videoSlice.reducer;