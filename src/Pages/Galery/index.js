import styles from './Galery.module.css'
import Form from '../../Components/Form'
import Card from '../../Components/Card';
import useApiNASA  from "../../Assets/useApiNASA.js";
import { useState } from 'react';


function Galery() {

    const [searchParams, setSearchParams] = useState({ query: '', mediaType: 'image' });
    const { items, loading, error } = useApiNASA(searchParams);
  
    const handleSearch = (params) => {
      setSearchParams(params);
    };

    if(loading) return <div className="loading">Loading NASA data...</div>;
    if(error) return <div className="error"> Error: {error}</div>;

    return(
        <section>
            <h1 className={styles.title}>Images</h1>
                <Form onSearch={handleSearch} />

            <ul className={styles.galery}>
                {items.map((item) => (
                    <Card
                        key={item.nasaId}
                        title={item.title}
                        description={item.description}
                        imageUrl={item.mediaUrl}
                        videoFiles={item.videoFiles || []}
                    />
                ))}
            </ul>
        </section>
    )
}

export default Galery