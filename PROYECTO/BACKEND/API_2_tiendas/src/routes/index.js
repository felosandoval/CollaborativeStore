const express = require('express');
const controller = require('../controllers/index');
const router = new express.Router();

// Rutas para creación de tablas de tiendas
router.get('/createEmprendedorTable', controller.createEmprendedorTable);
router.get('/createClienteTable', controller.createClienteTable);
router.get('/createGestorTable', controller.createGestorTable);
router.get('/createTipoTiendasTable', controller.createTipoTiendasTable);
router.get('/createTiendaTable', controller.createTiendaTable);

// Rutas para inserción de datos en las tablas de tiendas
router.post('/insertEmprendedor', controller.insertIntoEmprendedor);
router.post('/insertCliente', controller.insertIntoCliente);
router.post('/insertGestor', controller.insertIntoGestor);
router.post('/insertTipoTiendas', controller.insertIntoTipoTiendas);
router.post('/insertTienda', controller.insertIntoTienda);

router.get('/emprendedores', controller.getAllEmprendedores);
router.get('/clientes', controller.getAllClientes);
router.get('/gestores', controller.getAllGestores);
router.get('/tipostiendas', controller.getAllTipoTiendas);
router.get('/tiendas', controller.getAllTiendas);

// Rutas para operaciones de actualización
router.put('/emprendedor/:ID', controller.updateEmprendedor);
router.put('/cliente/:ID', controller.updateCliente);
router.put('/gestor/:ID', controller.updateGestor);
router.put('/tipotienda/:ID', controller.updateTipoTienda);
router.put('/tienda/:ID', controller.updateTienda);

// Rutas para operaciones de eliminación
router.delete('/emprendedor/:ID', controller.deleteEmprendedor);
router.delete('/cliente/:ID', controller.deleteCliente);
router.delete('/gestor/:ID', controller.deleteGestor);
router.delete('/tipotienda/:ID', controller.deleteTipoTienda);
router.delete('/tienda/:ID', controller.deleteTienda);


module.exports = router;