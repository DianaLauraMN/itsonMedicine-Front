import style from "./SideBarMenu.module.css";
import IMG_LOGO from "/img/logoItson.svg";
const SideBarMenu = () => {
  return (
    <>
      <div className={style.layoutMenu}>
        <div className={style.menuTop}>
          <img src={IMG_LOGO} alt="Logo Itson" />
        </div>
        <div className={style.whiteLine}></div>
        <div className={style.menuBottom}>
          <a href="/admin/requests"> Solicitudes</a>
          <a href="/admin/medicines"> Medicines</a>
        </div>
      </div>
    </>
  );
};

export default SideBarMenu;
