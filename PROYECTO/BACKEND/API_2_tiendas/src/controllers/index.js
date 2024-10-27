const database = require('../db');

const createEmprendedorTable = () => {
    const query = `
        CREATE TABLE IF NOT EXISTS Emprendedor (
            ID INT AUTO_INCREMENT PRIMARY KEY,
            RUT VARCHAR(255) UNIQUE NOT NULL,
            Nombre VARCHAR(255) NOT NULL,
            Correo VARCHAR(255) UNIQUE NOT NULL
        );
    `;

    database.query(query, (err) => {
        if (err) throw err;
        console.log('Tabla Emprendedor creada');
    });
};

const createClienteTable = () => {
    const query = `
        CREATE TABLE IF NOT EXISTS Cliente (
            ID INT AUTO_INCREMENT PRIMARY KEY,
            RUT VARCHAR(255) UNIQUE NOT NULL,
            Nombre VARCHAR(255) NOT NULL,
            Correo VARCHAR(255) UNIQUE NOT NULL,
            Direccion TEXT,
            Telefono VARCHAR(50)
        );
    `;

    database.query(query, (err) => {
        if (err) throw err;
        console.log('Tabla Cliente creada');
    });
};

const createGestorTable = () => {
    const query = `
        CREATE TABLE IF NOT EXISTS Gestor (
            ID INT AUTO_INCREMENT PRIMARY KEY,
            Nombre VARCHAR(255) NOT NULL,
            Correo VARCHAR(255) UNIQUE NOT NULL,
            Rol VARCHAR(255)
        );
    `;

    database.query(query, (err) => {
        if (err) throw err;
        console.log('Tabla Gestor creada');
    });
};

const createTipoTiendasTable = () => {
    const query = `
        CREATE TABLE IF NOT EXISTS TipoTiendas (
            ID INT AUTO_INCREMENT PRIMARY KEY,
            Nombre VARCHAR(255) NOT NULL,
            Descripcion TEXT
        );
    `;

    database.query(query, (err) => {
        if (err) throw err;
        console.log('Tabla TipoTiendas creada');
    });
};

const createTiendaTable = () => {
    const query = `
        CREATE TABLE IF NOT EXISTS Tienda (
            ID INT AUTO_INCREMENT PRIMARY KEY,
            Nombre VARCHAR(255) NOT NULL,
            Descripcion TEXT,
            Direccion TEXT,
            Telefono VARCHAR(50),
            Emprendedor_ID INT NOT NULL,
            Gestor_ID INT NOT NULL,
            TipoTienda_ID INT NOT NULL,
            FOREIGN KEY (Emprendedor_ID) REFERENCES Emprendedor(ID),
            FOREIGN KEY (Gestor_ID) REFERENCES Gestor(ID),
            FOREIGN KEY (TipoTienda_ID) REFERENCES TipoTiendas(ID)
        );
    `;

    database.query(query, (err) => {
        if (err) throw err;
        console.log('Tabla Tienda creada');
    });
};

const insertIntoCategory = (req, res) => {
    const { Nombre, Descripcion } = req.body; // Asegúrate de que 'Nombre' y 'Descripcion' sean enviados en el cuerpo de la solicitud
    const query = `
        INSERT INTO Categoria (Nombre, Descripcion)
        VALUES (?, ?)
    `;

    database.query(query, [Nombre, Descripcion], (err, results) => {
        if (err) throw err;
        res.send(`Categoria con ID ${results.insertId} creada`);
    });
};

const insertIntoSubCategory = (req, res) => {
    const { Nombre, Descripcion, Categoria_ID } = req.body; // Asegúrate de que estos valores sean enviados en el cuerpo de la solicitud
    const query = `
        INSERT INTO SubCategoria (Nombre, Descripcion, Categoria_ID)
        VALUES (?, ?, ?)
    `;

    database.query(query, [Nombre, Descripcion, Categoria_ID], (err, results) => {
        if (err) throw err;
        res.send(`SubCategoria con ID ${results.insertId} creada`);
    });
};

