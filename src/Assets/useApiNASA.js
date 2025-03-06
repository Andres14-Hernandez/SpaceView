import { useState, useEffect } from 'react';

function useApiNASA(props={}){
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Destructuramos props con valores por defecto
    
    const {
        query = 'moon',
        mediaType = 'image',
        page = 1,
        pageSize = 30
    } = props;

    useEffect(() => {
        const fetchData = async () => {
            try {
                let apiUrl = `https://images-api.nasa.gov/search?q=${query}&media_type=${mediaType}&page=${page}&page_size=${pageSize}`;

                const response = await fetch(apiUrl);
                if(!response.ok) throw new Error('Error en la respuesta');
                
                const data = await response.json();
                
                const formattedItems = data.collection.items.map(item => ({
                    title: item.data[0]?.title || 'Sin título',
                    description: item.data[0]?.description || 'Descripción no disponible',
                    href: item.links?.[0]?.href || '',
                    date: item.data[0]?.date_created || 'Fecha desconocida',
                    nasaId: item.data[0]?.nasa_id || ''
                }));
                
                setItems(formattedItems);
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