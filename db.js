let Sequelize = require("sequelize");

let db = new Sequelize(
    "postgres://tvpinotenguvxs:881fa8abf6add3b6718d6d9505410dbc09c0731d6331bae42b9bbb5288816942@ec2-18-204-101-137.compute-1.amazonaws.com:5432/d9h1d46puj4asl",
    {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
        }
    });
module.exports = db;