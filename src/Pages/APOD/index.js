import styles from './APOD.module.css';
import useFetch from '../../Assets/useAPOD'

function APOD(){

    const { data, loading, error } = useFetch()

    return(
        <main className={styles.APOD}>
            <h1>Astronomy Picture of the Day</h1>
            <p>The universe hide secrets than only reveal who take a new look</p>

            <section className={styles.container}>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}

                <figure className={styles.imgContainer}>
                    <img src={data.url} alt={data.title}/>
                </figure>

                <article className={styles.textContainer}>
                    <h2>{data.title}</h2>
                    <p> {data.explanation} </p>
                </article>
                </section>
        </main>
    )
} 

export default APOD