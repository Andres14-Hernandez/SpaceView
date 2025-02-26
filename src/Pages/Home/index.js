import styles from './Home.module.css'
import useFetch from '../../Assets/useAPOD'


function Home(){

    const { data, loading, error } = useFetch()

    return(
        <section>
            <h1 className={styles.title}>Photo of the day</h1>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            <div className={styles.APODcontainer}>
                <img src={data.url} alt={data.title}/>
                <p> {data.explanation} </p>
            </div>
        </section>
    )
} 

export default Home

