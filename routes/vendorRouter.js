const vendorController = require('../controllers/vendorController');
const vendorRouter = require('express').Router();

vendorRouter.post('/', vendorController.addVendor);
vendorRouter.get('/', vendorController.getAllVendors);

vendorRouter.get('/:id', vendorController.getOneVendor);
vendorRouter.put('/:id', vendorController.updateVendor);
vendorRouter.delete('/:id', vendorController.deleteVendor);

module.exports = vendorRouter