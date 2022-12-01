import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";
import style from "./NormalUserMasterPage.module.css";

const NormalUserMasterPage = () => {
  return (
    <>
      <div className={style.top}>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default NormalUserMasterPage;
