const express = require('express');
const controller = require('../controllers/index');
const router = new express.Router();

// Rutas para creación de tablas
router.get('/createCategoryTable', controller.createCategoryTable);
router.get('/createSubCategoryTable', controller.createSubCategoryTable);
router.get('/createProductTable', controller.createProductTable);

// Rutas para inserción de datos
router.post('/insertCategory', controller.insertIntoCategory);
router.post('/insertSubCategory', controller.insertIntoSubCategory);
router.post('/insertProduct', controller.insertIntoProduct);

// Rutas para operaciones de selección
router.get('/categories', controller.getAllCategories);
router.get('/subcategories', controller.getAllSubCategories);
router.get('/products', controller.getAllProducts);
router.get('/products/:id', controller.getProductById);

// Rutas para operaciones de actualización
router.put('/category/:ID', controller.updateCategory);
router.put('/subcategory/:ID', controller.updateSubCategory);
router.put('/product/:ID', controller.updateProduct);

// Rutas para operaciones de eliminación
router.delete('/category/:ID', controller.deleteCategory);
router.delete('/subcategory/:ID', controller.deleteSubCategory);
router.delete('/product/:ID', controller.deleteProduct);

module.exports = router;