const insertIntoProduct = (req, res) => {
    const { Nombre, Descripcion, precio, Categoria_ID, Stock, Tienda_ID } = req.body; // Asegúrate de que estos valores sean enviados en el cuerpo de la solicitud
    const query = `
        INSERT INTO Producto (Nombre, Descripcion, Precio, Categoria_ID, Stock, Tienda_ID)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    database.query(query, [Nombre, Descripcion, precio, Categoria_ID, Stock, Tienda_ID], (err, results) => {
        if (err) throw err;
        res.send(`Producto con ID ${results.insertId} creado`);
    });
};


const insertIntoEmprendedor = (req, res) => {
    const { RUT, Nombre, Correo } = req.body;
    const query = `
        INSERT INTO Emprendedor (RUT, Nombre, Correo)
        VALUES (?, ?, ?)
    `;

    database.query(query, [RUT, Nombre, Correo], (err, results) => {
        if (err) throw err;
        res.send(`Emprendedor con ID ${results.insertId} creado`);
    });
};

const insertIntoCliente = (req, res) => {
    const { RUT, Nombre, Correo, Direccion, Telefono } = req.body;
    const query = `
        INSERT INTO Cliente (RUT, Nombre, Correo, Direccion, Telefono)
        VALUES (?, ?, ?, ?, ?)
    `;

    database.query(query, [RUT, Nombre, Correo, Direccion, Telefono], (err, results) => {
        if (err) throw err;
        res.send(`Cliente con ID ${results.insertId} creado`);
    });
};

const insertIntoGestor = (req, res) => {
    const { Nombre, Correo, Rol } = req.body;
    const query = `
        INSERT INTO Gestor (Nombre, Correo, Rol)
        VALUES (?, ?, ?)
    `;

    database.query(query, [Nombre, Correo, Rol], (err, results) => {
        if (err) throw err;
        res.send(`Gestor con ID ${results.insertId} creado`);
    });
};

const insertIntoTipoTiendas = (req, res) => {
    const { Nombre, Descripcion } = req.body;
    const query = `
        INSERT INTO TipoTiendas (Nombre, Descripcion)
        VALUES (?, ?)
    `;

    database.query(query, [Nombre, Descripcion], (err, results) => {
        if (err) throw err;
        res.send(`Tipo de Tienda con ID ${results.insertId} creado`);
    });
};

const insertIntoTienda = (req, res) => {
    const { Nombre, Descripcion, Direccion, Telefono, Emprendedor_ID, Gestor_ID, TipoTienda_ID } = req.body;
    const query = `
        INSERT INTO Tienda (Nombre, Descripcion, Direccion, Telefono, Emprendedor_ID, Gestor_ID, TipoTienda_ID)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    database.query(query, [Nombre, Descripcion, Direccion, Telefono, Emprendedor_ID, Gestor_ID, TipoTienda_ID], (err, results) => {
        if (err) throw err;
        res.send(`Tienda con ID ${results.insertId} creada`);
    });
};

