// Importing the modules and providerController
const express = require('express');
const router = express.Router();
const {
    getProviders,
    getProvider,
    postProvider,
    putProvider,
    deleteProvider
} = require('./../../controllers/providerController');

/*  ENDPOINTS  */

// Get all providers
router.get('/', getProviders);

// Get one provider by id 
router.get('/:id', getProvider);

// Create provider
router.post('/', postProvider);

// Update provider
router.put('/:id', putProvider);

// Delete provider by id
router.delete('/:id', deleteProvider);

module.exports = router;