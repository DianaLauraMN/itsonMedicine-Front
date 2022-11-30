import { Outlet } from "react-router-dom";
import { Footer, Header, Menu } from "../../components";

const NormalUserMasterPage = () => {
  return (
    <>
      <div className="top">
        <Header />
        <Menu />
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default NormalUserMasterPage;
