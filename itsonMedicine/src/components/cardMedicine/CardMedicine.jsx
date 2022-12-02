import style from "./CardMedicine.module.css";
import IMG_MED from "/img/medicina.svg";
import useModal from "../../hooks/useModal";
const CardMedicine = () => {
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
        <p className={style.unities}>Unidades</p>
        <button
          className={style.btn}
          onClick={() => handleOnClick(true, "medicine")}
        >
          Ver más
        </button>
      </div>
    </>
  );
};

export default CardMedicine;
