import styles from './Card.module.css'
import { useState } from 'react';

function Modal({ title, description, imageUrl, mediaType, videoFiles, onClose }){
  // URL encode cada URL de video para manejar los espacios
  const encodedVideoFiles = Array.isArray(videoFiles) 
    ? videoFiles.map(url => encodeURI(url)) 
    : [];
  
  console.log("Videos codificados:", encodedVideoFiles);
  
  // Función para abrir video en nueva pestaña
  const openVideoInNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        {mediaType === 'video' && encodedVideoFiles.length > 0 ? (
          <div className={styles.videoBox}>
            {/* Mostrar la miniatura con un botón de reproducción */}
            <div className={styles.videoThumbnail}>
              <img src={imageUrl} alt={title} className={styles.modalImage} />
              <button 
                className={styles.playButton}
                onClick={() => openVideoInNewTab(encodedVideoFiles[0])}
              >
                Ver Video
              </button>
            </div>
            
            {/* Lista de enlaces alternativos si hay múltiples videos */}
            {encodedVideoFiles.length > 1 && (
              <div className={styles.videoLinks}>
                <p>Enlaces alternativos:</p>
                <ul>
                  {encodedVideoFiles.map((url, index) => (
                    <li key={index}>
                      <a 
                        href={url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Formato {index + 1}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          imageUrl && <img src={imageUrl} alt={title} className={styles.modalImage} />
        )}

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

function ListItem({ title, description, imageUrl, mediaType, videoFiles }){
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
        {mediaType === 'video' && <div className={styles.videoIndicator}>▶</div>}
      </li>

      {isModalOpen && (
        <Modal
          title={title}
          description={description}
          imageUrl={imageUrl}
          mediaType={mediaType}
          videoFiles={videoFiles || []}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default ListItem