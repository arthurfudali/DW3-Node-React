import { useState, useEffect } from "react";
import styles from "@/components/EditContent/EditContent.module.css";
import axios from "axios";

const EditContent = ({ onClose, game }) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [platform, setPlatform] = useState("");
  const [price, setPrice] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    if (game) {
      setId(game._id);
      setTitle(game.title);
      setYear(game.year);
      setPrice(game.price);
      setPlatform(game.descriptions.platform);
      setGenre(game.descriptions.genre);
      setRating(game.descriptions.rating);
    }
  }, [game]);

  // tratando a submissao do formulario
  const handleSubmit = async (e) => {
    e.preventDefalt();
    const updatedGame = {
      title,
      year,
      price,
      descriptions: { platform, genre, rating },
    };
    try {
      const response = axios.put(
        `https://localhost:4000/games/${id}`,
        updatedGame
      );
      if (response.status === 200) {
        alert("Jogo alterado com sucesso!");
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* CARD EDIÇÃO */}
      <div className={styles.editModal} id={styles.editModal}>
        <div className={styles.editContent}>
          <span className={styles.modalClose} onClick={onClose}>
            &times;
          </span>
          {/* TITLE */}
          <div className="title">
            <h2>Editar jogo</h2>
          </div>
          <form id="editForm">
            <input type="hidden" name="id" value={id} />
            <input
              type="text"
              name="title"
              placeholder="Insira o novo título"
              className="inputPrimary"
              required
              value={title}
            />
            <input
              type="text"
              name="platform"
              placeholder="Insira a nova plataforma do jogo"
              className="inputPrimary"
              required
              value={platform}
            />
            <input
              type="text"
              name="genre"
              placeholder="Insira o gênero do jogo"
              className="inputPrimary"
              required
              value={genre}
            />
            <input
              type="text"
              name="rating"
              placeholder="Insira a classificação do jogo"
              className="inputPrimary"
              required
              value={rating}
            />
            <input
              type="number"
              name="year"
              placeholder="Insira o novo ano"
              className="inputPrimary"
              required
              value={year}
            />
            <input
              type="text"
              name="price"
              placeholder="Insira o novo preço"
              className="inputPrimary"
              required
              value={price}
            />
            <input type="submit" value="Alterar" className="btnPrimary" />
          </form>
        </div>
      </div>
    </>
  );
};

export default EditContent;
