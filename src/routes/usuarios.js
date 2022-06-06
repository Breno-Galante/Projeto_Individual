var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/entrar", function (req, res) {
    usuarioController.entrar(req, res);
});


router.put("/cadastrar_elo", function (req, res) {
    usuarioController.cadastrar_elo(req, res);
});

router.post("/votoMusica", function (req, res) {
    usuarioController.votoMusica(req, res);
});

router.get("/puxar_voto_musica", function (req, res) {
    usuarioController.puxar_voto_musica(req, res);
});

router.get("/puxar_voto_rota", function (req, res) {
    usuarioController.puxar_voto_rota(req, res);
});

module.exports = router;