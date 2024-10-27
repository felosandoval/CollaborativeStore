const database = require('../db');

//Creacion de tablas

const createCategoryTable = (req, res) => {
    const query = `
        CREATE TABLE IF NOT EXISTS Categoria (
            ID INT AUTO_INCREMENT PRIMARY KEY,
            Nombre VARCHAR(255) NOT NULL,
            Descripcion TEXT
        )
    `;

    database.query(query, (err) => {
        if (err) throw err;
        res.send('Tabla Categoria creada');
    });
};

const createSubCategoryTable = (req, res) => {
    const query = `
        CREATE TABLE IF NOT EXISTS SubCategoria (
            ID INT AUTO_INCREMENT PRIMARY KEY,
            Nombre VARCHAR(255) NOT NULL,
            Descripcion TEXT,
            Categoria_ID INT NOT NULL,
            FOREIGN KEY (Categoria_ID) REFERENCES Categoria(ID)
        )
    `;

    database.query(query, (err) => {
        if (err) throw err;
        res.send('Tabla SubCategoria creada');
    });
};

const createProductTable = (req, res) => {
    const query = `
        CREATE TABLE IF NOT EXISTS Producto (
            ID INT AUTO_INCREMENT PRIMARY KEY,
            Nombre VARCHAR(255) NOT NULL,
            Descripcion TEXT,
            Precio DECIMAL(10, 2) NOT NULL,
            Categoria_ID INT NOT NULL,
            Stock INT NOT NULL,
            Tienda_ID INT NOT NULL, 
            FOREIGN KEY (Categoria_ID) REFERENCES Categoria(ID)

        )
    `;

    database.query(query, (err) => {
        if (err) throw err;
        res.send('Tabla Producto creada');
    });
};

//Inserts

const insertIntoCategory = (req, res) => {
    const { Nombre, Descripcion } = req.body; // Asegúrate de que 'nombre' y 'descripcion' sean enviados en el cuerpo de la solicitud
    const query = `
        INSERT INTO Categoria (Nombre, Descripcion)
        VALUES (?, ?)
    `;

    database.query(query, [Nombre, Descripcion], (err, results) => {
        if (err) throw err;
        res.send(`Categoria con id ${results.insertId} creada`);
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
        res.send(`SubCategoria con id ${results.insertId} creada`);
    });
};

const insertIntoProduct = (req, res) => {
    const { Nombre, Descripcion, Precio, Categoria_ID, Stock, Tienda_ID } = req.body; // Asegúrate de que estos valores sean enviados en el cuerpo de la solicitud
    const query = `
        INSERT INTO Producto (Nombre, Descripcion, Precio, Categoria_ID, Stock, Tienda_ID)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    database.query(query, [Nombre, Descripcion, Precio, Categoria_ID, Stock, Tienda_ID], (err, results) => {
        if (err) throw err;
        res.send(`Producto con id ${results.insertId} creado`);
    });
};

const getAllCategories = async (req, res) => {
    try {
        const results = await new Promise((resolve, reject) => {
            database.query('SELECT * FROM Categoria', (err, results) => {
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


const getAllSubCategories = async (req, res) => {
    try {
        // Envuelve la consulta en una nueva promesa
        const results = await new Promise((resolve, reject) => {
            database.query('SELECT * FROM SubCategoria', (err, results) => {
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


// Obtener todos los Productos
const getAllProducts = async (req, res) => {
    try {
        // Envuelve la consulta en una nueva promesa
        const results = await new Promise((resolve, reject) => {
            database.query('SELECT * FROM Producto', (err, results) => {
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

// Obtener un solo Producto por ID
const getProductById = async (req, res) => {
    try {
        // Obtiene el ID del parámetro de la solicitud
        const productId = req.params.id;

        // Envuelve la consulta en una nueva promesa
        const result = await new Promise((resolve, reject) => {
            database.query('SELECT * FROM Producto WHERE id = ?', [productId], (err, result) => {
                if (err) {
                    reject(err); // Rechaza la promesa si hay un error
                } else {
                    resolve(result); // Resuelve la promesa con el resultado
                }
            });
        });

        // Verifica si se encontró un producto con el ID dado
        if (result.length > 0) {
            // Envía el resultado como JSON
            res.json(result[0]);
        } else {
            // Si no se encuentra el producto, devuelve un mensaje 404
            res.status(404).send('Producto no encontrado');
        }
    } catch (err) {
        // Maneja cualquier error que ocurra durante la consulta
        res.status(500).send(err.message);
    }
};

// Actualizar una Categoría
const updateCategory = async (req, res) => {
    const { Nombre, Descripcion } = req.body;
    const { ID } = req.params;
    try {
        database.query('UPDATE Categoria SET Nombre = ?, Descripcion = ? WHERE ID = ?', [Nombre, Descripcion, ID]);
        res.send(`Categoría con id ${ID} actualizada`);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Actualizar una SubCategoría
const updateSubCategory = async (req, res) => {
    const { Nombre, Descripcion, Categoria_ID } = req.body;
    const { ID } = req.params;
    try {
        database.query('UPDATE SubCategoria SET Nombre = ?, Descripcion = ?, Categoria_ID = ? WHERE ID = ?', [ID, Nombre, Descripcion, Categoria_ID]);
        res.send(`SubCategoría con id ${ID} actualizada`);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Actualizar un Producto
const updateProduct = async (req, res) => {
    const { Nombre, Descripcion, Precio, Categoria_ID, Stock, Tienda_ID } = req.body;
    const { ID } = req.params;
    try {
        database.query('UPDATE Producto SET Nombre = ?, Descripcion = ?, Precio = ?, Categoria_ID = ?, Stock = ?, Tienda_ID = ? WHERE ID = ?', [ID, Nombre, Descripcion, Precio, Categoria_ID, Stock, Tienda_ID]);
        res.send(`Producto con id ${ID} actualizado`);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Eliminar una Categoría
const deleteCategory = async (req, res) => {
    const { ID } = req.params;
    try {
        database.query('DELETE FROM Categoria WHERE ID = ?', [ID]);
        res.send(`Categoría con id ${ID} eliminada`);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Eliminar una SubCategoría
const deleteSubCategory = async (req, res) => {
    const { ID } = req.params;
    try {
        database.query('DELETE FROM SubCategoria WHERE ID = ?', [ID]);
        res.send(`SubCategoría con id ${ID} eliminada`);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Eliminar un Producto
const deleteProduct = async (req, res) => {
    const { ID } = req.params;
    try {
        database.query('DELETE FROM Producto WHERE ID = ?', [ID]);
        res.send(`Producto con id ${ID} eliminado`);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = {
    //Funciones de tablas
    createCategoryTable,
    createSubCategoryTable,
    createProductTable,

    //Funciones de crear
    insertIntoCategory,
    insertIntoSubCategory,
    insertIntoProduct,

    // Funciones de ver
    getAllCategories,
    getAllSubCategories,
    getAllProducts,
    getProductById,

    // Funciones de actualización
    updateCategory,
    updateSubCategory,
    updateProduct,

    // Funciones de eliminación
    deleteCategory,
    deleteSubCategory,
    deleteProduct,
}
