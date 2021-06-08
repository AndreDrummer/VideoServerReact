export function videoReducer(actualState, action) {
    switch (action.type) {
        case 'changeVideo':
            console.log('HUEHUEHUE');
            return { ...actualState, videoBeingPlayed: action.payload }
    }
}