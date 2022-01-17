import produce from 'immer';

const initialState = {
    candidates: [],
    token:null,
};

export default produce((state, action) => {
    switch (action.type) {
        case 'SET_CANDIDATES':
            state.candidates = action.payload
            break;
        case 'SET_TOKEN':
            state.token = action.payload
            break;
    }
}, initialState);