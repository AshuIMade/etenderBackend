const db = require('../models');
const Tender = db.tenders;

//Tender apis
//1.create Tender api
const addTender = async (req, res) => {
    let info = {
        title: req.body.title,
        vendorName: req.body.vendorName,
        type: req.body.type,
        description: req.body.description,
        attachment:req.body.attachment,
        issuedDate: req.body.issuedDate,
        expDate: req.body.expDate,
        status: req.body.status,
    }
    const { title, type, description } = req.body;

    const tender = await Tender.create(info);
    res.status(200).send(tender);
}
//2. get all Tenders
const getAllTenders = async (req, res) => {
    const tenders = await Tender.findAll({});
    res.status(200).json(tenders);
}
//3. get one Tender
const getOneTender = async (req, res) => {
    let id = req.params.id;
    let tender = await Tender.findOne({ where: { id: id } });
    res.status(200).send(tender);

} 
//4. update Tender
const updateTender = async (req, res) => {
    let id = req.params.id;
    let tender = await Tender.update(req.body, { where: { id: id } });
    res.status(200).send(tender);
}
//5. delete user
const deleteTender = async (req, res) => {
    let id = req.params.id;
    let tender = await Tender.destroy({ where: { id: id } });
    res.status(200).send(`user is deleted!`);
}
module.exports = {
    addTender,
    getAllTenders,
    getOneTender,
    updateTender,
    deleteTender
}