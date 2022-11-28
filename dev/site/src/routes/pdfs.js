var express = require("express");
var router = express.Router();

var pdfController = require("../controllers/pdfController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listarTimePadrao", function (req, res) {
    pdfController.listarTimePadrao(req, res);
});

router.post("/listarUmUsuario", function (req, res) {
    pdfController.listarUmUsuario(req, res);
});
router.post("/listarOrdermCriacao", function (req, res) {
    pdfController.listarOrdermCriacao(req, res);
});
router.post("/listarMaiores", function (req, res) {
    pdfController.listarMaiores(req, res);
});
router.get("/listarTimeMaisForte", function (req, res) {
    pdfController.listarTimeMaisForte(req, res);
});
router.get("/menorIdade", function (req, res) {
    pdfController.menorIdade(req, res);
});
router.get("/maiorIdade", function (req, res) {
    pdfController.maiorIdade(req, res);
});
router.get("/jogadorMaisEscolhido", function (req, res) {
    pdfController.jogadorMaisEscolhido(req, res);
});



module.exports = router;