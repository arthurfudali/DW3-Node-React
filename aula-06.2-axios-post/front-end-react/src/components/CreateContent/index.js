import styles from "@/components/CreateContent/CreateContent.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
// falta capturar os dados, tratar e enviar ao backend
const CreateContent = () => {
  // criando os estados
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [platform, setPlatform] = useState("");
  const [price, setPrice] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const router = useRouter(); // hook do next para redirecionar o usuario

  // tratando a submissao do formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && platform && genre && year && price && rating !== "") {
      const game = {
        title: title,
        year: year,
        price: price,
        descriptions: {
          platform: platform,
          genre: genre,
          rating: rating,
        },
      };
      console.log(game);
      // fazendo post na api para cadastro
      try {
        const response = await axios.post("http://localhost:4000/games", game);
        console.log(response);
        if (response.status === 201) {
          alert("Jogo cadstrado com sucesso! ");
          // rediciona o usuario para a home
          router.push("/home");
        }
      } catch {
        (error) => {
          console.log(error);
        };
      }
    } else {
      alert("Preencha todos os campos");
    }
  };
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
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          name="platform"
          id="platform"
          placeholder="Insira a plataforma do jogo"
          className="inputPrimary"
          onChange={(e) => setPlatform(e.target.value)}
          value={platform}
        />
        <input
          type="number"
          name="year"
          id="year"
          placeholder="Insira o ano do jogo"
          className="inputPrimary"
          onChange={(e) => setYear(e.target.value)}
          value={year}
        />
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Insira o preço do jogo"
          className="inputPrimary"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <input
          type="text"
          name="genero"
          id="genero"
          placeholder="Insira o genero do jogo"
          className="inputPrimary"
          onChange={(e) => setGenre(e.target.value)}
          value={genre}
        />
        <input
          type="text"
          name="rating"
          id="rating"
          placeholder="Insira a classificação do jogo"
          className="inputPrimary"
          onChange={(e) => setRating(e.target.value)}
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
