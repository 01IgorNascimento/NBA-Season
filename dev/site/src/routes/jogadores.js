var express = require("express");
var router = express.Router();
var jogadorController = require("../controllers/jogadorController");

console.log("entramos na rota")

router.get("/", function (req, res) {
    jogadorController.testar(req, res);
});

router.get("/listar", function (req, res) {
    jogadorController.listar(req, res);
});

router.post("/cadastrarJogador", function (req, res) {
    jogadorController.cadastrarJogador(req, res);
})

router.post("/autenticar", function (req, res) {
    jogadorController.entrar(req, res);
});

module.exports = router;
