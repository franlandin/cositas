const path = require('path');

const express = require('express');

const controller = require('../controllers/pets');

const router = express.Router();

router.get('/', controller.getAvailablePets);
router.get('/add-pets', controller.getAddPets);
router.post('/add-pets', controller.postAddPet);
router.post('/edit-pet/:petId', controller.postEditPet);
router.get('/edit-pet/:petId', controller.getEditPet);
router.post('/edit-pet/:petId/delete', controller.postDeletePet);

router.get('/rent-pet/:petId', controller.getRentPet);
router.post('/rent-pet/:petId', controller.postRentPet);

/*
router.get('/edit-pets/:petId/rent', controller.postRentPet);
*/
module.exports = router;
