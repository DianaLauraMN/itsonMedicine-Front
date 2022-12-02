import style from "./FormDonation.module.css";
import IMG_PICTURE from "/img/picture.svg";
import useModal from "../../hooks/useModal";
const FormDonation = () => {
  const { handleOnChangeModal, handleOnChangeModalSelected } = useModal();

  const handleOnClick = (state, option) => {
    handleOnChangeModal(state);
    handleOnChangeModalSelected(option);
  };

  return (
    <>
      <div className={style.formDonation}>
        <form>
          <div className={style.centerIMG}>
            <img src={IMG_PICTURE} className={style.img} alt="Image" />
          </div>
          <input type="file" />
          <div className={style.inputsForm}>
            <label>Nombre</label>
            <input type="text" nombre="nombre" name="nombreInput" />
            <div>
              <div className={style.labels}>
                <label>Cantidad</label>
                <label>Tipo</label>
              </div>
              <div className={style.inputs}>
                <input type="text" cantidad="cantidad" name="cantidadInput" />
                <input type="text" tipo="tipo" name="tipoInput" />
              </div>
            </div>
            <label>Detalles</label>
            <input type="text" detalles="detalles" name="detallesInput" />
          </div>
          <div className={style.centerButton}>
            <button
              className={style.enviar}
              onClick={(e) => {
                e.preventDefault();
                handleOnClick(true, "message");
              }}
            >
              Enviar donación
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormDonation;
