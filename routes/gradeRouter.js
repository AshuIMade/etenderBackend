const gradeController = require('../controllers/gradeController');
const gradeRouter = require('express').Router();

gradeRouter.post('/', gradeController.addGrade);
gradeRouter.get('/', gradeController.getAllGrades);

gradeRouter.get('/:id', gradeController.getOneGrade);
gradeRouter.put('/:id', gradeController.updateGrade);
gradeRouter.delete('/:id', gradeController.deleteGrade);

module.exports = gradeRouter