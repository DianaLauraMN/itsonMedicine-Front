import IMG_Round from "/img/agradecimiento.svg";
import useModal from "../../hooks/useModal";
import style from "./ModalMessage.module.css";

const ModalMessage = () => {
  const { handleOnChangeModal } = useModal();
  return (
    <>
      <div className={style.containerModal}>
        <img src={IMG_Round} className={style.img} alt="" />
        <div className={style.paragraph}>
          <p>
            Muchas gracias por tu aportación espera a que ITSON acepte la
            donación.
          </p>
          <p>Muestra este codigo a enfermeria:</p>
          <p>#fahdfahdhafslkj</p>
        </div>
        <button
          className={style.listoBtn}
          onClick={() => handleOnChangeModal(false)}
        >
          Listo
        </button>
      </div>
    </>
  );
};

export default ModalMessage;
