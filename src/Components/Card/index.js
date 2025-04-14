import styles from './Card.module.css'
import { useState } from 'react';


function Modal({ title, description, imageUrl, onClose }){
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt={title} className={styles.modalImage} />
        <div className={styles.modalText}>
          <h2 className={styles.modalTitle}>{title}</h2>
          <p className={styles.modalDescription}>{description}</p>
        </div>

        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
      </div>
  </div>
  );
};


function ListItem({ title, description, imageUrl }){

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <li 
        className={styles.card} 
        onClick={() => setIsModalOpen(true)}
        role="button"
        tabIndex={0}
      >
        <img src={imageUrl} alt={title} className={styles.cardImage} />
      </li>

      {isModalOpen && (
        <Modal
          title={title}
          description={description}
          imageUrl={imageUrl}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};


export default ListItem