import style from "./MedicinesPage.module.css";
import { CardAdminMedicine } from "./../../components";
const MedicinesPage = () => {
  return (
    <>
      <div className={style.cardsContainer}>
        <CardAdminMedicine />
        <CardAdminMedicine />
        <CardAdminMedicine />
        <CardAdminMedicine />
        <CardAdminMedicine />
        <CardAdminMedicine />
      </div>
    </>
  );
};

export default MedicinesPage;
