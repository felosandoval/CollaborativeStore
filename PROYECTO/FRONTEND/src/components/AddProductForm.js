import React, { useState } from 'react';

function AddProductForm({ onAddProduct }) {
    const [product, setProduct] = useState({
        Nombre: '',
        Descripcion: '',
        Precio: '',
        Categoria_ID: '',
        Stock: '',
        Tienda_ID: ''
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProduct(product);
        setProduct({ Nombre: '', Descripcion: '', Precio: '', Categoria_ID: '', Stock: '', Tienda_ID: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="Nombre"
                value={product.Nombre}
                onChange={handleChange}
                placeholder="Nombre del producto"
            />
            <input
                name="Descripcion"
                value={product.Descripcion}
                onChange={handleChange}
                placeholder="Descripción"
            />
            <input
                name="Precio"
                type="number"
                value={product.Precio}
                onChange={handleChange}
                placeholder="Precio"
            />
            <input
                name="Categoria_ID"
                type="number"
                value={product.Categoria_ID}
                onChange={handleChange}
                placeholder="ID de Categoría"
            />
            <input
                name="Stock"
                type="number"
                value={product.Stock}
                onChange={handleChange}
                placeholder="Stock"
            />
            <input
                name="Tienda_ID"
                type="number"
                value={product.Tienda_ID}
                onChange={handleChange}
                placeholder="ID de Tienda"
            />
            <button type="submit">Agregar Producto</button>
        </form>
    );
}

export default AddProductForm;
