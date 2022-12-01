import { FormDonation, PageTitle } from "../../components";
import style from "./DonatePage.module.css";
const DonatePage = () => {
  return (
    <>
      <div>
        <div className={style.pageTitle}>
          <PageTitle />
        </div>
        <div className={style.formDonation}>
          <FormDonation />
        </div>
      </div>
    </>
  );
};

export default DonatePage;
