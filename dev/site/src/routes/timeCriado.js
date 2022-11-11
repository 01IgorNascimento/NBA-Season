var express = require("express");
var router = express.Router();
var timeCriadoController = require("../controllers/timeCriadoController");

console.log("entramos na rota")

router.get("/", function (req, res) {
    timeCriadoController.testar(req, res);
});

router.get("/listar", function (req, res) {
    timeCriadoController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    timeCriadoController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    timeCriadoController.entrar(req, res);
});

router.delete("/excluir", function (req, res) {
    timeCriadoController.excluir(req, res);
});

module.exports = router;
