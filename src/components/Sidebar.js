import styles from './Sidebar.module.css'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import {Icon} from '@material-ui/core'
import {useContext} from 'react';
import { SpotifyContext } from '../context';

function Sidebar() {
    const {state, actions} = useContext(SpotifyContext);

    return (
        <div className={styles.mainDiv}>
            <img className={styles.logo} src="https://cutt.ly/Vj9RMrN" alt="spotify_logo"/>
            <div className={styles.optionDiv}>
            <HomeOutlinedIcon fontSize="small" color="#000000"/>
              <h4>Home</h4>  
            </div>
            <div  className={styles.optionDiv}>
            <SearchOutlinedIcon fontSize="small" color="#000000"/>
              <h4>Search</h4>  
            </div>
            <div  className={styles.optionDiv}>
            <LibraryBooksIcon fontSize="small" color="#000000"/>
              <h4>Library</h4>  
            </div>
            <p><strong style={{color:"white"}}>PLAYLISTS</strong></p>
            <hr></hr>
            {state.playlist && state.playlist.items.map(item => (
                  <div  className={styles.optionDiv}>
                  <h4>{item.name}</h4>  
                </div>
            ))}

        </div>
    )
}

export default Sidebar
