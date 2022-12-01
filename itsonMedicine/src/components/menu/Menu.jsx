import style from "./Menu.module.css";
import IMG_ICON from "/img/menuIcon.svg";

const Menu = () => {
  return (
    <>
      <div className={style.menu}>
        <button className={style.menuBtn}>
          <img src={IMG_ICON} alt="icon" />
        </button>
      </div>
    </>
  );
};

export default Menu;
