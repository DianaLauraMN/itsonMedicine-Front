import style from "./LoginCard.module.css";
import IMG_logo from "/img/logoItson.svg";
const LoginCard = () => {
  return (
    <>
      <img className={style.logo} src={IMG_logo} alt="itsonLogo" />
      <form className={style.form}>
        <div className={style.centerContent}>
          <div className={style.inputsLogin}>
            <div className={style.form__input}>
              <label htmlFor="">Email</label>
              <input email="email" type="text" name="emailInput" />
            </div>
            <div className={style.form__input}>
              <label htmlFor="">Contraseña</label>
              <input password="password" type="password" name="passwordInput" />
            </div>
          </div>
          <div className={style.btnsLogin}>
            <button>Iniciar Sesion</button>
            <a href="/signup">Crear cuenta</a>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginCard;
