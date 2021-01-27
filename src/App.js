import './App.css';
import {useEffect, useState, useContext} from 'react'
import Login from './components/Login';
import { getToken } from './spotify/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { SpotifyContext } from './context';
import MainPage from './components/MainPage';

const spotify = new SpotifyWebApi();


function App() {
  const [token, setToken] = useState(null);
  const {state, actions} = useContext(SpotifyContext);

  useEffect(() => {
    let _token = getToken()
  if(_token.access_token) {
    actions.setToken(_token.access_token)

    setToken(_token)
    spotify.setAccessToken(_token.access_token);
    spotify.getMe().then(user => {
      actions.setUser(user)
    }).catch(err => console.log("ERR", err))


    spotify.getUserPlaylists().then(playlist => {
     actions.setPlaylist(playlist)
    })
  }
}, [])

  return (
    <div className="App">
       {token ? <MainPage /> : <Login />}
    </div>
  );
}

export default App;
