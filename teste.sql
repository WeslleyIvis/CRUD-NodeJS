CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUE(
    "Camilly",
    "email@hotmail.com",
    18
);

SELECT * FROM usuarios WHERE nome = "Camilly";

UPDATE usuarios SET nome = "novo Wes" WHERE nome = "Weslley"