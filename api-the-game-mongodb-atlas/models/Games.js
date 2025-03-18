import mongoose from "mongoose";

// Documento aninhado
const descriptionSchema = new mongoose.Schema({
  genre: String,
  platform: String,
  rating: String,
});

// Documento original
const gameSchema = new mongoose.Schema({
  title: String,
  year: Number,
  price: Number,
  descriptions: [descriptionSchema]//nesse caso, o formato de array é opcional
});

// criação da colecao games no banco de dados
// o nome da colecao é game, mas a coleção sera criada como games
const Game = mongoose.model("Game", gameSchema);
export default Game;
