var express = require("express");
var router = express.Router();

var timeController = require("../controllers/timeController");

router.get("/", function (req, res) {
    timeController.testar(req, res);
});

router.get("/listar", function (req, res) {
    timeController.listar(req, res);
});


router.post("/cadastrar", function (req, res) {
    timeController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    timeController.entrar(req, res);
});


router.get("/verificar", function (req, res) {
    timeController.verificar(req, res);
});

module.exports = router;