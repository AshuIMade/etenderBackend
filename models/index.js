const dbConfig = require('../config/dbConfig');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle:dbConfig.pool.idel
        }        
    }
);
sequelize.authenticate().then(
    () => {
        console.log(`Connected to db...`);
    }).catch(err => {
        console.log('Error in Db connection' + err); 
    });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./user.js')(sequelize, DataTypes);
db.vendors = require('./vendor.js')(sequelize, DataTypes);
db.tenders = require('./tender.js')(sequelize, DataTypes);
db.bids = require('./bid.js')(sequelize, DataTypes);
db.grades = require('./grade.js')(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(
    () => {
        console.log(`yes re-sync is done`);
    }
);
//relations
//users
db.users.hasOne(db.vendors);
db.users.hasMany(db.tenders, { as: "tenders" });
db.tenders.belongsTo(db.users, {
  foreignKey: "usersId",
  as: "users",
});
db.users.hasMany(db.bids, { as: "bids" });
db.bids.belongsTo(db.users, {
  foreignKey: "usersId",
  as: "users",
});
db.users.hasMany(db.grades);
//vendors
db.vendors.hasMany(db.tenders);
db.vendors.hasMany(db.bids);
//tenders
db.tenders.hasMany(db.bids, { as: "bids" });
db.bids.belongsTo(db.tenders, {
  foreignKey: "tendersId",
  as: "tenders",
});
//bids
db.bids.hasOne(db.grades);


module.exports = db