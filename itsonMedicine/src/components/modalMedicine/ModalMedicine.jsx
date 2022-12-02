import style from "./ModalMedicine.module.css";
import useModal from "../../hooks/useModal";
import IMG_MED from "/img/medicina.svg";
const ModalMedicine = () => {
  const { handleOnChangeModal } = useModal();
  return (
    <>
      <div className={style.cardContainer}>
        <img src={IMG_MED} className={style.img} alt="" />
        <div>
          <label className={style.labelBlue}>Nombre</label>
          <label>Pracetamol</label>
        </div>

        <div>
          <label className={style.labelBlue}>Cantidad</label>
          <label>3 unidades</label>
        </div>
        <div>
          <label className={style.labelBlue}>Ubicación</label>
          <label>ITSON Nainari</label>
        </div>

        <button
          className={style.listoBtn}
          onClick={() => handleOnChangeModal(false)}
        >
          Cerrar
        </button>
      </div>
    </>
  );
};

export default ModalMedicine;
