import express from "express";
const gameRoutes = express.Router();
import gameController from "../controllers/gameController.js";

// Endpoint para listar todos os games (rota)
gameRoutes.get("/games", gameController.getAllGames);

// Endpoit para cadastrar um jogo
// as rotas sao iguais, mas como o metodo e diferente a API sabe reconhecer
gameRoutes.post("/games", gameController.createGame);

// Endpoint para excluir um jogo
gameRoutes.delete("/games/:id", gameController.deleteGame);

export default gameRoutes;
