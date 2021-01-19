import styles from './Login.module.css';
import {loginURL} from '../spotify/spotify' 


function Login() {
    return (
        <div className={styles.login}>
            <section className={styles.logo}>
                <div></div>
            </section>
            <section className={styles.button}>
                <a href={loginURL}>SIGN IN</a>
            </section>
        </div>
    )
}

export default Login
