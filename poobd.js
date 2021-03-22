const {Pool} = require("pg");

async function criarConexao(){
    const pool = new Pool({
        connectionString: 
        'postgres://tvpinotenguvxs:881fa8abf6add3b6718d6d9505410dbc09c0731d6331bae42b9bbb5288816942@ec2-18-204-101-137.compute-1.amazonaws.com:5432/d9h1d46puj4asl',
        ssl: {
            rejectUnauthorized: false
        }

    });

    let con = await pool.connect();

    await con.query(`
    /* Lógico_1: */

    CREATE TABLE Biblioteca (
        Nome VARCHAR,
        UrlLink VARCHAR PRIMARY KEY,
        Email VARCHAR
    );
    
    CREATE TABLE Livro (
        Titulo VARCHAR PRIMARY KEY,
        Editora VARCHAR,
        Autores VARCHAR,
        Genero VARCHAR,
        Ano_de_lancamento INTEGER
    );
    
    CREATE TABLE Leitores (
        Nome VARCHAR,
        Email VARCHAR PRIMARY KEY,
        Preferencias VARCHAR
    );
    
    CREATE TABLE Possui (
        fk_Biblioteca_UrlLink VARCHAR,
        fk_Livro_Titulo VARCHAR
    );
    
    CREATE TABLE Acessam (
        fk_Leitores_Email VARCHAR,
        fk_Biblioteca_UrlLink VARCHAR
    );
    
    CREATE TABLE Leem (
        fk_Livro_Titulo VARCHAR,
        fk_Leitores_Email VARCHAR
    );
     
    ALTER TABLE Possui ADD CONSTRAINT FK_Possui_1
        FOREIGN KEY (fk_Biblioteca_UrlLink)
        REFERENCES Biblioteca (UrlLink)
        ON DELETE RESTRICT;
     
    ALTER TABLE Possui ADD CONSTRAINT FK_Possui_2
        FOREIGN KEY (fk_Livro_Titulo)
        REFERENCES Livro (Titulo)
        ON DELETE RESTRICT;
     
    ALTER TABLE Acessam ADD CONSTRAINT FK_Acessam_1
        FOREIGN KEY (fk_Leitores_Email)
        REFERENCES Leitores (Email)
        ON DELETE RESTRICT;
     
    ALTER TABLE Acessam ADD CONSTRAINT FK_Acessam_2
        FOREIGN KEY (fk_Biblioteca_UrlLink)
        REFERENCES Biblioteca (UrlLink)
        ON DELETE SET NULL;
     
    ALTER TABLE Leem ADD CONSTRAINT FK_Leem_1
        FOREIGN KEY (fk_Livro_Titulo)
        REFERENCES Livro (Titulo)
        ON DELETE RESTRICT;
     
    ALTER TABLE Leem ADD CONSTRAINT FK_Leem_2
        FOREIGN KEY (fk_Leitores_Email)
        REFERENCES Leitores (Email)
        ON DELETE SET NULL;
    `);
}

criarConexao();