import { useState, useEffect, useRef } from "react";

function useSpaceFlight(options = {}) {
  const {
    limit,
    search: initialSearch = "",
    offset: initialOffset = 0,
  } = options;

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [offset, setOffset] = useState(initialOffset);
  const [reloadId, setReloadId] = useState(0);

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
        if (limit != null) params.append("limit", String(limit));
        if (searchTerm) params.append("search", searchTerm);
        if (offset) params.append("offset", String(offset));
        const url = `https://api.spaceflightnewsapi.net/v4/articles?${params.toString()}`;
        const res = await fetch(url, { signal });
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const data = await res.json();

        setArticles(Array.isArray(data.results) ? data.results : []);
      } 
      catch (err) {
        if (err?.name === "AbortError") return;
        setError(err?.message || "Unknown error");
        setArticles([]);
      } 
      finally {
        setLoading(false);
      }
    };

    fetchArticles();

    return () => {
      controller.abort();
    };
  }, [limit, searchTerm, offset, reloadId]);

  const doSearch = (payload) => {
    if (typeof payload === "string") {
      setSearchTerm(payload);
    } 
    else if (payload && typeof payload === "object" && "query" in payload) {
      setSearchTerm(String(payload.query || ""));
    } 
    else {
      setSearchTerm("");
    }

    setOffset(0);
  };

  const refresh = () => {
    setReloadId((id) => id + 1);
  };

  const setNewOffset = (newOffset) => {
    setOffset(newOffset);
  };

  return { articles, loading, error, setArticles, doSearch, refresh, setNewOffset, };
}

export default useSpaceFlight;
