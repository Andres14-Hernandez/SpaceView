import styles from './Form.module.css'
import { useState } from 'react';



function Form( {onSearch} ){

  const [query, setQuery] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();

      if (/[^a-zA-Z0-9\s]/.test(query)) {
        alert('Special characters are not allowed');
        return;
      }
      onSearch({ query });
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
      
          <button type="submit" className={styles.button}>
            Search
          </button>
        </form>
      </div>
    );
}

export default Form