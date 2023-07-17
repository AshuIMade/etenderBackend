module.exports = (sequelize, DataTypes) => {
    const Vendor = sequelize.define("vendor", {
        name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        lcnumber: {
            type: DataTypes.STRING,
            allowNull:false
        },
        tin: {
            type: DataTypes.STRING,
            allowNull:false
        }
    })
    return Vendor
}