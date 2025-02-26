import styles from './Form.module.css'
import { useState } from "react";



function Form( {onSearch} ){

    const [query, setQuery] = useState(""); 
    const [mediaType, setMediaType] = useState("image"); 
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(query, mediaType);
    };
  
    return (
      <div className={styles.fromContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Explore the universe..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <select value={mediaType} onChange={(e) => setMediaType(e.target.value)} className={styles.select} >
            <option value="image">Images</option>
            <option value="video">Videos</option>
          </select>
      
          <button type="submit" className={styles.button}>
            Search
          </button>
        </form>
      </div>
    );

}

export default Form