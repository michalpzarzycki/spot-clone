import styles from './Banner.module.css'
import {useContext} from 'react';
import {SpotifyContext} from '../context'
import SongsList from './SongsList';
function Banner() {
    const {state} = useContext(SpotifyContext)
    return (
        <div>
        <div className={styles.mainDiv}>
            <img src={state?.weeklyDisc?.images[0]?.url}  alt="banner_img"/>
            <div className={styles.bannerDetails}>
                <h1>PLAYLIST</h1>
                <h1>DISCOVER WEEKLY</h1>
                <p>{state?.weeklyDisc?.description}</p>
            </div>
        </div>
        <SongsList />
        </div>
    )
}

export default Banner
