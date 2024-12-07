const getAllArtigos = async () => {
  try {
    const response = await fetch("https://sth-back-dev.onrender.com/api/artigo", {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ola mundo', 
        'Content-Type': 'application/json', 
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar os artigos");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro no serviço de artigos:", error);
    throw error;
  }
};

const getArtigoDetalhes = async (artigoId) => {
  try {
    const response = await fetch(
      `https://sth-back-dev.onrender.com/api/artigo/${artigoId}`,
      {
        method: "GET",
        headers: {
          'Authorization': 'Bearer ola mundo', 
          'Content-Type': 'application/json', 
        },
      }
    );

    if (!response.ok) {
      throw new Error("Erro ao buscar os dados do artigo");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro no serviço de artigos:", error);
    throw error;
  }
};

// Busca artigos por título ou id do autor
const searchArtigos = async (searchTerm, searchBy = 'titulo') => {
  try {
    let url = `https://sth-back-dev.onrender.com/api/artigo/`;
    if (searchBy === 'titulo') {
      url += `titulo?titulo=${encodeURIComponent(searchTerm)}`;
    } else if (searchBy === 'autor') {
      url += `autor/${encodeURIComponent(searchTerm)}}`;  //alterar para autor?nome=${encodeURIComponent(searchTerm)} quando modificar o back
    }

    const response = await fetch(url, {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ola mundo', 
        'Content-Type': 'application/json', 
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar os artigos");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro no serviço de artigos:", error);
    throw error;
  }
};

export default {
  getAllArtigos,
  getArtigoDetalhes,
  searchArtigos,
};
