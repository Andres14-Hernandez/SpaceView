import styles from './Form.module.css'



function Form( {onSearch} ){

  
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    return (
      <div className={styles.fromContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Explore the universe..."
            value={"zcd"}
            onChange={"dffsa"}
          />

          <select value={"zff"} onChange={"asa"} className={styles.select} >
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