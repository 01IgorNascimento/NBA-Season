var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listarTimePadrao", function (req, res) {
    usuarioController.listarTimePadrao(req, res);
});
router.get("/listarTimeUsuarios", function (req, res) {
    usuarioController.listarTimeUsuarios(req, res);
});
router.get("/listarTimePadraoSalario", function (req, res) {
    usuarioController.listarTimePadraoSalario(req, res);
});
router.get("/listarTimeUsuariosSalario", function (req, res) {
    usuarioController.listarTimeUsuariosSalario(req, res);
});
router.post("/listarUmTIme", function (req, res) {
    usuarioController.listarUmTIme(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

module.exports = router;