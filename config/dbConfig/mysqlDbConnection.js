const dbConfig = require("../config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.mysql.database,
    dbConfig.mysql.username,
    dbConfig.mysql.password,
    {
        host: dbConfig.mysql.host,
        dialect: dbConfig.mysql.dialect,
        waitForConnections : true,
        pool: {
            max: dbConfig.mysql.max,
            min: dbConfig.mysql.pool.min,
            acquire: dbConfig.mysql.pool.acquire,
            idle: dbConfig.mysql.pool.idle,
        },
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Define your models here, and sync them if needed
// For example:
db.stores = require("../../server/models/storesModel.js")(sequelize, Sequelize);
db.license_keys=require("../../server/models/licencekeyModel.js")(sequelize, Sequelize);

module.exports = { db };
