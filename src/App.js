import './App.css';
import {useEffect} from 'react'
import Login from './components/Login';
import { getToken } from './spotify/spotify';



function App() {
  useEffect(() => {
    let token = getToken()
  console.log("I HAV A TOKEN >>>> :point  ", token)
  })

  return (
    <div className="App">
        <Login />
    </div>
  );
}

export default App;