// Obtener todos los Emprendedores
const getAllEmprendedores = async (req, res) => {
    try {
        const results = await new Promise((resolve, reject) => {
            database.query('SELECT * FROM Emprendedor', (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
        res.json(results);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Obtener todos los Clientes
const getAllClientes = async (req, res) => {
    try {
        const results = await new Promise((resolve, reject) => {
            database.query('SELECT * FROM Cliente', (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
        res.json(results);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Obtener todos los Gestores
const getAllGestores = async (req, res) => {
    try {
        const results = await new Promise((resolve, reject) => {
            database.query('SELECT * FROM Gestor', (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
        res.json(results);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Obtener todos los Tipos de Tiendas
const getAllTipoTiendas = async (req, res) => {
    try {
        const results = await new Promise((resolve, reject) => {
            database.query('SELECT * FROM TipoTiendas', (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
        res.json(results);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Obtener todos los Productos
const getAllTiendas = async (req, res) => {
    try {
        // Envuelve la consulta en una nueva promesa
        const results = await new Promise((resolve, reject) => {
            database.query('SELECT * FROM Tienda', (err, results) => {
                if (err) {
                    reject(err); // Rechaza la promesa si hay un error
                } else {
                    resolve(results); // Resuelve la promesa con los resultados
                }
            });
        });

        // Envía los resultados como JSON
        res.json(results);
    } catch (err) {
        // Maneja cualquier error que ocurra durante la consulta
        res.status(500).send(err.message);
    }
};


// Actualizar un Emprendedor
const updateEmprendedor = async (req, res) => {
    const { RUT, Nombre, Correo } = req.body;
    const { ID } = req.params;
    try {
        database.query('UPDATE Emprendedor SET RUT = ?, Nombre = ?, Correo = ? WHERE ID = ?', [RUT, Nombre, Correo, ID]);
        res.send(`Emprendedor con ID ${ID} actualizado`);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Actualizar un Cliente
const updateCliente = async (req, res) => {
    const { RUT, Nombre, Correo, Direccion, Telefono } = req.body;
    const { ID } = req.params;
    try {
        database.query('UPDATE Cliente SET RUT = ?, Nombre = ?, Correo = ?, Direccion = ?, Telefono = ? WHERE ID = ?', [RUT, Nombre, Correo, Direccion, Telefono, ID]);
        res.send(`Cliente con ID ${ID} actualizado`);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Actualizar un Gestor
const updateGestor = async (req, res) => {
    const { Nombre, Correo, Rol } = req.body;
    const { ID } = req.params;
    try {
        database.query('UPDATE Gestor SET Nombre = ?, Correo = ?, Rol = ? WHERE ID = ?', [Nombre, Correo, Rol, ID]);
        res.send(`Gestor con ID ${ID} actualizado`);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Actualizar un Tipo de Tienda
const updateTipoTienda = async (req, res) => {
    const { Nombre, Descripcion } = req.body;
    const { ID } = req.params;
    try {
        database.query('UPDATE TipoTiendas SET Nombre = ?, Descripcion = ? WHERE ID = ?', [Nombre, Descripcion, ID]);
        res.send(`Tipo de Tienda con ID ${ID} actualizado`);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Actualizar una Tienda
const updateTienda = async (req, res) => {
    const { Nombre, Descripcion, Direccion, Telefono, Emprendedor_ID, Gestor_ID, TipoTienda_ID } = req.body;
    const { ID } = req.params;
    try {
        database.query('UPDATE Tienda SET Nombre = ?, Descripcion = ?, Direccion = ?, Telefono = ?, Emprendedor_ID = ?, Gestor_ID = ?, TipoTienda_ID = ? WHERE ID = ?', [Nombre, Descripcion, Direccion, Telefono, Emprendedor_ID, Gestor_ID, TipoTienda_ID, ID]);
        res.send(`Tienda con ID ${ID} actualizada`);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Eliminar un Emprendedor
const deleteEmprendedor = async (req, res) => {
    const { ID } = req.params;
    try {
        database.query('DELETE FROM Emprendedor WHERE ID = ?', [ID]);
        res.send(`Emprendedor con ID ${ID} eliminado`);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Eliminar un Cliente
const deleteCliente = async (req, res) => {
    const { ID } = req.params;
    try {
        database.query('DELETE FROM Cliente WHERE ID = ?', [ID]);
        res.send(`Cliente con ID ${ID} eliminado`);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Eliminar un Gestor
const deleteGestor = async (req, res) => {
    const { ID } = req.params;
    try {
        database.query('DELETE FROM Gestor WHERE ID = ?', [ID]);
        res.send(`Gestor con ID ${ID} eliminado`);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Eliminar un Tipo de Tienda
const deleteTipoTienda = async (req, res) => {
    const { ID } = req.params;
    try {
        database.query('DELETE FROM TipoTiendas WHERE ID = ?', [ID]);
        res.send(`Tipo de Tienda con ID ${ID} eliminado`);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Eliminar una Tienda
const deleteTienda = async (req, res) => {
    const { ID } = req.params;
    try {
        database.query('DELETE FROM Tienda WHERE ID = ?', [ID]);
        res.send(`Tienda con ID ${ID} eliminada`);
    } catch (err) {
        res.status(500).send(err.message);
    }
};


// Llama a las funciones para crear las tablas


module.exports = {
    createEmprendedorTable,
    createClienteTable,
    createGestorTable,
    createTipoTiendasTable,
    createTiendaTable,
    insertIntoEmprendedor,
    insertIntoCliente,
    insertIntoGestor,
    insertIntoTipoTiendas,
    insertIntoTienda,
    getAllEmprendedores,
    getAllClientes,
    getAllGestores,
    getAllTipoTiendas,
    getAllTiendas,
    updateEmprendedor,
    updateCliente,
    updateGestor,
    updateTipoTienda,
    updateTienda,
    deleteEmprendedor,
    deleteCliente,
    deleteGestor,
    deleteTipoTienda,
    deleteTienda
};
