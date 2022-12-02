import style from "./ModalAdminMedicine.module.css";
import useModal from "../../hooks/useModal";
import IMG_MED from "/img/medicina.svg";

const ModalAdminMedicine = () => {
  const { handleOnChangeModal } = useModal();
  return (
    <>
      <div className={style.cardContainer}>
        <img src={IMG_MED} className={style.img} alt="" />
        <label>Nombre:</label>
        <div>
          <input type="text" />
        </div>
        <label>Cantidad:</label>
        <div>
          <input type="text" />
        </div>
        <label>Ubicación:</label>
        <div>
          <input type="text" />
        </div>
        <label>Tipo:</label>
        <div>
          <input type="text" />
        </div>
        <label>Detalles:</label>
        <div>
          <input type="text" />
        </div>

        <button
          className={style.listoBtn}
          onClick={() => handleOnChangeModal(false)}
        >
          Aceptar
        </button>
        <button
          className={style.listoBtn}
          onClick={() => handleOnChangeModal(false)}
        >
          Rechazar
        </button>
      </div>
    </>
  );
};

export default ModalAdminMedicine;
