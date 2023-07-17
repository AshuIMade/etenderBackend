const db = require('../models');
const Grade = db.grades;

//Grade apis
//1.create Grade api
const addGrade = async (req, res) => {
    let info = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    const grade = await Grade.create(info);
    res.status(200).send(grade);
    console.log(grade);
}
//2. get all Grade
const getAllGrades = async (req, res) => {
    let grades = await Grade.findAll({});
    res.status(200).send(grades);
}
//3. get one Grade
const getOneGrade = async (req, res) => {
    let id = req.params.id;
    let grade = await Grade.findOne({ where: { id: id } });
    res.status(200).send(grade);

} 
//4. update Grade
const updateGrade = async (req, res) => {
    let id = req.params.id;
    let grade = await Grade.update(req.body, { where: { id: id } });
    res.status(200).send(grade);
}
//5. delete Grade
const deleteGrade = async (req, res) => {
    let id = req.params.id;
    let grade = await Grade.destroy({ where: { id: id } });
    res.status(200).send(`user is deleted!`);
}
module.exports = {
    addGrade,
    getAllGrades,
    getOneGrade,
    updateGrade,
    deleteGrade
}