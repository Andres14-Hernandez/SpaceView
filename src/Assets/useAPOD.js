import { useState, useEffect } from "react";

function useAPOD() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch("https://api.nasa.gov/planetary/apod?api_key=jeMDXFr43KgQ3ubJr9CvCJl4wgdjMfyjrF20CUHA")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    return { data, loading, error };
}

export default useAPOD;
