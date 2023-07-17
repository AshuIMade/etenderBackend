const bidController = require('../controllers/bidController');
const bidRouter = require('express').Router();
//basic crud routes
bidRouter.post('/', bidController.addBid);
bidRouter.get('/', bidController.getAllBids);

bidRouter.get('/:id', bidController.getOneBid);
bidRouter.put('/:id', bidController.updateBid);
bidRouter.delete('/:id', bidController.deleteBid);

module.exports = bidRouter