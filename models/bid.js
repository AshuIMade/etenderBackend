module.exports = (sequelize, DataTypes) => {
    const Bid = sequelize.define("bid", {
        vendorName: {
            type: DataTypes.STRING,
            required: [true, 'Please enter vendor'],
            allowNull:false
        }, 
        description: {
            type: DataTypes.TEXT,
            required: [true, 'Please description'],
            allowNull:false
        },
        attachment: {
            type: DataTypes.STRING,
            required: [true, 'Please add attachment link to the bid document'],
            allowNull:false
        },
        reference: {
            type: DataTypes.STRING,
            allowNull:false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        reviwed: {
            type: DataTypes.BOOLEAN,
            required: [false, 'Please review the bid'],
            allowNull:true
        },
        rank: {
            type: DataTypes.INTEGER,
            allowNull:false
        }
    })
    return Bid
}