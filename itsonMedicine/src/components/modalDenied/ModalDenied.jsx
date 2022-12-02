import useModal from "../../hooks/useModal";

import style from "./ModalDenied.module.css";
import IMG_MED from "/img/medicina.svg";
const ModalDenied = () => {
  const { handleOnChangeModal } = useModal();

  return (
    <>
      <div className={style.containerModal}>
        <img src={IMG_MED} className={style.img} alt="medicina" />
        <div className={style.inputs}>
          <label>Nombre</label>
          <p>Paracetamolito</p>
          <label>Motivo de Rechazo</label>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quae
            consequatur numquam adipisci, sequi eos nam eaque magnam magni
            error?
          </p>
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

export default ModalDenied;
