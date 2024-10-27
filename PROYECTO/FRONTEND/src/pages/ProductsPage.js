import React, { useState, useEffect } from 'react';
import AddProductForm from '../components/AddProductForm';
import ProductItem from '../components/ProductItem';
import { getAllProducts, insertProduct, deleteProduct } from '../services/productService';

function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await getAllProducts();
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddProduct = async (product) => {
        try {
            await insertProduct(product);
            console.log("Si llega aqui")
            fetchProducts();  // Actualiza la lista después de añadir un producto
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const handleDeleteProduct = async (id) => {
        try {
            await deleteProduct(id);
            fetchProducts();  // Actualiza la lista después de eliminar un producto
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    if (loading) {
        return <div>Cargando productos...</div>;
    }

    return (
        <div>
            <h1> Crear Productos</h1>
            <AddProductForm onAddProduct={handleAddProduct} />
        </div>
    );
}

export default ProductsPage;

