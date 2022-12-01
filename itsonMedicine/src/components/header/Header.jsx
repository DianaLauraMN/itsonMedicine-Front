import IMG_LOGO from "/img/logoItson.svg";
import style from "./Header.module.css";
import { Menu } from "../";
const Header = () => {
  return (
    <>
      <main className={style.mainHeader}>
        <div className={style.topHeader}>
          <img src={IMG_LOGO} alt="logo" />
          <Menu />
        </div>
        <div className={style.bottomHeader}>
          <p>
            “No podemos ayudar a todos, pero todos podemos ayudar a alguien”
          </p>
          <p>- Ronald Reagan</p>
        </div>
      </main>
    </>
  );
};

export default Header;
