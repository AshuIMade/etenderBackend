module.exports = (sequelize, DataTypes) => {
    const Tender = sequelize.define("tender", {
        title: {
            type: DataTypes.STRING,
            allowNull:false
        },
        vendorName: {
            type: DataTypes.STRING,
            required: [true, 'Please add vendors name'],
            allowNull:false
        },
        type: {
            type: DataTypes.STRING,
            required: [true, 'Please add type of tender'],
            allowNull:false
        },
        description: {
            type: DataTypes.TEXT,
            required: [true, 'Please add description'],
            allowNull:false
        },
        attachment: {
            type: DataTypes.STRING,
            required: [true, 'Please add reference link for attachment document'],
            allowNull:false
        },
        issuedDate: {
            type: DataTypes.DATE,
            allowNull:false
        },
        expDate: {
            type: DataTypes.DATE,
            allowNull:false
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull:true
        }

    })
    return Tender
}