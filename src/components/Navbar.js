import { Avatar } from '@material-ui/core';
import styles from './Navbar.module.css';
import {useContext} from "react"
import {SpotifyContext} from '../context'
function Navbar() {
    const {state, actions} = useContext(SpotifyContext);

    return (
        <div className={styles.mainDiv}>
            <div className={styles.leftNavbar}>LEDT</div>            
            <div className={styles.rightNavbar}>
                <Avatar src="https://ecsmedia.pl/c/sweetener-w-iext53183207.jpg" alt="user_img"/>
                <div>{state?.user?.display_name}</div>
            </div>
        </div>
    )
}

export default Navbar
