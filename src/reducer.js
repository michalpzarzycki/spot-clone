const initialState = {
    user:null,
    token:null,
    playlist:null,
};

const SET_USER = "SET_USER";

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.payload,
            }
        case "SET_TOKEN":
            return {
                ...state,
                token:action.payload
            }
        case "SET_PLAYLIST":
            return {
                ...state,
                playlist: action.payload
            }
        case "SET_WEEKLYDISC":
            return {
                ...state,
                weeklyDisc:action.payload
            }
    }
}

export {reducer, SET_USER, initialState}
