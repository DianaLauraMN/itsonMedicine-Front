import style from "./CardMedicine.module.css";
import IMG_MED from "/img/medicina.svg";

const CardMedicine = () => {
  return (
    <>
      <div className={style.card}>
        <img className={style.cardImg} src={IMG_MED} alt="Card" />
        <h2 className={style.title}>Titulo</h2>
        <p className={style.unities}>Unidades</p>
        <button className={style.btn}>Ver más</button>
      </div>
    </>
  );
};

export default CardMedicine;
