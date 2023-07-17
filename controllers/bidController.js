const db = require('../models');
const Bid = db.bids;

//Bid apis
//1.create Bid api
const addBid = async (req, res) => {
    let info = {
        vendorName: req.body.vendorName,
        description: req.body.description,
        attachment:req.body.attachment,
        reference: req.body.reference,
        price: req.body.price,
        reviwed: req.body.reviwed,
        rank:req.body.rank
    }
    const bid = await Bid.create(info);
    res.status(200).json(bid);
}
//2. get all Bid
const getAllBids = async (req, res) => {
    let bids = await Bid.findAll({});
    res.status(200).json(bids);
}
//3. get one Bid
const getOneBid = async (req, res) => {
    let id = req.params.id;
    let bid = await Bid.findOne({ where: { id: id } });
    res.status(200).send(bid);

} 
//4. update Bid
const updateBid = async (req, res) => {
    let id = req.params.id;
    let bid = await Bid.update(req.body, { where: { id: id } });
    res.status(200).send(bid);
}
//5. delete Bid
const deleteBid = async (req, res) => {
    let id = req.params.id;
    let bid = await bid.destroy({ where: { id: id } });
    res.status(200).send(`user is deleted!`);
}
module.exports = {
    addBid,
    getAllBids,
    getOneBid,
    updateBid,
    deleteBid
}