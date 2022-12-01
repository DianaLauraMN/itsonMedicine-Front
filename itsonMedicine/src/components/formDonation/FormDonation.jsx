import style from "./FormDonation.module.css";
import IMG_PICTURE from "/img/picture.svg";
const FormDonation = () => {
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
            <button type="submit" className={style.enviar}>
              Enviar donación
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormDonation;
