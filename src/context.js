import React from 'react';
import {reducer, SET_USER, initialState} from './reducer'
const SpotifyContext = React.createContext();


const SpotifyProvider = (props) => {
    const [spotifyState, dispatch] = React.useReducer(reducer, initialState);

    const actions = {
        setUser: (user) => {
            if(user) {
                dispatch({type: "SET_USER", payload: user})
            }
        },
        setToken: (token) => {
            if(token) {
                dispatch({type:"SET_TOKEN", payload: token})
            }
        },
        setPlaylist: (playlist) => {
            if(playlist) {
                dispatch({type:"SET_PLAYLIST", payload: playlist})
            }
        }
    }

    return  <SpotifyContext.Provider 
                    value={{
                        state: spotifyState,
                        actions: actions,
                    }}>
                {props.children}
            </SpotifyContext.Provider>
}

export {SpotifyProvider, SpotifyContext}