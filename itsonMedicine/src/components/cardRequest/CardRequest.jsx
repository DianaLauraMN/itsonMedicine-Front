import style from "./CardRequest.module.css";
import useModal from "../../hooks/useModal";
import IMG_MED from "/img/yellowMedicine.svg";

const CardRequest = () => {
  const { handleOnChangeModal, handleOnChangeModalSelected } = useModal();

  const handleOnClick = (state, option) => {
    handleOnChangeModal(state);
    handleOnChangeModalSelected(option);
  };
  return (
    <>
      <div className={style.card}>
        <img className={style.cardImg} src={IMG_MED} alt="Card" />
        <h2 className={style.title}>Titulo</h2>
        <p className={style.unities}>Identificador</p>
        <button
          className={style.btn}
          onClick={() => handleOnClick(true, "requestAdmin")}
        >
          Ver Solicitud
        </button>
      </div>
    </>
  );
};

export default CardRequest;
