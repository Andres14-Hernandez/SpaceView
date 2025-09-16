import useSpaceFlight from '../../Assets/useSpaceFlight';
import ArticleCard from '../ArticleCard'
import styles from './HomeArticles.module.css'

function SpaceFlight(){

    const { articles, loading, error } = useSpaceFlight({ limit: 5 });

    if (loading) return <div>Loading articles...</div>;
    if (error) return <div style={{ color: "red" }}>Error: {error}</div>;
    if (!articles.length) return <div>No articles found.</div>;

    return(
        <section className={styles.articles_section}>
            <h1>New Articles</h1>

            <div className={styles.container} >
                {articles.map((a) => (
                <ArticleCard key={a.id} article={a} />))}
            </div>
            
        </section>
    )

}

export default SpaceFlight;