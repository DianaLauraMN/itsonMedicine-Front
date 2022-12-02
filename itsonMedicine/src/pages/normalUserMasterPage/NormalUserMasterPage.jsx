import style from "./NormalUserMasterPage.module.css";
import { Outlet } from "react-router-dom";
import useModal from "../../hooks/useModal";
import {
  Footer,
  Header,
  ModalDenied,
  ModalMedicine,
  ModalMessage,
} from "../../components";

const NormalUserMasterPage = () => {
  const { isModalOpen, modalSelected } = useModal();

  const ModalOption = {
    denied: <ModalDenied />,
    message: <ModalMessage />,
    medicine: <ModalMedicine />,
  };

  return (
    <section className={style.masterPage}>
      {isModalOpen ? (
        <div className={style.modals}>
          <div className={style.modal}>{ModalOption[modalSelected]}</div>
        </div>
      ) : null}

      <div className={style.top}>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </section>
  );
};

export default NormalUserMasterPage;
