import styles from './Gallery.module.css'
import Form from '../../Components/Form/index.js'
import Card from '../../Components/Card/index.js';
import useApiNASA  from "../../Assets/useApiNASA.js";
import { useState } from 'react';


function Gallery() {

    const [searchParams, setSearchParams] = useState({ query: '' });
    const { items, loading, error } = useApiNASA(searchParams);
  
    const handleSearch = (params) => {
      setSearchParams(params);
    };

    if(loading) return <div className="loading">Loading NASA data...</div>;
    if(error) return <div className="error"> Error: {error}</div>;

    return(
        <main className={styles.gallery}>
            <h1>Gallery</h1>
            <p>
                The universe holds secrets in every corner… simple words can open windows to distant galaxies, 
                hidden nebulae, or worlds yet to be discovered. Let your curiosity guide you and watch as space 
                reveals what has been waiting to be found.
            </p>

            <Form onSearch={handleSearch} placeholder={'Explore the universe...'}/>

            <ul className={styles.galleryContainer}>
                {items.map((item) => (
                    <Card
                        key={item.nasaId}
                        title={item.title}
                        description={item.description}
                        imageUrl={item.mediaUrl}
                    />
                ))}
            </ul>
        </main>
    )
}

export default Gallery