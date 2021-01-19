import scopes from './scopes';

const joinedScopes = scopes.join('%20')
const redirectURI = 'http://localhost:3000/'
const loginURL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=token&show_dialogue=true&scope=${joinedScopes}&redirect_uri=${redirectURI}`

const getToken = () => {
    let hash = window.location.hash.substring(1);
    let result = hash.split('&').reduce((result, item) => {
        let parts  = item.split('=');
        result[parts[0]] = parts[1];
        return result
    }, {})
    return result;
}

export {loginURL, getToken};

