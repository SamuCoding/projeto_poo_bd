let {Sequelize, DataTypes} = require("sequelize");
let db = require("../db");

const Leitores = db.define("Leitores",
    {
        Nome: DataTypes.STRING,
        Email: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        Preferencias: DataTypes.STRING
    }
)

module.exports = Leitores;