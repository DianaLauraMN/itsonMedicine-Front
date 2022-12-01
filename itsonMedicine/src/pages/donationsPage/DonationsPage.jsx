import style from "./DonationsPage.module.css";
import { Search, CardMedicine, Paginator } from "../../components";
const DonationsPage = () => {
  return (
    <>
      <div className={style.donationsContainer}>
        <div className={style.search}>
          <Search />
        </div>
        <div>
          <CardMedicine />
        </div>
        <div>
          <Paginator />
        </div>
      </div>
    </>
  );
};

export default DonationsPage;
