import useSpaceFlight from '../../Assets/useSpaceFlight';
import ArticleCard from '../../Components/ArticleCard'

function SpaceFlight(limit =10){

    const { articles, loading, error } = useSpaceFlight({ limit });

    if (loading) return <div>Loading articles...</div>;
    if (error) return <div style={{ color: "red" }}>Error: {error}</div>;
    if (!articles.length) return <div>No articles found.</div>;

    return(
        <section>
            <h1>New Articles</h1>

            <div className="articles-grid" style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",gap: "1rem"}}>
                {articles.map((a) => (
                <ArticleCard key={a.id} article={a} />))}
            </div>
            
        </section>
    )

}

export default SpaceFlight;