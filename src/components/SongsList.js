import Song from './Song'
import styles from './SongsList.module.css'
import {useContext} from 'react';
import {SpotifyContext} from '../context'

function SongsList() {
    const {state} = useContext(SpotifyContext)

    return (
        <div>
            {state?.weeklyDisc?.tracks?.items?.map(item => {
                return <Song track={item}/>

            })}
        </div>
    )
}

export default SongsList
