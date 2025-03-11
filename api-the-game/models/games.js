import mongoose from "mongoose";
const gameSchema = new mongoose.Schema({
  title: String,
  platform: String,
  year: Number,
  price: Number,
});
// criação da colecao games no banco de dados
// o nome da colecao é game, mas a coleção sera criada como games
const Game = mongoose.model("Game", gameSchema);
export default Game;
