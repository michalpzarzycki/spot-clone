const SpotifyContext = React.createContext();

const SpotifyProvider = (props) => {
    const [spotifyState, dispatch] = React.useReducer(reducer, initialState);

    const actions = {
        setUser: (user) => {
            if(user) {
                dispatch({type: SET_USER, payload: user})
            }
        }
    }

    return  <SpotifyContext.Provider 
                    value={{
                        state: spotifyState,
                        action: actions,
                    }}>
                {props.children}
            </SpotifyContext.Provider>
}

export {SpotifyProvider, SpotifyContext}