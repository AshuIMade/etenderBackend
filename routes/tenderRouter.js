const tenderController = require('../controllers/tenderController');
const tenderRouter = require('express').Router();
//basic crud routes
tenderRouter.post('/', tenderController.addTender);
tenderRouter.get('/', tenderController.getAllTenders);

tenderRouter.get('/:id', tenderController.getOneTender);
tenderRouter.put('/:id', tenderController.updateTender);
tenderRouter.delete('/:id', tenderController.deleteTender);

module.exports = tenderRouter