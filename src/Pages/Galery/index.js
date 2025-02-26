import styles from './Images.module.css'
import { useState, useEffect } from "react";
import { ApiNASA } from "../../Assets/useApiNASA";
import Form from '../../Components/Form'


function Galery() {
    
    const [images, setImages] = useState([]);

    useEffect(() => {
        ApiNASA("mars").then(setImages);
      }, []);

    const [results, setResults] = useState([]);

    const handleSearch = async (query, mediaType) => {
        if (!query) return;
        const fetchedResults = await ApiNASA(query, mediaType);
        setResults(fetchedResults);
      };

    useEffect(() => {
      handleSearch("Earth", "image");
    }, []);


    return(
        <section>
            <h1 className={styles.title}>Images</h1>
                <Form onSearch={handleSearch} />

            <div  className={styles.galery}>
              {results.length > 0 ? (
                results.map((item, index) => (
                  <div key={index}>
                    {item.links ? (
                      <img src={item.links[0].href} alt={item.data[0].title} width="200px" />
                    ) : (
                      <video width="200px" controls>
                        <source src={item.href} type="video/mp4" />
                        This bowser does not support the video tag.
                      </video>
                    )}
                  </div>
                ))
              ) : (
                <p>Not results</p>
              )}
            </div>
        </section>
    )
}

export default Galery