import axios from 'axios';

const API_URL = 'https://homologacao3.azapfy.com.br/api/ps/metahumans';

export const getHeroes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados da API', error);
    return [];
  }
};