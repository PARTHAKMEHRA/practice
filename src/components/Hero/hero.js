import styles from './hero.module.css';
import song from './song.jpg'

export default function Hero(){
    return (
        <>
          <div className={styles.hero}>
            <div className={styles.content}>
                <h1>Be There</h1>
                <p>Deliverbrilliant messages in the moments that truly define your brand.</p>
                <button className={styles.btn}>See How</button>
            </div>
            <div className={styles.image}>
                <img src={song} alt="image"/>
            </div>
          </div>
        </>
    )
}