import styles from './Body.module.css'
import Navbar from './Navbar'
import Banner from './Banner'
function Body() {
    return (
        <div className={styles.mainDiv}>
            <Navbar />
            <Banner />
            
        </div>
    )
}

export default Body
