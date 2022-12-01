import style from "./CardMedicine.module.css";
import IMG_MED from "/img/medicina.svg";

const CardMedicine = () => {
  return (
    <>
      <div className={style.card}>
        <img className={style.cardImg} src={IMG_MED} alt="Card" />
        <h1 className={style.title}>Titulo</h1>
        <h3 className={style.unities}>Unidades</h3>
        <button className={style.btn}>Ver más</button>
      </div>
    </>
  );
};

export default CardMedicine;
