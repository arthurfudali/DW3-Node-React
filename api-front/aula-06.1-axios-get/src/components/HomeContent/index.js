import { useState, useEffect } from "react";
import axios from "axios";
import styles from "@/components/HomeContent/HomeContent.module.css";
import Loading from "../Loading";

const HomeContent = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("http://localhost:4000/games");
        setGames(response.data.games); // Atualiza o estado com os jogos recebidos
        // console.log(response.data.games)
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    // Chama a função para buscar os jogos
    fetchGames();
  }, []); // O array vazio [] significa que o useEffect só será chamado uma vez, quando o componente for montado

  const deleteGame = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4000/games/${id}`);
      if (response.status === 204) {
        alert("jogo excluido com sucesso");
        setGames()(games.filter((game) => game._id !== id)); // Atualiza o estado para remover o jogo excluído
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className={styles.homeContent}>
        {/* CARD LISTA DE JOGOS */}
        <div className={styles.listGamesCard}>
          {/* TITLE */}
          <div className={styles.title}>
            <h2>Lista de jogos</h2>
          </div>
          <Loading loading={loading} />
          <div className={styles.games} id={styles.games}>
            {/* Lista de jogos irá aqui */}
            {games.map((game) => (
              <ul key={game._id} className={styles.listGames}>
                <div className={styles.gameImg}>
                  <img src="images/game_cd_cover.png" alt="Jogo em estoque" />
                </div>
                <div className={styles.gameInfo}>
                  <h3>{game.title}</h3>
                  <li>Plataforma: {game.descriptions.platform}</li>
                  <li>Gênero: {game.descriptions.genre}</li>
                  <li>Classificação: {game.descriptions.rating}</li>
                  <li>Ano: {game.year}</li>
                  <li>
                    Preço:
                    {game.price.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </li>
                </div>
                {/* Botão para excluir */}
                <button
                  className={styles.btnDel}
                  onClick={() => {
                    const confirmed = window.confirm(
                      "Deseja mesmo excluir o jogo?"
                    );
                    if (confirmed) {
                      deleteGame(game._id);
                    }
                  }}
                >
                  Deletar
                </button>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
