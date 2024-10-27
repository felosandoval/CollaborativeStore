import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Cambia esto por la URL de tu microservicio

// Categorías
export const getAllCategories = () => axios.get(`${API_BASE_URL}/categories`);
export const insertCategory = (category) => axios.post(`${API_BASE_URL}/insertCategory`, category);
export const updateCategory = (id, category) => axios.put(`${API_BASE_URL}/category/${id}`, category);
export const deleteCategory = (id) => axios.delete(`${API_BASE_URL}/category/${id}`);

// Subcategorías
export const getAllSubCategories = () => axios.get(`${API_BASE_URL}/subcategories`);
export const insertSubCategory = (subCategory) => axios.post(`${API_BASE_URL}/insertSubCategory`, subCategory);
export const updateSubCategory = (id, subCategory) => axios.put(`${API_BASE_URL}/subcategory/${id}`, subCategory);
export const deleteSubCategory = (id) => axios.delete(`${API_BASE_URL}/subcategory/${id}`);

// Productos
export const getAllProducts = () => axios.get(`${API_BASE_URL}/products`);
export const getProductById = (id) => axios.get(`${API_BASE_URL}/products/${id}`);
export const insertProduct = (product) => axios.post(`${API_BASE_URL}/insertProduct`, product);
export const updateProduct = (id, product) => axios.put(`${API_BASE_URL}/product/${id}`, product);
export const deleteProduct = (id) => axios.delete(`${API_BASE_URL}/product/${id}`);
