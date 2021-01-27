import styles from './MainPage.module.css'
import Sidebar from './Sidebar'
import Body from './Body'
import Player from './Player'

function MainPage() {
    return (
        <div className={styles.mainDiv}>
            <Sidebar />
            <Body />
            <Player />
        </div>
    )
}

export default MainPage
