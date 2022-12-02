import { Outlet } from "react-router-dom";
import style from "./AdminMasterPage.module.css";
import { SideBarMenu, Search } from "../../components";

const AdminMasterPage = () => {
  return (
    <>
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
    </>
  );
};

export default AdminMasterPage;
