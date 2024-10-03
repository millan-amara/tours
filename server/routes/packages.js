const express = require('express');
const router = express.Router();
const packages = require('../controllers/packages');
const catchAsync = require('../utils/catchAsync')
const { isLoggedIn } = require('../middleware');


router.get('/fetchpackages', packages.fetchPackages);
router.post('/createpackage', isLoggedIn, packages.createPackage);

// router.put('/edit/:id', isLoggedIn, requests.updateRequest);
// router.delete('/:id', isLoggedIn, catchAsync(requests.deleteRequest));
// router.get('/:id', catchAsync(requests.showRequest))


 
module.exports = router;