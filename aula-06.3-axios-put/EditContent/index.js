import styles from "@/components/EditContent/EditContent.module.css";

const EditContent = ({ onClose }) => {
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
            <input type="hidden" name="id" />
            <input
              type="text"
              name="title"
              placeholder="Insira o novo título"
              className="inputPrimary"
              required
            />
            <input
              type="text"
              name="platform"
              placeholder="Insira a nova plataforma do jogo"
              className="inputPrimary"
              required
            />
            <input
              type="text"
              name="genre"
              placeholder="Insira o gênero do jogo"
              className="inputPrimary"
              required
            />
            <input
              type="text"
              name="rating"
              placeholder="Insira a classificação do jogo"
              className="inputPrimary"
              required
            />
            <input
              type="number"
              name="year"
              placeholder="Insira o novo ano"
              className="inputPrimary"
              required
            />
            <input
              type="text"
              name="price"
              placeholder="Insira o novo preço"
              className="inputPrimary"
              required
            />
            <input type="submit" value="Alterar" className="btnPrimary" />
          </form>
        </div>
      </div>
    </>
  );
};

export default EditContent;
