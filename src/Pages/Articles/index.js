import styles from './articles.module.css'
import Form from '../../Components/Form';
import ArticleCard from '../../Components/ArticleCard';
import useSpaceFlight from '../../Assets/useSpaceFlight';


function Articles(){

    const { articles, loading, error, doSearch } = useSpaceFlight({ limit: 30 });

    return(
        <main className={styles.main_container}>

            <h1>Articles</h1>
            <p>Explore the latest news from space agencies around the world and stay updated on their discoveries, missions, and breakthroughs.</p>

            <Form onSearch={doSearch} placeholder={'Search among the stars of knowledge...'} />

            <section>
                {loading && <div>Loading articles...</div>}
                {error && <div style={{ color: "red" }}>Error: {error}</div>}
                {!loading && !error && articles.length === 0 && (
                <div>No articles found.</div>
                )}

                {articles.length > 0 && (
                  <div className={styles.articlesGrid}>
                    {articles.map((a) => (
                      <ArticleCard key={a.id} article={a} />
                    ))}
                  </div>
                )}

            </section>
        </main>
    )
}

export default Articles;