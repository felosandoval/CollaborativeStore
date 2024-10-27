import React, { useState, useEffect } from 'react';
import { getAllProducts, deleteProduct } from '../services/productService';
import ProductItem from '../components/ProductItem';  // Asegúrate de importar ProductItem

function ShowProducts() {
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
      <h1>Lista de Todos los Productos</h1>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} onDelete={handleDeleteProduct} />
      ))}
    </div>
  );
}

export default ShowProducts;