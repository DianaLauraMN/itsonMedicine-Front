import { Outlet } from "react-router-dom";
import style from "./AdminMasterPage.module.css";
import {
  ModalAdminMedicine,
  ModalAdminRequest,
  SideBarMenu,
  Search,
} from "../../components";
import { MedicinesPage } from "../../pages";

const AdminMasterPage = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.sidebar}>
          <SideBarMenu />
        </div>
        <div className={style.medicines}>
          <MedicinesPage />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminMasterPage;
