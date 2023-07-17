module.exports = (sequelize, DataTypes) => {
    const Grade = sequelize.define("grade", {
        result: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        rank: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull:false
        }
    })
    return Grade
}