import styles from './articles.module.css'
import Form from '../../Components/Form';
import ArticleCard from '../../Components/ArticleCard';
import useSpaceFlight from '../../Assets/useSpaceFlight';


function Articles(){

    const { articles, loading, error, doSearch } = useSpaceFlight({ limit: 30 });

    if (loading) return <div>Loading articles...</div>;
    if (error) return <div style={{ color: "red" }}>Error: {error}</div>;
    if (!articles.length) return <div>No articles found.</div>;

    return(
        <main>
            <Form onSearch={doSearch} />

            <section className={styles.container} >
                {loading && <div>Loading articles...</div>}
                {error && <div style={{ color: "red" }}>Error: {error}</div>}
                {!loading && !error && articles.length === 0 && (
                <div>No articles found.</div>
                )}

                {articles.map((a) => (
                <ArticleCard key={a.id} article={a} />))}

            </section>
        </main>
    )
}

export default Articles;