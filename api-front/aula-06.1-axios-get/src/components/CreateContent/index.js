import styles from "@/components/CreateContent/CreateContent.module.css";
import { useState } from "react";
// falta capturar os dados, tratar e enviar ao backend 
const CreateContent = () => {
  // criando os estados
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [platform, setPlatform] = useState("");
  const [price, setPrice] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

  // tratando a submissao do formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if(title && platform && genre && year && price && rating !== "") {
      const game ={
        title: title,
        year: year,
        platform: platform,
        price: price,
        genre: genre,
        rating: rating
      }
      console.log(game);

    }
  }
  return (
    <div className={styles.createContent}>
      <div className="title">
        <h2>Cadastrar novo jogo</h2>
      </div>
      <form id="createForm" className="formPrimary" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Insira o título do jogo"
          className="inputPrimary"
          onChangeCapture={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          name="platform"
          id="platform"
          placeholder="Insira a plataforma do jogo"
          className="inputPrimary"
          onChangeCapture={(e) => setPlatform(e.target.value)}
          value={platform}
        />
        <input
          type="number"
          name="year"
          id="year"
          placeholder="Insira o ano do jogo"
          className="inputPrimary"
          onChangeCapture={(e) => setYear(e.target.value)}
          value={year}
        />
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Insira o preço do jogo"
          className="inputPrimary"
          onChangeCapture={(e) => setPrice(e.target.value)}
          value={price}
        />
        <input
          type="text"
          name="genero"
          id="genero"
          placeholder="Insira o genero do jogo"
          className="inputPrimary"
          onChangeCapture={(e) => setGenre(e.target.value)}
          value={genre}
        />
        <input
          type="text"
          name="rating"
          id="rating"
          placeholder="Insira a classificação do jogo"
          className="inputPrimary"
          onChangeCapture={(e) => setRating(e.target.value)}
          value={rating}
        />
        <input
          type="submit"
          value="Cadastrar"
          id="createBtn"
          className="btnPrimary"
        />
      </form>
    </div>
  );
};

export default CreateContent;
