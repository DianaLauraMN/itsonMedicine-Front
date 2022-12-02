import { CardMedicine, PageTitle, ModalDenied } from "../../components";
import style from "./MyDonationsPage.module.css";
const MyDonationsPage = () => {
  return (
    <>
      <div className={style.donationsContainer}>
        <div className={style.pageTitle}>
          <PageTitle />
        </div>
        <div className={style.cardsContainer}>
          <CardMedicine />
          <CardMedicine />
          <CardMedicine />
          <CardMedicine />
          <CardMedicine />
          <CardMedicine />
          <CardMedicine />
        </div>
      </div>
    </>
  );
};

export default MyDonationsPage;
