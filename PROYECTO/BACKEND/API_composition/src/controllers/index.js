const axios = require('axios');

const getApi1Data = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8080/products');
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener datos de la API 1');
  }
};

const getApi2Data = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8082/tiendas');
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener datos de la API 2');
  }
};

const getCompositeData = async () => {
  try {
    const api1Data = await getApi1Data();
    const api2Data = await getApi2Data();
    return { api1Data, api2Data };
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener datos combinados');
  }
};

module.exports = {
  getApi1Data,
  getApi2Data,
  getCompositeData,
};
