var express = require("express");
var router = express.Router();
var timeController = require("../controllers/timeController");

console.log("entramos na rota")

router.get("/", function (req, res) {
    timeController.testar(req, res);
});

router.get("/listar", function (req, res) {
    timeController.listar(req, res);
});

router.post("/cadastrarTime", function (req, res) {
    timeController.cadastrarTime(req, res);
})

router.post("/autenticar", function (req, res) {
    timeController.entrar(req, res);
});

module.exports = router;