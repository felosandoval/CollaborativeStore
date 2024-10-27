import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'; // Asegúrate de tener la ruta correcta a tu archivo de estilos

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/crearproducto">Crear Producto</Link>
        </li>
        <li>
          <Link to="/verproducto">Obtener Productos</Link>
        </li>
        {/* Otros elementos de la barra lateral */}
      </ul>
    </div>
  );
}

export default Sidebar;