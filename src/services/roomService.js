import axios from 'axios';

const BASE_URL = 'https://sth-front-dev.vercel.app';

export const getRooms = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/rooms`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar rooms:', error);
    throw error;
  }
};
