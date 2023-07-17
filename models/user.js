module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        name: {
            type: DataTypes.STRING,
            required: [true, 'Please add a name'],
            allowNull:false
        },
        JobTitle: {
            type: DataTypes.STRING,
            required: [false, 'Please your job title'],
            allowNull:true
        },
        vendorName: {
            type: DataTypes.STRING,
            required: [false, 'Please your vendor'],
            allowNull:true
        },
        email: {
            type: DataTypes.STRING,
            required: [true, 'Please add an email'],
            unique: true,
            allowNull:false
        },
        password: {
            type: DataTypes.STRING,
            required: [true, 'Please add a password'],
            allowNull:false
        }
    })
    return User
}