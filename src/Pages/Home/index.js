import styles from './Home.module.css'
import useFetch from '../../Assets/useFetch'


function Home(){
    const apiKey = 'jeMDXFr43KgQ3ubJr9CvCJl4wgdjMfyjrF20CUHA'
    const { data, loading, error } = useFetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)

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

