
export async function ApiNASA(query, mediaType = "image") {
    try {
      const response = await fetch(`https://images-api.nasa.gov/search?q=${query}&media_type=${mediaType}`);
      if (!response.ok) throw new Error("Error al obtener los datos");
      const data = await response.json();
      return data.collection.items;
    } catch (error) {
      console.error("Error en la API:", error);
      return [];
    }
  }
  