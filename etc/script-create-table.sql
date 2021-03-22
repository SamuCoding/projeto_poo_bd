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