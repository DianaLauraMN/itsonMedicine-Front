import { Outlet } from "react-router-dom";
import style from "./AdminMasterPage.module.css";
import {
  SideBarMenu,
  Search,
  ModalAdminRequest,
  ModalAdminMedicine,
} from "../../components";
import useModal from "../../hooks/useModal";

const AdminMasterPage = () => {
  const { isModalOpen, modalSelected } = useModal();

  const ModalOption = {
    medicineAdmin: <ModalAdminMedicine />,
    requestAdmin: <ModalAdminRequest />,
  };

  return (
    <section>
      {isModalOpen ? (
        <div className={style.modals}>
          <div className={style.modal}>{ModalOption[modalSelected]}</div>
        </div>
      ) : null}

      <div className={style.container}>
        <div className={style.sidebar}>
          <SideBarMenu />
          <div className={style.ochenta}>
            <div className={style.search}>
              <Search />
            </div>
            <div className={style.page}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminMasterPage;
