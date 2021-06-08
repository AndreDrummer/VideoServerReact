import { videoReducer } from './app_reducer';

export function reducer(state, action) {
    let newState = videoReducer(state, action);
    return newState;
}