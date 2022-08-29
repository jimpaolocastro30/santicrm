const express = require('express');
const router = express.Router();

const {addCustomer, getCustomer, getOneJbolt, getPaginatedSearchCustomer,updateCustomer} = require('../controllers/santiCRM');


router.post('/admin/add/santiCRM',  addCustomer);
router.get('/admin/get/query/santiCRM', getPaginatedSearchCustomer);
router.get('/admin/get/all/santiCRM', getCustomer);
router.get('/admin/get/one/santiCRM/:slug',  getOneJbolt);
router.put('/admin/update/santiCRM/:slug', updateCustomer);


module.exports = router;