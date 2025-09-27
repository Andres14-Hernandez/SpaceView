import styles from './Card.module.css'
import { useState } from 'react';


function Modal({ title, description, imageUrl, onClose }){
  return (
    <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        <div className={styles.modalContent}>
            <h2 className={styles.modalTitle}>{title}</h2>
          <div className={styles.modalImage}>
            <img src={imageUrl} alt={title} className={styles.modalImage} />
          </div>

          <div className={styles.modalText}>
            {description && (
              <p>{description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


function Card({ title, description, imageUrl }){

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div>
      <div className={styles.card} onClick={() => setIsModalOpen(true)}role="button" tabIndex={0}>
          <div className={styles.imageWrapper}>
            <img src={imageUrl} alt={title} className={styles.cardImage} />
         </div>
        <h3>{title}</h3>
      </div>

      {isModalOpen && (
        <Modal
          title={title}
          description={description}
          imageUrl={imageUrl}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};


export default Card