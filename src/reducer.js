const initState = {
    user:null,
};

const SET_USER = "SET_USER";

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            }
    }
}

