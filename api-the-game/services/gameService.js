import Game from "../models/Games.js";

class gameService {
  // async / await
  //funcao para listar os jogos
  async getAll() {
    try {
      const games = await Game.find();
      return games;
    } catch (error) {
      console.log(error);
    }
  }
  // funcao para cadastrar jogos
  async Create(title, platform, year, price) {
    try {
      const newGame = new Game({
        // title : title é a mesma coisa
        title,
        platform,
        year,
        price,
      });
      // .save é o metodo do mongoose para cadastrar
      await newGame.save();
    } catch (error) {
      console.log(error);
    }
  }
  async deleteGame(id) {
    try {
      await Game.findByIdAndDelete(id);
      console.log(`Game com a id: ${id} foi excluído.`);
    } catch (error) {
      console.log(error);
    }
  }
  async Update(id, title, platform, year, price) {
    try {
      await Game.findByIdAndUpdate(id, {
        // title : title
        title,
        platform,
        year,
        price,
      });
      console.log(`Dados do game com a id: ${id} alterados com sucesso.`);
    } catch (error) {
      console.log(error);
    }
  }
  // Função para listar um único jogo
  async getOne(id) {
    try {
      const game = await Game.findOne({ _id: id });
      return game;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new gameService();
