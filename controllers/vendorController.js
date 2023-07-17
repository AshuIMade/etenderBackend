const db = require('../models');
const Vendor = db.vendors;

//vendor apis
//1.create vendor api
const addVendor = async (req, res) => {
    let info = {
        name: req.body.name,
        lcnumber: req.body.lcnumber,
        tin: req.body.tin,
        userId: req.body.userId
    }
    const vendor = await Vendor.create(info);
    res.status(200).send(vendor);
    console.log(vendor);
}
//2. get all vendors
const getAllVendors = async (req, res) => {
    let vendors = await Vendor.findAll({});
    res.status(200).send(vendors);
}
//3. get one vendor
const getOneVendor = async (req, res) => {
    let id = req.params.id;

    let vendor = await Vendor.findOne({ where: { id: id } });
    res.status(200).send(vendor);

} 
//4. update vendor
const updateVendor = async (req, res) => {
    let id = req.params.id;
    let vendor = await Vendor.update(req.body, { where: { id: id } });
    res.status(200).send(vendor);
}
//5. delete vendor
const deleteVendor = async (req, res) => {
    let id = req.params.id;
    let vendor = await Vendor.destroy({ where: { id: id } });
    res.status(200).send(`vendor is deleted!`);
}
module.exports = {
    addVendor,
    getAllVendors,
    getOneVendor,
    updateVendor,
    deleteVendor
}