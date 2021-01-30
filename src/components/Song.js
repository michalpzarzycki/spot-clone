import styles from './Song.module.css'
function Song({track}) {
    return (
        <div className={styles.mainDiv}>
            <img src={track.track.album.images[0].url}/>
            <div className={styles.songInfo}>
                <h1>{track.track.album.name}</h1>
                <p>{track.track.album.artists[0].name}</p>
            </div>
        </div>
    )
}

export default Song
