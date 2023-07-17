const userController = require('../controllers/userController');
const userRouter = require('express').Router();
//basic crud routes 
userRouter.post('/', userController.addUser);
userRouter.post('/login', userController.loginUser);
userRouter.get('/', userController.getAllUsers);

userRouter.get('/:id', userController.getOneUser);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);

module.exports = userRouter