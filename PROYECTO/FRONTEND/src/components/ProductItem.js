// src/components/ProductItem.js
import React from 'react';

function ProductItem({ product, onDelete }) {
    return (
        <div>
            <h3>{product.Nombre}</h3>
            <p>{product.Descripcion}</p>
            <button onClick={() => onDelete(product.ID)}>Eliminar</button>
        </div>
    );
}

export default ProductItem;
