import { useState, useEffect } from 'react';

const useApiNASA = (props = {}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const {
        query = '',
        mediaType = 'image',
        page = 1,
        pageSize = 51
    } = props;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const apiUrl = `https://images-api.nasa.gov/search?q=${query}&media_type=image&page=${page}&page_size=${pageSize}`;
                const response = await fetch(apiUrl);
                
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                
                const data = await response.json();

                const processedItems = await Promise.all(
                    data.collection.items.map(async (item) => {
                        const baseData = {
                            title: item.data[0]?.title || 'Sin título',
                            description: item.data[0]?.description || 'Description not aviailable',
                            mediaUrl: item.links?.[0]?.href || '',
                            mediaType: item.data[0]?.media_type || 'image',
                            nasaId: item.data[0]?.nasa_id || '',
                        };
                        return baseData;
                    })
                );

                setItems(processedItems);
                setLoading(false);
                
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [query, mediaType, page, pageSize]);

    return { items, loading, error };
};

export default useApiNASA;