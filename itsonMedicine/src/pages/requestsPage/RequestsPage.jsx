import style from "./RequestsPage.module.css";
import { CardRequest } from "./../../components";

const RequestsPage = () => {
  return (
    <>
      <div className={style.cardsContainer}>
        <CardRequest />
        <CardRequest />
        <CardRequest />
        <CardRequest />
        <CardRequest />
        <CardRequest />
      </div>
    </>
  );
};

export default RequestsPage;
