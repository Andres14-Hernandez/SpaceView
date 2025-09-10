import styles from './Home.module.css'
import SpaceFlight from '../../Pages/SpaceFlight'


function Home(){
    return(
        <main>
            <section className={styles.hero}>
                <div className={styles.hero_content}>
                    <h1>Discover the Universe, One photo at a Time </h1>
                    <p>
                        Unveil breathtaking photos and hidden stories from the cosmos. Search, explore, and let the universe surprise you.
                    </p>
                </div>                
            </section>

            <SpaceFlight/>

        </main>
    )
} 

export default Home

