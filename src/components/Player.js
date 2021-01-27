import styles from './Player.module.css'
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import { Grid, Slider } from '@material-ui/core';
function Player() {
    return (
        <div className={styles.mainDiv}>
           <div className={styles.albumDetails}>
               <img src="https://ecsmedia.pl/c/sweetener-w-iext53183207.jpg" alt="albym_photo" />
               <div>
                   <h4>Sweetener</h4>
                   <p>Ariana Grande</p>
               </div>
           </div>
           <div className={styles.mainPlayer}>
               <ShuffleIcon fontSize="small"/>
               <SkipPreviousIcon fontSize="small"/>
               <PlayCircleOutlineIcon fontSize="large"/>
               <SkipNextIcon fontSize="small"/>
               <RepeatIcon fontSize="small"/>
           </div>
           <div className={styles.options}>
               <Grid container spacing={3}>
                    <Grid item >
                        <QueueMusicIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
               </Grid>
           </div>
        </div>
    )
}

export default Player
