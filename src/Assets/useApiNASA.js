import { useState, useEffect } from 'react';

const useApiNASA = (props = {}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const {
        query = '',
        mediaType = 'image',
        page = 1,
        pageSize = 30
    } = props;

    // Función para obtener archivos de video
    const getVideoFiles = async (collectionUrl) => {
        try {
          const response = await fetch(collectionUrl);
          const data = await response.json();

          return Array.isArray(data) 
            ? data.filter(link => link.includes('.mp4'))
            : [];
        } catch (error) {
          console.error("Error fetching video links:", error);
          return [];
        }
      };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const apiUrl = `https://images-api.nasa.gov/search?q=${query}&media_type=${mediaType}&page=${page}&page_size=${pageSize}`;
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
                            videoFiles: []
                        };

                        // Obtener enlaces de video si es necesario
                        if (baseData.mediaType === 'video' && item.href) {
                            baseData.videoFiles = await getVideoFiles(item.href);
                        }

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