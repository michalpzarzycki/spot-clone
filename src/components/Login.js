import styles from './Login.module.css'


function Login() {
    return (
        <div className={styles.login}>
            <section className={styles.logo}>
                <div></div>
            </section>
            <section className={styles.button}>
                <a>SIGN IN</a>
            </section>
        </div>
    )
}

export default Login
