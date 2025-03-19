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
  async Create(title, year, price, descriptions) { //informa os campos a serem criados
    try {
      const newGame = new Game({
        // title : title é a mesma coisa
        title,
        year,
        price,
        descriptions
      });
      // .save é o metodo do mongoose para cadastrar
      await newGame.save();
    } catch (error) {
      console.log(error);
    }
  }
  // funcao para deletar registros
  async deleteGame(id) {
    try {
      await Game.findByIdAndDelete(id);
      console.log(`Game com a id: ${id} foi excluído.`);
    } catch (error) {
      console.log(error);
    }
  }
  // funcao para atualizar um registro
  async Update(id, title, year, price, descriptions) {
    try {
      await Game.findByIdAndUpdate(id, {
        // title : title
        title,
        year,
        price,
        descriptions
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
