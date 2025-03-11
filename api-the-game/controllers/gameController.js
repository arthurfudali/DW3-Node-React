import gameService from "../services/gameService.js";
import { ObjectId } from "mongodb";

const getAllGames = async (req, res) => {
  try {
    const games = await gameService.getAll();
    // Requisição feita com sucesso - Cod. 200 (OK)
    res.status(200).json({ games: games });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};
// funcao para cadastrar jogos
const createGame = async (req, res) => {
  try {
    // capturando valores
    const { title, platform, year, price } = req.body;
    // cadastrando no banco
    await gameService.Create(title, platform, year, price);
    res.sendStatus(201); // codigo 201 (CREATED)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};
// funcao para deletar jogos
const deleteGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      gameService.deleteGame(id);
      res.sendStatus(204); // codigo 204 (no content)
    } else {
      res.sendStatus(400); // 400 (bad request)
    }
  } catch (error) {
    console.log(error);
  }
};
export default { getAllGames, createGame, deleteGame };
