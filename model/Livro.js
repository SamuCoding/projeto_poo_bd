let {Sequelize, DataTypes} = require("sequelize");
let db = require("../db");

const Livro = db.define("Livro",
    {
        Titulo: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        Editora: DataTypes.STRING,
        Autores: DataTypes.STRING,
        Genero: DataTypes.STRING,
        Ano_de_lancamento: DataTypes.INTEGER  
    }
)

module.exports = Livro;