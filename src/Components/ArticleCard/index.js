import styles from './articleCard.module.css';

function ArticleCard({ article }) {
  
  const { title, summary, image_url, url, published_at, news_site } = article;

  return (
    <div className={styles.card}>

      <a className={styles.link} href={url} target="_blank" rel="noopener noreferrer" aria-label={`Open article ${title}`}>
        {image_url && (
          <div className={styles.media}>
            <img className={styles.image} src={image_url} alt={title} loading="lazy"/>
          </div>
        )}

        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.summary}>{summary}</p>
          <div className={styles.meta}>
            <span className={styles.source}>{news_site}</span>
            <time className={styles.date} dateTime={published_at}>
              {new Date(published_at).toLocaleDateString()}
            </time>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ArticleCard;