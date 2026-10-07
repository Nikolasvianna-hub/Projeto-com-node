const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Bem vindo ao meu site!");
});

app.get("/produtos", function(req, res) {
    res.send("<h1>Lista de Produtos!</h1>");
});

app.get("/consulta/:parametro", function(req, res) {
    res.send("retorno consulta:" + req.params.parametro);
});

app.get("/cadastro/{:nome}", function(req, res) {
    var nome = req.params.nome;
    if (nome) {
        res.send("<h1>produto " + nome + " criado!</h1>");
    } else {
        res.send("produto criado!");
    }
});

app.get("/filtrar", function(req, res) {
    var cpf = req.query["cpf"];

    if (cpf) {
        res.send("retorno consulta: cpf = " + cpf);
    } else {
        res.send("CPF NÃO FOI FORNECIDO");
    }
});

app.listen(4000, function(erro) {
    if (erro) {
        console.log("Erro ao Iniciar.");
    } else {
        console.log("Servidor Iniciado.");
    }
});