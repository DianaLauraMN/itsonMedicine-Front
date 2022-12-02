import style from "./DonationsPage.module.css";
import {
  Search,
  CardMedicine,
  Paginator,
  ModalMedicine,
} from "../../components";
const DonationsPage = () => {
  return (
    <>
      <div className={style.donationsContainer}>
        <div className={style.search}>
          <Search />
        </div>
        <div className={style.cardsContainer}>
          <CardMedicine />
          <CardMedicine />
          <CardMedicine />
          <CardMedicine />
          <CardMedicine />
          <CardMedicine />
          <CardMedicine />
          <CardMedicine />
          <CardMedicine />
          <CardMedicine />
        </div>
        <div className={style.paginator}>
          <Paginator />
        </div>
      </div>
    </>
  );
};

export default DonationsPage;
