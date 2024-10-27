const express = require('express');
const controller = require('../controllers/index.js');
const router = new express.Router();

router.get('/api1/products', async (req, res) => {
  try {
    const api1Data = await controller.getApi1Data();
    res.json(api1Data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/api2/tiendas', async (req, res) => {
  try {
    const api2Data = await controller.getApi2Data();
    res.json(api2Data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/composite-data', async (req, res) => {
  try {
    const compositeData = await controller.getCompositeData();
    res.json(compositeData);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;