import { useState, useEffect, useRef } from "react";

function useSpaceFlight(options = {}) {
  const { limit, search = "", offset = 0 } = options;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const controllerRef = useRef(null);

  useEffect(() => {

    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    const controller = new AbortController();
    controllerRef.current = controller;
    const signal = controller.signal;

    const fetchArticles = async () => {
      setLoading(true);
      setError(null);

      try {
        const params = new URLSearchParams();
        params.append("limit", String(limit));
        if (search) params.append("search", search);
        if (offset) params.append("offset", String(offset));

        const url = `https://api.spaceflightnewsapi.net/v4/articles?${params.toString()}`;

        const res = await fetch(url, { signal });
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const data = await res.json();

        setArticles(Array.isArray(data.results) ? data.results : []);
      } catch (err) {
        if (err.name === "AbortError") {
          return;
        }
        setError(err.message || "Unknown error");
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();


    return () => {
      controller.abort();
    };

  }, [limit, search, offset]);

  const refresh = () => {
    return { setArticles };
  };

  return { articles, loading, error, setArticles, refresh };
}



export default useSpaceFlight;