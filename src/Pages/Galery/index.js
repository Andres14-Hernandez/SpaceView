import styles from './Images.module.css'
import Form from '../../Components/Form'
import Card from '../../Components/Card';
import useApiNASA  from "../../Assets/useApiNASA.js";


function Galery(props) {

    const { items, loading, error } = useApiNASA(props);

    if(loading) return <div className="loading">Cargando datos de la NASA...</div>;
    if(error) return <div className="error"> Error: {error}</div>;



    return(
        <section>
            <h1 className={styles.title}>Images</h1>
                <Form />

            <ul className={styles.galery}>
                {items.map((item) => (
                    <Card
                        key={item.nasaId}
                        title={item.title}
                        description={item.description}
                        imageUrl={item.href}
                        date={item.date}
                    />
                ))}
            </ul>
        </section>
    )
}

export default Galery