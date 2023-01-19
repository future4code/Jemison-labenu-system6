import { connection } from "./connection"


const createTables = async () => {
    await connection.raw(`

CREATE TABLE Turmas (
    id int auto_increment primary key not null,
    nome varchar (255) unique not null,
    modulo int default 0
);

CREATE TABLE Estudantes (
    id int auto_increment primary key not null,
    nome varchar (255) unique not null,
    email varchar (255) unique not null,
    data_nasci DATE not null,
    turma_id int not null,
    foreign key (turma_id) references Turmas(id)
);
    
CREATE TABLE Hobby (
    id int auto_increment primary key not null,
    nome varchar (255) unique not null
);
    
CREATE TABLE Estudante_hobby (
    id int auto_increment primary key not null,
    estudante_id int not null,
    hobby_id int not null,
    foreign key (estudante_id) references Estudantes(id),
    foreign key (hobby_id) references Hobby(id)
);
    
CREATE TABLE Docentes (
    id int auto_increment primary key not null,
    nome varchar (255) unique not null,
    email varchar (255) unique not null,
    data_nasci DATE not null,
    turma_id int not null,
    foreign key (turma_id) references Turmas(id)
);
    
CREATE TABLE Especialidades (
    id int auto_increment primary key not null,
    nome varchar (255) unique not null
);
    
CREATE TABLE Docente_especialidade (
    id int auto_increment primary key not null,
    docente_id int not null,
    especialidade_id int not null,
    foreign key (docente_id) references Docentes(id),
    foreign key (especialidade_id) references Especialidades(id)
);

`)
    .then(() => {
        console.log(`Tabelas criadas com sucesso!`)
    })
    .catch((error: any) => (error))
}

createTables()
